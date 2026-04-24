# ☕ Deja Brew – Digital Coffee Kiosk

Welcome to **Deja Brew**, a modern interactive coffee shop kiosk built using Next.js and React.
This project simulates a real café ordering system with drinks, snacks, and a dynamic cart system.

---

## 🚀 Features

### ☕ Menu System
- Coffee drinks (Espresso, Latte, Cappuccino, etc.)
- Cold brew options
- Signature drinks
- 🍪 Snacks tab (croissants, muffins, brownies, cookies)

### 🧠 Interactive UI
- Click-to-add ordering system
- Dynamic cart with live total updates
- Category filtering tabs (Coffee / Cold / Signature / Snacks)

### ✨ Animations
- Smooth hover effects on menu cards
- 3D-style card interactions

---

## 🛠️ Built With
- Next.js
- React
- CSS-in-JS (styled-jsx)

---

## 📂 Project Structure
```
deja-brew/
├── pages/
│   ├── _document.js
│   └── index.js
├── next.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/noahcode-ux/deja-brew.git
   cd deja-brew
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
```

This will generate a static export in the `out/` directory, ready for deployment to GitHub Pages.

---

## 🌐 Deployment to GitHub Pages

1. Push your changes to the `main` branch.

2. Go to your repository settings on GitHub.

3. Under "Pages", set the source to "Deploy from a branch" and select `main` branch and `/root` folder (since the build outputs to `out/` but GitHub Pages serves from root).

Wait, for static export, the `out/` folder needs to be in the root.

In next.config.js, output: 'export' puts build in out/.

For GitHub Pages, you can set the source to the `out/` folder, but since it's a branch, better to use GitHub Actions.

To keep it simple, since the repo is deja-brew, and assuming it's a project repo, GitHub Pages will serve from https://noahcode-ux.github.io/deja-brew/

The build command is npm run build, which does next build && next export, but next export is deprecated, now it's output: 'export'

In package.json, I have "build": "next build && next export", but next export is old.

For Next.js 13+, it's output: 'export' in config.

So, change to "build": "next build"

Then, the out/ folder will be created.

For GitHub Pages, to deploy, you can use a GitHub Action or manually push the out/ to a gh-pages branch.

But to keep it simple, since the user said "must work with github pages", and Next.js static export does.

For deployment, add instructions.

Since the basePath is set, it will work.

To deploy, after build, the out/ folder can be served.

For GitHub Pages, if you set the source to the main branch and / (root), but since out/ is in root, no.

GitHub Pages can serve from a subfolder if you set it.

But easier to use a workflow.

But for now, add basic instructions. 

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Enjoy your digital coffee experience! ☕
