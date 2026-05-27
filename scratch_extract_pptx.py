import zipfile
import re
import os

def extract_text_from_pptx(pptx_path):
    print(f"\n==================================================")
    print(f"FILE: {os.path.basename(pptx_path)}")
    print(f"==================================================")
    if not os.path.exists(pptx_path):
        print(f"File not found: {pptx_path}")
        return
    
    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            slide_files = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            if not slide_files:
                print("No slides found in pptx.")
                return
            # Sort slides numerically by slide number
            slide_files.sort(key=lambda x: int(re.findall(r'\d+', x)[0]))
            
            for slide_file in slide_files:
                slide_num = re.findall(r'\d+', slide_file)[0]
                xml_content = z.read(slide_file).decode('utf-8', errors='ignore')
                
                # Extract all text segments within <a:t>...</a:t>
                texts = re.findall(r'<a:t>(.*?)</a:t>', xml_content)
                if texts:
                    clean_texts = [t.strip() for t in texts if t.strip()]
                    if clean_texts:
                        print(f"\n[Slide {slide_num}]:")
                        print(" | ".join(clean_texts))
    except Exception as e:
        print(f"Error parsing {pptx_path}: {e}")

if __name__ == "__main__":
    extract_text_from_pptx("src/doc/Tiết 16.pptx")
    extract_text_from_pptx("src/doc/Tiết 17.pptx")
