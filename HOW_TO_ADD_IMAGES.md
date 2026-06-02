# 📸 Step-by-Step Guide: How to Add Custom Images

Welcome! This guide will help you replace the AI-generated images with your own beautiful photos.

---

## 🎯 Step 1: Understand the Folder Structure

Your images should be organized like this:

```
first-try/
└── assets/
    └── images/
        ├── hero/          ← Hero section images
        ├── products/      ← Product images
        ├── collections/ ← Collection images
        ├── about/       ← About page images
        └── ui/          ← Logos, icons, etc.
```

---

## 📷 Step 2: Prepare Your Images

### Best Practices for Professional-Looking Images:

1. **Image Sizes:
   - Hero banner: 1920 x 1080 pixels (16:9 ratio)
   - Product photos: 800 x 800 pixels (square)
   - Collection photos: 800 x 800 pixels (square)
   - Keep file size under 500KB per image

2. **File Formats:
   - Photos: `.jpg` or `.webp` (smaller file size!)
   - Logos/Icons: `.png` or `.svg`

3. **Naming Your Files (PROFESSIONAL WAY):
   - Use lowercase letters only
   - Use dashes (-) instead of spaces
   - Be descriptive!
   
   ✅ Good: `birkin-30-black.jpg, hero-lifestyle.jpg
   ❌ Bad: `Image 001.jpg, photo 2.JPG

---

## 🛠️ Step 3: Add Your Images

1. **Copy your images into the correct folders:
   - Put hero images → `assets/images/hero/`
   - Put product images → `assets/images/products/`
   - Put collection images → `assets/images/collections/`

---

## ✏️ Step 4: Update the Code

### Example: Update Product Images

1. Open `script.js` and look for the `products` array

2. For each product, find the line that says `image:`

3. Replace the long AI URL with your image path:

**Before (AI Image):
```javascript
image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=...',
```

**After (Your Custom Image):
```javascript
image: 'assets/images/products/birkin-30-black.jpg',
```

---

### Example: Update Hero Image

1. Open `index.html` and find the hero section

2. Find the line with `hero-background and update the image path:

**Before:
```html
<div class="hero-background" style="background-image: url('https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=...');">
```

**After:
```html
<div class="hero-background" style="background-image: url('assets/images/hero/my-hero-photo.jpg');">
```

---

## 💡 Pro Tips (Professional Developers Use These!)

1. **Always backup your images! Make a copy of your original files before editing.

2. **Test as you go! Add one image, refresh the browser, check if it works, then add the next.

3. **Keep it consistent! Use the same style/lighting for all product photos for a professional look.

4. **Optimize images! Use tools like TinyPNG (https://tinypng.com/) to make files smaller.

5. **Use version control! If you use GitHub/Git, commit your changes.

---

## 🆘 Need Help?

If you get stuck, just ask! I'm here to help you every step of the way.

---

Happy building! 🎉
