import zipfile
import re
import os

def extract_text_from_pptx(pptx_path):
    output = []
    output.append(f"\n==================================================")
    output.append(f"FILE: {os.path.basename(pptx_path)}")
    output.append(f"==================================================")
    if not os.path.exists(pptx_path):
        return f"File not found: {pptx_path}"
    
    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            slide_files = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            if not slide_files:
                return "No slides found in pptx."
            # Sort slides numerically
            slide_files.sort(key=lambda x: int(re.findall(r'\d+', x)[0]))
            
            for slide_file in slide_files:
                slide_num = re.findall(r'\d+', slide_file)[0]
                xml_content = z.read(slide_file).decode('utf-8', errors='ignore')
                
                # Extract text
                texts = re.findall(r'<a:t>(.*?)</a:t>', xml_content)
                if texts:
                    clean_texts = [t.strip() for t in texts if t.strip()]
                    if clean_texts:
                        output.append(f"\n[Slide {slide_num}]:")
                        output.append(" | ".join(clean_texts))
    except Exception as e:
        output.append(f"Error parsing {pptx_path}: {e}")
    return "\n".join(output)

if __name__ == "__main__":
    t16 = extract_text_from_pptx("src/doc/Tiết 16.pptx")
    t17 = extract_text_from_pptx("src/doc/Tiết 17.pptx")
    
    with open("src/doc/extracted_content.txt", "w", encoding="utf-8") as f:
        f.write(t16 + "\n" + t17)
    print("Done extracting content to src/doc/extracted_content.txt")
