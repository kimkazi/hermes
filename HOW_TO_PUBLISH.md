# 🚀 How to Publish Your Website LIVE on GitHub Pages (FREE!)

Hello! This guide will walk you through making your website **live, online, and available to anyone in the world** - even when your computer is turned off! 🌐

---

## 📋 What You'll Need First:

1. A GitHub account (it's free! Sign up at https://github.com if you don't have one)
2. Your website files (we already have these!)
3. This guide!

---

## 🎯 Step 1: Create a GitHub Repository

1. Go to https://github.com and log in
2. Click the **+** sign in the top right corner
3. Select **New repository
4. Fill in the details:
   - Repository name: `hermes-luxury-store` (or any name you like!)
   - Description: Luxury handbag e-commerce website
   - Choose **Public** (so everyone can see your site!)
   - **Don't** initialize with a README (we already have files!)
5. Click **Create repository

---

## 🎯 Step 2: Connect Your Project to GitHub

Once your repository is created, GitHub will show you setup instructions. We'll do this together!

**First, let's stage and commit our files locally:

Run these commands in the terminal (one at a time):

```bash
# Tell Git who you are (replace with your info!)
git config user.name "Your Name"
git config user.email "you@example.com"

# Add all files to Git
git add .

# Commit the files with a message
git commit -m "Initial commit - Luxury Hermès website"
```

**Now, connect to GitHub:

On the GitHub repository page, find the section that says **…or push an existing repository from the command line

It will look something like:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
git branch -M main
git push -u origin main
```

⚠️ **IMPORTANT: Replace `YOUR-USERNAME` and `YOUR-REPOSITORY-NAME` with your actual GitHub username and repository name!

---

## 🎯 Step 3: Set Up GitHub Pages (Hosting!)

1. On your GitHub repository page, click **Settings
2. Scroll down to the **Pages section (in the left sidebar, under "Code and automation")
3. Under **Source, select:
   - Deploy from a branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Click **Save
5. Wait 1-5 minutes! 🕐 GitHub is now building your website!
6. Refresh the page - you'll see a message like:
   > Your site is live at https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/

**Congratulations! Your website is LIVE! 🎉

---

## 🎯 Step 4: Add Your Custom Images (The Right Way!)

Now that your website is live, here's how to add images:

1. Add your custom images to the `assets/images/ folders as we discussed earlier
2. Update the image paths in `script.js and `index.html to use relative paths like:
   ```javascript
   image: 'assets/images/products/birkin-30.jpg'
   ```
3. Then, push the changes to GitHub!

**How to push updates in the future:

Every time you make changes to your website (add images, edit text, etc.), run these commands:

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Add custom product images"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild your site, and your changes will be live in about a minute!

---

## 💡 Pro Tips from Professional Developers!

### ✅ Best Practices

1. **Always test locally first! Open `index.html on your computer to make sure everything works before pushing to GitHub.

2. **Write good commit messages! Instead of "Update files", say "Add product images for Birkin and Kelly" - it helps you track changes!

3. **Use the folder structure we made! This keeps everything organized and professional.

4. **Images in GitHub work just like local files! As long as you use the correct relative paths, everything will be perfect.

---

## 🌐 How Your Images Are Stored and Served

- GitHub hosts both your **code AND your images!
- When someone visits your website, GitHub serves all the files from your repository
- Your images are safe, secure, and always available
- No extra database needed - GitHub acts as your "file storage"!

---

## 🆘 Troubleshooting

**My images aren't showing up!
- Double-check the file paths - they are case-sensitive!
- Make sure the images are actually pushed to GitHub
- Wait a minute and refresh the page

**Website still shows old content!
- GitHub Pages caches content - try a hard refresh (Ctrl+F5 on Windows, Cmd+Shift+R on Mac)

---

## 🎊 That's It!

You now have:
- ✅ A live website available 24/7
- ✅ Free hosting with GitHub Pages
- ✅ Professional workflow for updating your site
- ✅ Version control to track all changes

Welcome to web development! You're doing amazing! 🎉

Need help? Just ask!
