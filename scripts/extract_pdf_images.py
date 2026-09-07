import pypdf
import os
import sys

out_dir = 'extracted_images'
os.makedirs(out_dir, exist_ok=True)

reader = pypdf.PdfReader('10.1.4.pdf')
print(f"Total pages: {len(reader.pages)}", flush=True)

image_count = 0
for page_num, page in enumerate(reader.pages):
    print(f"\n--- Page {page_num + 1} ---", flush=True)
    try:
        text_snippet = (page.extract_text() or "").strip().replace("\n", " ")[:120]
        print(f"Text: {text_snippet}", flush=True)
    except Exception as e:
        print(f"Text error: {e}", flush=True)

    try:
        for img_idx, img in enumerate(page.images):
            # img has name, data
            ext = os.path.splitext(img.name)[1] or '.png'
            filename = f"page_{page_num + 1:02d}_img_{img_idx:02d}_{img.name}"
            # Clean filename
            filename = "".join(c for c in filename if c.isalnum() or c in "._-")
            filepath = os.path.join(out_dir, filename)
            
            # Save only if substantial size (> 5KB to skip tiny lines/decorations)
            if len(img.data) > 5000:
                with open(filepath, 'wb') as f:
                    f.write(img.data)
                print(f"   Saved image: {filename} ({len(img.data) // 1024} KB)", flush=True)
                image_count += 1
            else:
                print(f"   Skipped small image: {img.name} ({len(img.data)} bytes)", flush=True)
    except Exception as e:
        print(f"   Image extraction error on page {page_num + 1}: {e}", flush=True)

print(f"\nTotal substantial images extracted: {image_count}", flush=True)
