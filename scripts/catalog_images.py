import os
from PIL import Image

src_dir = 'extracted_images'
target_portraits = 'public/assets/portraits'
target_sources = 'public/assets/sources'
target_context = 'public/assets/context'
target_education = 'public/assets/education'

for d in [target_portraits, target_sources, target_context, target_education]:
    os.makedirs(d, exist_ok=True)

# List all extracted images
files = sorted(os.listdir(src_dir))

def get_image_info(filename):
    path = os.path.join(src_dir, filename)
    try:
        with Image.open(path) as img:
            return img.size, img.format
    except Exception as e:
        return None, str(e)

print(f"Total extracted files: {len(files)}")

# Find images per page
page_images = {}
for f in files:
    if f.startswith('page_'):
        page_num = int(f.split('_')[1])
        page_images.setdefault(page_num, []).append(f)

for p, imgs in sorted(page_images.items()):
    print(f"\nPage {p}: {len(imgs)} images")
    for img_name in imgs:
        size, fmt = get_image_info(img_name)
        size_kb = os.path.getsize(os.path.join(src_dir, img_name)) // 1024
        print(f"   {img_name} ({size_kb} KB, {size}, {fmt})")
