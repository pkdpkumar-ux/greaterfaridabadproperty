/* ============================================
   DEPLOYMENT GUIDE - GITHUB PAGES
   ============================================ */

# Step 1: Initialize Git Repository

```bash
cd greaterfaridabadproperty
git init
git add .
git commit -m "Initial commit: Greater Faridabad Property Website"
```

# Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `greaterfaridabadproperty`
3. Add description: "Premium Real Estate Website for Greater Faridabad"
4. Choose Public repository
5. Add .gitignore for: None (we already have one)
6. License: MIT
7. Create repository

# Step 3: Connect Local to Remote

```bash
git remote add origin https://github.com/YOUR_USERNAME/greaterfaridabadproperty.git
git branch -M main
git push -u origin main
```

# Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: /(root)
6. Save

Your site will be published at: 
https://YOUR_USERNAME.github.io/greaterfaridabadproperty/

# Step 5: Custom Domain (Optional)

1. Go to Settings → Pages
2. Custom domain: greaterfaridabadproperty.in
3. Add DNS records:
   - CNAME: yourgithubusername.github.io
4. Wait for DNS propagation (can take 24 hours)

# File Structure for GitHub Pages

The root directory structure should be:
```
greaterfaridabadproperty/
├── public/
│   └── index.html (main entry point)
├── pages/
├── src/
├── README.md
├── package.json
└── .gitignore
```

# Updates and Deployment

```bash
# Make changes
git add .
git commit -m "Update property listings"
git push origin main

# GitHub Pages will auto-deploy within minutes
```

# Alternative: Using a Web Server

## Deploy to Traditional Web Host

1. FTP/SFTP to your web server
2. Upload all files to public_html
3. Update DNS records to point to server
4. Site will be live

## Deploy to Cloud Services

### Vercel
```bash
npm install -g vercel
vercel
# Follow prompts to deploy
```

### Netlify
1. Drag and drop `greaterfaridabadproperty` folder
2. Configure build (optional for static site)
3. Deploy

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```
