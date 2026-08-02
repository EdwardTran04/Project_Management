import argparse
import os
import pandas as pd
import xlwings as xw

def main():
    parser = argparse.ArgumentParser(description='Export VTIT QA Testcases to Excel Template')
    parser.add_argument('--csv', required=True, help='Path to input CSV file')
    parser.add_argument('--output', required=True, help='Path to output Excel file')
    parser.add_argument('--template', default=r'E:\AI\template\file output.xlsx', help='Path to Excel template')
    parser.add_argument('--module-name', required=True, help='Module Name (e.g. Danh sách hồ sơ dự thầu)')
    parser.add_argument('--module-id', required=True, help='Module ID (e.g. BIDDING.PROPOSAL_LIST)')
    args = parser.parse_args()

    print(f"Loading CSV from {args.csv}")
    df = pd.read_csv(args.csv)

    print("Starting Excel Application...")
    app = xw.App(visible=False)
    try:
        app.screen_updating = False
        app.calculation = 'manual'
        app.display_alerts = False
        
        print("Opening template...")
        wb = app.books.open(args.template)
        
        # Locate target sheet
        old_sheet_name = '51.Quản lý đối tượng thanh tra'
        try:
            sheet = wb.sheets[old_sheet_name]
        except:
            sheet = wb.sheets[4] # Fallback
            old_sheet_name = sheet.name
            
        sheet.name = 'Danh sách Testcase'
        
        # Update metadata
        sheet.range('E3').value = args.module_name
        sheet.range('E4').value = args.module_id
        sheet.range('E8').value = len(df)
        sheet.range('E9').value = len(df)
        
        # Header colors
        for row in [10, 11]:
            rng = sheet.range(f'B{row}:R{row}')
            rng.color = (79, 129, 189)
            rng.font.color = (255, 255, 255)
            rng.font.bold = True
            
        # Clear old rows
        last_row = sheet.range('B' + str(sheet.cells.last_cell.row)).end('up').row
        if last_row >= 12:
            sheet.range(f'12:{max(12, last_row + 10)}').clear()
            
        current_row = 12
        
        def insert_group_row(text, color):
            nonlocal current_row
            rng = sheet.range(f'B{current_row}:R{current_row}')
            rng.color = color
            try:
                rng.api.Borders.Weight = 2
            except:
                pass
            sheet.range(f'C{current_row}').value = text
            rng.font.bold = True
            current_row += 1

        insert_group_row(f'PRE-CONDITION: Đăng nhập hệ thống hợp lệ, truy cập {args.module_name}', (255, 255, 0))
        
        current_section = None
        for _, record in df.iterrows():
            # Support dynamic grouping if a 'Section' column exists in CSV
            section = record.get('Section', None)
            if section and str(section) != 'nan' and section != current_section:
                insert_group_row(str(section), (146, 208, 80)) # Green Level 2
                current_section = section
                
            tc_id = record.get('TC ID', '')
            
            # Content mapping
            sheet.range(f'B{current_row}').value = tc_id
            sheet.range(f'B{current_row}').color = (146, 208, 80)
            sheet.range(f'B{current_row}').font.bold = True
            
            sheet.range(f'C{current_row}').value = record.get('Tiêu đề', '')
            sheet.range(f'D{current_row}').value = record.get('Steps', '')
            sheet.range(f'E{current_row}').value = record.get('Expected Result', '')
            
            rng = sheet.range(f'B{current_row}:R{current_row}')
            try:
                rng.api.WrapText = True
                rng.api.Borders.Weight = 2
                rng.api.VerticalAlignment = -4108 # xlCenter
            except:
                pass
            current_row += 1

        # Summary sheet update
        try:
            summary_sheet = wb.sheets['Tổng hợp']
            summary_sheet.api.Cells.Replace(What=old_sheet_name, Replacement="Danh sách Testcase")
        except Exception as e:
            print(f"Summary sheet update failed: {e}")

        # Final Save
        if os.path.exists(args.output):
            os.remove(args.output)
        wb.save(args.output)
        print(f"Successfully exported to {args.output}")
        
    finally:
        try:
            app.calculation = 'automatic'
            wb.close()
        except:
            pass
        app.quit()

if __name__ == '__main__':
    main()
