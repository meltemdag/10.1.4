import pypdf
import os

reader = pypdf.PdfReader('10.1.4.pdf')
print(f"Total pages: {len(reader.pages)}")

os.makedirs('extracted_images', exist_ok=True)

for i, page in enumerate(reader.pages):
    text = page.extract_text() or ""
    first_line = text.strip().split("\n")[0] if text.strip() else "NO TEXT"
    imgs = page.images
    print(f"Page {i+1}: {len(imgs)} images | Preview: {first_line[:80]}")
    for j, img in enumerate(imgs):
        print(f"   [{j}] {img.name} size={len(img.data)} bytes")
