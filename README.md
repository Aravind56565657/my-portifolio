# Aravind Kumar – Portfolio

Single-page portfolio built with **React** and **Vite**. Content and contact: Aravind Kumar (AI & Full Stack).

## Run locally

### 1. Install Node.js (Windows)

If `node` or `npm` is not recognized, install Node.js LTS with Windows Package Manager:

```powershell
winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
```

Close and reopen your terminal, then verify:

```powershell
node -v
npm -v
```

### 2. Install dependencies and run

```powershell
cd c:\Users\JAGADEESH\portfolio-react
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).

---

## Build for production

```powershell
npm run build
```

Output is in `dist/`. Deploy to Vercel, Netlify, or GitHub Pages.

---

## Profile photo

Place your photo at `public/profile.jpg`. The hero section flips between "AK" initials and your photo every 3.5 seconds. To change the path, edit `profileImage` in `src/data/content.js`.

## Certificates

Place certificate images in `public/certificates/`. Update paths in `src/data/content.js` under `certifications`. Each cert can have `title`, `issuer`, and `image`. Click a cert to open the full image in a new tab.

## Structure

- **Global styles**: `src/index.css` (variables, base, layout, shared animations)
- **Sections**: One folder per section under `src/components/`, each with `.jsx` and `.css`
- **Scroll reveal**: `src/hooks/useScrollReveal.js` (IntersectionObserver, respects `prefers-reduced-motion`)

---

## Contact

- **Email**: aravindkumar23567@gmail.com
- **LinkedIn**: [Aravind Kumar Maradana](https://www.linkedin.com/in/aravind-kumar-maradana-209061290/)
- **GitHub**: [Aravind56565657](https://github.com/Aravind56565657)
