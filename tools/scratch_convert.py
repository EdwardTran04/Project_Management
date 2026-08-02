import os
import re
import csv

md_path = r"e:\VSS-Source\sdlc-skill\agent-internal\testcase_canh_bao_logwork.md"
csv_path = r"e:\VSS-Source\sdlc-skill\agent-internal\docs\canh_bao_logwork\testcases_canh_bao_logwork.csv"

# Ensure output directory exists
os.makedirs(os.path.dirname(csv_path), exist_ok=True)

if not os.path.exists(md_path):
    print(f"Error: MD file not found at {md_path}")
    exit(1)

with open(md_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

testcases = []
current_section = "Happy Path"
in_phase_3 = False

# Match headers like ### 1. UI/Giao diện (8 cases) or ### 3.1. Happy Path
section_pattern = re.compile(r"###\s*\d+(?:\.\d+)?\.\s*(?:Suite\s*\d+\s*:\s*)?([^(#\n]+)")

for line in lines:
    line = line.strip()
    
    # Track Phase 3 boundary
    if "## TESTCASE CHI TIẾT" in line or "## PHASE 3:" in line:
        in_phase_3 = True
        continue
    elif "## SUMMARY" in line or "## PHASE 4:" in line:
        in_phase_3 = False
        continue
        
    if not in_phase_3:
        continue
        
    # Detect Section
    sec_match = section_pattern.match(line)
    if sec_match:
        section_name = sec_match.group(1).split(":")[0].strip()
        # Clean parentheses
        section_name = re.sub(r"\s*\(.*?\)", "", section_name).strip()
        if "happy path" in section_name.lower():
            current_section = "Happy Path"
        elif "negative" in section_name.lower():
            current_section = "Negative Cases"
        elif "business logic" in section_name.lower() or "quy tắc nghiệp vụ" in section_name.lower():
            current_section = "Business Logic"
        elif "decision table" in line.lower() or "bảng quyết định" in line.lower():
            current_section = "Business Logic"
        elif "use case" in line.lower() or "kịch bản kiểm thử dựa trên use case" in line.lower():
            current_section = "Business Logic"
        elif "permission" in section_name.lower() or "phân quyền" in section_name.lower():
            current_section = "Permission & Security"
        elif "mobile" in section_name.lower() or "đặc thù mobile" in section_name.lower():
            current_section = "Mobile-specific & Interruptions"
        elif "pairwise" in section_name.lower() or "tổ hợp" in section_name.lower():
            current_section = "Pairwise Testing"
        continue
        
    # Detect table row
    if line.startswith("|") and line.endswith("|"):
        cols = [c.strip() for c in line.split("|")[1:-1]]
        
        if not cols or "TC ID" in cols[0] or cols[0].startswith("---") or cols[0].startswith(":---"):
            continue
            
        if len(cols) >= 7:
            tc_id = cols[0].replace("**", "").strip()
            common_id = cols[1].replace("<br>", "\n").replace("<br/>", "\n").strip()
            # Clean common ID
            common_id = common_id.split("\n")[0].strip()
            
            title = cols[2].strip()
            steps = cols[3].replace("<br>", "\n").replace("<br/>", "\n").strip()
            expected = cols[4].replace("<br>", "\n").replace("<br/>", "\n").strip()
            priority = cols[5].strip()
            
            if priority not in ["Critical", "High", "Medium", "Low"]:
                priority = "High"
                
            testcases.append({
                "TC ID": tc_id,
                "Common ID": common_id,
                "Tiêu đề": title,
                "Steps": steps,
                "Expected Result": expected,
                "Priority": priority,
                "Section": current_section
            })

with open(csv_path, 'w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=["TC ID", "Common ID", "Tiêu đề", "Steps", "Expected Result", "Priority", "Section"])
    writer.writeheader()
    for tc in testcases:
        writer.writerow(tc)

print(f"SUCCESS: Extracted {len(testcases)} testcases to {csv_path}")
