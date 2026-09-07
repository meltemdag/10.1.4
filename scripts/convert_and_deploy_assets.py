import os
from PIL import Image

src_dir = 'extracted_images'

# Target directories in public/assets
dirs = {
    'portraits': 'public/assets/portraits',
    'sources': 'public/assets/sources',
    'context': 'public/assets/context',
    'education': 'public/assets/education',
    'maps': 'public/assets/maps'
}

for d in dirs.values():
    os.makedirs(d, exist_ok=True)

def convert_and_save(src_file, target_path, max_dim=1200):
    src_path = os.path.join(src_dir, src_file)
    try:
        with Image.open(src_path) as img:
            # Convert RGBA to RGB if needed for JPEG
            if img.mode in ('RGBA', 'LA', 'P'):
                bg = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                bg.paste(img, mask=img.split()[-1] if 'A' in img.getbands() else None)
                img = bg
            elif img.mode != 'RGB':
                img = img.convert('RGB')
                
            # Resize if overly large
            if max(img.size) > max_dim:
                img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                
            img.save(target_path, 'JPEG', quality=90)
            print(f"Saved: {target_path} (size {img.size})")
            return True
    except Exception as e:
        print(f"Error converting {src_file} to {target_path}: {e}")
        return False

# Mapping 9 Figures
figure_mapping = {
    'yesevi.jpg': 'page_21_img_01_Im0.jp2',
    'mevlana.jpg': 'page_22_img_01_Im0.jp2',
    'hacibektas.jpg': 'page_23_img_01_Im0.jp2',
    'yunusemre.jpg': 'page_24_img_01_Im0.jp2',
    'ibnularabi.jpg': 'page_25_img_01_Im0.jp2',
    'kashgarli.jpg': 'page_27_img_02_Im1.jp2',
    'hayyam.jpg': 'page_28_img_01_Im0.jp2',
    'cezeri.jpg': 'page_29_img_01_Im0.jp2',
    'cezeri_fil_saati.jpg': 'page_29_img_02_Im1.jp2',
    'ibnibibi.jpg': 'page_30_img_02_Im0.jp2',
    'ibnibibi_yazma.jpg': 'page_30_img_01_Im0.jp2'
}

print("\n--- Converting 9 Figures ---")
for target_name, src_file in figure_mapping.items():
    convert_and_save(src_file, os.path.join(dirs['portraits'], target_name))

# Mapping Evidence Sources
source_mapping = {
    'kaynak-d-bacon.jpg': 'page_07_img_00_Im0.jp2',
    'kaynak-e-f-biruni.jpg': 'page_08_img_00_Im0.png',
    'kaynak-e-f-rasathane.jpg': 'page_07_img_01_Im1.jp2',
    'kaynak-g-ibnnefis.jpg': 'page_10_img_00_Im0.jp2'
}

print("\n--- Converting Evidence Sources ---")
for target_name, src_file in source_mapping.items():
    convert_and_save(src_file, os.path.join(dirs['sources'], target_name))

# Mapping Context (TİKA & YEE)
context_mapping = {
    'tika_tunus.jpg': 'page_01_img_06_Im1.jp2',
    'tika_mogolistan.jpg': 'page_01_img_07_Im2.jp2',
    'tika_balkanlar.jpg': 'page_01_img_08_Im3.jp2',
    'yee_senegal.jpg': 'page_02_img_06_Im1.jp2',
    'yee_japonya.jpg': 'page_02_img_07_Im2.jp2',
    'yee_kultur.jpg': 'page_02_img_08_Im3.jp2'
}

print("\n--- Converting Context Images ---")
for target_name, src_file in context_mapping.items():
    convert_and_save(src_file, os.path.join(dirs['context'], target_name))

# Mapping Education & Maps
education_mapping = {
    'medrese_egitimi.jpg': 'page_11_img_02_Im0.jp2',
    'medrese_ders.jpg': 'page_11_img_03_Im1.jp2',
    'katedral_okulu.jpg': 'page_13_img_00_Im0.jp2',
    'katedral_egitim.jpg': 'page_13_img_01_Im1.jp2'
}

print("\n--- Converting Education Images ---")
for target_name, src_file in education_mapping.items():
    convert_and_save(src_file, os.path.join(dirs['education'], target_name))

maps_mapping = {
    'meb_kervan_haritasi.jpg': 'page_05_img_01_Im0.jp2',
    'divan_dunya_haritasi.jpg': 'page_27_img_00_Im0.jp2',
    'konya_sehir_plani.jpg': 'page_39_img_00_Im0.jp2'
}

print("\n--- Converting Maps ---")
for target_name, src_file in maps_mapping.items():
    convert_and_save(src_file, os.path.join(dirs['maps'], target_name), max_dim=1600)

print("\nAll assets successfully converted and deployed to public/assets/!")
