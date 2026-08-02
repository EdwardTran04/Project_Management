import sys
import os
import argparse
from pathlib import Path
from docling.document_converter import DocumentConverter

def convert_pdf_to_markdown(input_path: str, output_path: str = None):
    """
    Converts a PDF (or other docling-supported documents) into Markdown format.
    
    Args:
        input_path (str): The path to the source document.
        output_path (str, optional): The path where the markdown file should be saved.
                                     Defaults to same folder and name as input, with .md extension.
    """
    # Resolve absolute path and verify existence
    input_file = Path(input_path).resolve()
    if not input_file.exists():
        print(f"Error: File not found at '{input_file}'")
        return False
        
    print(f"Initializing docling converter...")
    print(f"Converting: {input_file}")
    
    try:
        # Initialize the DocumentConverter
        converter = DocumentConverter()
        
        # Convert document
        result = converter.convert(str(input_file))
        
        # Export contents to markdown
        markdown_text = result.document.export_to_markdown()
        
        # Determine output file path
        if not output_path:
            output_file = input_file.with_suffix('.md')
        else:
            output_file = Path(output_path).resolve()
            
        # Ensure parent directory of output file exists
        output_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Save output
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(markdown_text)
            
        print(f"\n[SUCCESS] Conversion completed successfully!")
        print(f"Output saved to: {output_file}")
        return True
        
    except Exception as e:
        print(f"\n[ERROR] An error occurred during conversion:")
        print(e)
        return False

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert PDF (or other supported documents) to Markdown using IBM docling.")
    parser.add_argument("input", nargs="?", help="Path to the input PDF/document file")
    parser.add_argument("-o", "--output", help="Path to the output Markdown file (optional)")
    
    args = parser.parse_args()
    
    # If no input file is supplied via command line arguments, use interactive mode
    if not args.input:
        print("=== Docling PDF to Markdown Converter ===")
        input_path = input("Enter path to PDF file: ").strip().strip('"\'')
        if not input_path:
            print("No input file provided. Exiting.")
            sys.exit(1)
            
        output_path = input("Enter output MD path (Press Enter to save in same folder): ").strip().strip('"\'')
        if not output_path:
            output_path = None
            
        convert_pdf_to_markdown(input_path, output_path)
    else:
        convert_pdf_to_markdown(args.input, args.output)
