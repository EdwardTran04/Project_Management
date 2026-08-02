import sys
import os
import argparse
from pathlib import Path
from docling.document_converter import DocumentConverter

def convert_doc_to_docx_win32(doc_path: Path) -> Path:
    """
    Converts a legacy .doc file to .docx using MS Word via win32com.
    Only works on Windows with MS Word installed.
    """
    try:
        import win32com.client
    except ImportError:
        raise RuntimeError(
            "Library 'pywin32' is required to convert legacy .doc files on Windows.\n"
            "Please run: pip install pywin32"
        )
        
    docx_path = doc_path.with_suffix('.docx')
    print(f"Converting legacy .doc to .docx via MS Word APIs...")
    
    word = None
    try:
        word = win32com.client.Dispatch("Word.Application")
        # Keep Word invisible
        word.Visible = False
        
        doc = word.Documents.Open(str(doc_path))
        # 16 represents wdFormatXMLDocument (.docx)
        doc.SaveAs2(str(docx_path), FileFormat=16)
        doc.Close()
        print(f"Temporary .docx file created: {docx_path}")
        return docx_path
    except Exception as e:
        raise RuntimeError(f"Failed to convert .doc to .docx using MS Word: {e}")
    finally:
        if word:
            word.Quit()

def convert_doc_to_markdown(input_path: str, output_path: str = None):
    """
    Converts a Word Document (.docx or legacy .doc) into Markdown format.
    """
    input_file = Path(input_path).resolve()
    if not input_file.exists():
        print(f"Error: File not found at '{input_file}'")
        return False
        
    ext = input_file.suffix.lower()
    if ext not in ['.doc', '.docx']:
        print(f"Error: Unsupported file format '{ext}'. Only .docx and .doc are supported.")
        return False
        
    temp_docx = None
    file_to_convert = input_file
    
    # Handle legacy .doc files
    if ext == '.doc':
        if os.name != 'nt':
            print("Error: Conversion of legacy .doc files is only supported on Windows.")
            return False
        try:
            temp_docx = convert_doc_to_docx_win32(input_file)
            file_to_convert = temp_docx
        except Exception as e:
            print(f"[ERROR] {e}")
            return False
            
    print(f"Initializing docling converter...")
    print(f"Converting: {file_to_convert}")
    
    try:
        # Initialize DocumentConverter
        converter = DocumentConverter()
        
        # Convert document
        result = converter.convert(str(file_to_convert))
        
        # Export to markdown
        markdown_text = result.document.export_to_markdown()
        
        # Determine output file path (relative to original input file)
        if not output_path:
            output_file = input_file.with_suffix('.md')
        else:
            output_file = Path(output_path).resolve()
            
        # Ensure output directory exists
        output_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Save output
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(markdown_text)
            
        print(f"\n[SUCCESS] Conversion completed successfully!")
        print(f"Output saved to: {output_file}")
        return True
        
    except Exception as e:
        print(f"\n[ERROR] An error occurred during docling conversion:")
        print(e)
        return False
    finally:
        # Clean up temporary .docx if created
        if temp_docx and temp_docx.exists():
            try:
                os.remove(temp_docx)
                print("Cleaned up temporary .docx file.")
            except Exception:
                pass

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert Word Documents (.docx/.doc) to Markdown using IBM docling.")
    parser.add_argument("input", nargs="?", help="Path to the input .docx or .doc file")
    parser.add_argument("-o", "--output", help="Path to the output Markdown file (optional)")
    
    args = parser.parse_args()
    
    if not args.input:
        print("=== Docling Word to Markdown Converter ===")
        input_path = input("Enter path to Word file (.docx/.doc): ").strip().strip('"\'')
        if not input_path:
            print("No input file provided. Exiting.")
            sys.exit(1)
            
        output_path = input("Enter output MD path (Press Enter to save in same folder): ").strip().strip('"\'')
        if not output_path:
            output_path = None
            
        convert_doc_to_markdown(input_path, output_path)
    else:
        convert_doc_to_markdown(args.input, args.output)
