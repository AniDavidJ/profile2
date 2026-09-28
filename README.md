# Senior Software Engineer Portfolio (React.js & React Native)

A high-performance, responsive portfolio web application crafted for a **Senior Software Engineer & FinTech / Digital Banking Specialist** with 5+ years of experience.

---

## 🌟 Highlights Included

1. **Fintech Hero Section**:
   - High-impact headlines highlighting **5+ years experience** in React.js, React Native, Mobile WebViews, and banking systems.
   - Verified experience badges for **RAKBANK UAE (2021–2026)**, Brams Tech Dubai, Fabi Technology, and College of Engineering Cherthala.

2. **Interactive Mobile Phone Simulator (Live Banking Demo)**:
   - **Live Foreign Exchange (FX) Engine**: Real-time currency exchange rates (AED to INR, USD, EUR, GBP, PHP), calculation of bank margins, live conversion, and transaction deal execution simulation.
   - **RAKBANK Brand Refresh Showcase**: Interactive comparison toggle showcasing the legacy look versus the modernized logo, typography, and theme tokens.
   - **Credit Cards Hub**: Virtual card interface, freeze/unfreeze security toggle, daily limit slider, and balance tracking.
   - **Transaction Summary Ledger**: Categorized ledger for FX transfers, local IPP transfers, and card settlements.

3. **Career Timeline (Experience Section)**:
   - **RAKBANK (UAE)** (Sep 2021 – Jul 2026): FX engine, local & cross-border remittance, Brand Refresh overhaul, credit card lifecycle, and hybrid WebView bridges.
   - **Brams Technology (Dubai)** (2019): Enterprise cloud support & web monitoring dashboards.
   - **Fabi Technology** (2016 – 2017): Shipped 7–8 mobile apps including *Go Fabi* & *Fabi Promotion*.
   - **College of Engineering Cherthala (IHRD)** (2014 – 2015): Assistant Professor teaching Data Structures, Web Technologies, and lab mentoring for Semester 1 and Semester 7 students.

4. **Academic CS Roots & Mentorship Section**:
   - Highlights strong foundational algorithms, Data Structures, and teaching acumen.

5. **Projects Filter Showcase**:
   - Filterable by *FinTech & Banking*, *Mobile & WebView*, *Cloud*, and *Academic*.
   - Interactive modal popups with deep technical architectural breakdowns.

6. **Skills Matrix**:
   - Tabbed view with proficiency bars across Frontend, FinTech, Mobile, and Tools.

7. **Bilingual Support (Malayalam Profile Modal)**:
   - Dedicated "മലയാളം" button in the navigation and hero section to view and copy the full career summary in Malayalam.

8. **Printable / Downloadable CV Modal**:
   - Formatted resume ready to view, print, or save as PDF with a single click.

---

## 🚀 Running Locally

```bash
# 1. Navigate to the project directory
cd portfolio

# 2. Start development server with live reload
npm run dev

# Or test the optimized production build
npm run build
npm run preview
```

Open `http://localhost:5173` (or the port shown in your terminal) in your browser.

---

## ✏️ How to Customize Your Info

All personal information, email, phone number, social links, project descriptions, and Malayalam text are neatly organized in a single file:

📁 **`src/data/portfolioData.js`**

Simply open that file and update:
- `name`: Your full name
- `email`: Your email address
- `phone` & `whatsapp`: Your contact number
- `linkedin` & `github`: Your profile URLs

---

## 🌐 Free Hosting Options (എങ്ങനെ ഹോസ്റ്റ് ചെയ്യാം)

This application compiles to high-performance, modern static HTML/CSS/JS in the `dist/` folder and can be hosted for **100% free** on any of these platforms:

### Option 1: Vercel (ഏറ്റവും എളുപ്പമുള്ള വഴി - 2 മിനിറ്റ്)
1. Push this folder to your GitHub account.
2. Visit [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **"Deploy"**. Your site will be live instantly with a free `.vercel.app` URL and free SSL!

Alternatively, using terminal:
```bash
npx vercel
```

---

### Option 2: Netlify (Drag & Drop or Git)
1. Build the production files:
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder into the browser window.
4. Your website is instantly live!

---

### Option 3: Firebase Hosting
This project already contains `firebase.json` configured for Firebase Hosting:
```bash
# 1. Login to Firebase
npx -y firebase-tools login

# 2. Initialize project (select your Firebase project)
npx -y firebase-tools init hosting

# 3. Build & Deploy
npm run build
npx -y firebase-tools deploy --only hosting
```

---

### Option 4: GitHub Pages (Automatic CI/CD)
The project includes `.github/workflows/deploy.yml`:
1. Push this repository to GitHub.
2. In GitHub, go to your repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every push to `main` branch will automatically build and deploy your site to `https://<your-username>.github.io/<repo-name>/`.
