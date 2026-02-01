# Shiplynks — Next.js Project

## 🚀 How to Deploy on Vercel & Connect Your Hostinger Domain

### Step 1: Install Dependencies
Open your terminal inside this folder and run:
```
npm install
```

### Step 2: Test Locally (Optional)
```
npm run dev
```
Open http://localhost:3000 to preview.

### Step 3: Deploy on Vercel
1. Go to https://vercel.com and create a free account.
2. Click **New Project → Upload**.
3. Upload this entire folder.
4. Click **Deploy**. Vercel will auto-detect Next.js and build it for you.
5. You'll get a live URL like `your-project.vercel.app`.

### Step 4: Connect Your Hostinger Custom Domain
1. In your Vercel project → go to **Settings → Domains**.
2. Add your domain (e.g., `shiplynks.com`) and click **Add**.
3. Vercel will show you the DNS records needed (A record or CNAME).
4. Log into **Hostinger → hPanel → DNS Manager**.
5. Delete any existing A or CNAME records pointing to Hostinger servers.
6. Add the new records Vercel provided.
7. Wait 5–15 minutes for DNS propagation.
8. Your site is now live on your custom domain! ✅

---

## 📂 Project Structure
- `src/app/` — All pages (Next.js App Router)
- `src/components/` — Shared Navbar & Footer
- `tailwind.config.js` — Tailwind CSS theme (colors, fonts)
- `next.config.js` — Next.js config (image domains)

## ⚠️ Notes
- Login, Register, and Tracking pages have placeholder UI. Connect them to your backend when ready.
- Images are loaded from Supabase (external URL) — they will continue to work after deployment.
- SSL (HTTPS) is handled automatically by Vercel.
