const fs = require('fs');
const path = 'c:/Users/Administrator/Documents/quantm18/Project_Management/deliverables/srs/unzipped_docx/word/document.xml';

const xml = fs.readFileSync(path, 'utf8');

// Simple regex parser for w:p and w:tbl
// Or replace tags to get text preserving structure
function cleanText(xmlStr) {
  // Extract paragraphs
  const pRegex = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g;
  const lines = [];
  let match;
  while ((match = pRegex.exec(xmlStr)) !== null) {
    const pContent = match[1];
    // extract all <w:t>
    const tRegex = /<w:t\b[^>]*>([\s\S]*?)<\/w:t>/g;
    let tMatch;
    let text = '';
    while ((tMatch = tRegex.exec(pContent)) !== null) {
      text += tMatch[1];
    }
    if (text.trim()) {
      lines.push(text.trim());
    }
  }
  return lines;
}

const lines = cleanText(xml);
console.log('Total lines extracted:', lines.length);

// Save to markdown file for easy viewing
fs.writeFileSync('c:/Users/Administrator/Documents/quantm18/Project_Management/deliverables/srs/TaiLieuNghiepVu_extracted.md', lines.join('\n\n'), 'utf8');
console.log('Saved to TaiLieuNghiepVu_extracted.md');
