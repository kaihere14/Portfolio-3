# Portfolio‑3  
**A modern, animated personal portfolio built with React, Vite & TailwindCSS**  

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)  
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)  
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)  
[![npm version](https://img.shields.io/npm/v/portfolio-3.svg?style=for-the-badge)](https://www.npmjs.com/package/portfolio-3)  

---  

## Overview  

Portfolio‑3 is a **single‑page React application** that showcases a developer’s work, experience, and personal stats in a visually rich, responsive layout. It ships with:

* A **dark‑mode toggle** that persists across sessions.  
* **Live Spotify now‑playing** card (requires a Spotify API token).  
* **GitHub contributions calendar** powered by `react‑github‑calendar`.  
* Interactive **cursor trail**, **oneko** cat animation, and smooth page transitions via **Framer Motion**.  

The site is built with **Vite** for instant hot‑module reloading and **TailwindCSS** for utility‑first styling, making it fast to develop and easy to extend.

> **Target audience** – developers looking for a clean, extensible starter portfolio that demonstrates modern React patterns (hooks, context, routing) and integrates third‑party APIs.

Current version: **v0.0.0** (development).

---  

## Features  

| Feature | Description | Status |
|---------|-------------|--------|
| **Dark Mode Toggle** | Switches between light & dark themes, stored in `localStorage`. | ✅ Stable |
| **Spotify Now‑Playing Card** | Shows the currently playing track using the Spotify Web API. | ✅ Stable |
| **GitHub Contributions Calendar** | Visual timeline of contributions fetched from GitHub. | ✅ Stable |
| **Animated Cursor & Onek​o Cat** | Custom cursor effect + playful cat that follows the pointer. | ✅ Stable |
| **Responsive Layout** | Mobile‑first design with Tailwind breakpoints. | ✅ Stable |
| **Blog Section** | Markdown‑style articles (e.g., DNS resolution, cURL guide) rendered as React components. | ✅ Stable |
| **Framer Motion Page Transitions** | Smooth entry/exit animations for each route. | ✅ Stable |
| **Theme‑aware Icons** | Lucide icons automatically adapt to the current theme. | ✅ Stable |
| **Vite + React Fast Refresh** | Near‑instant dev server reloads. | ✅ Stable |
| **Future‑ready Architecture** | Clear component separation, custom hooks, and a data‑driven `portfolioData.js`. | ✅ Stable |

---  

## Tech Stack  

| Layer | Technology | Reason |
|-------|------------|--------|
| **Framework** | React 19.2.0 | Modern concurrent features, hooks, and ecosystem. |
| **Bundler / Dev Server** | Vite 7.2.2 | Lightning‑fast HMR, native ES‑module support. |
| **Styling** | TailwindCSS 4.1.17 | Utility‑first CSS, dark‑mode support, responsive design. |
| **Icons** | Lucide‑React 0.554.0 | Open‑source, theme‑aware SVG icons. |
| **Animations** | Framer Motion 12.23.26 | Declarative animation API. |
| **Routing** | React Router 7.12.0 | Nested routes for portfolio & blog pages. |
| **Analytics** | Vercel Analytics | Zero‑config traffic insights. |
| **API Clients** | Axios 1.13.2 | Promise‑based HTTP client for Spotify & GitHub. |
| **GitHub Calendar** | react‑github‑calendar 5.0.3 | Simple contribution heatmap component. |
| **Linting** | ESLint 9.39.1 + React Hooks plugin | Enforces code quality and consistency. |
| **Optional** | Docker (community‑provided Dockerfile) | Containerised builds for CI/CD. |

---  

## Architecture  

```
portfolio-3/
├─ public/                 # Static assets (favicon, oneko animation, robots.txt)
├─ src/
│  ├─ assets/              # Images & SVGs
│  ├─ components/          # Re‑usable UI pieces (Header, Navbar, Footer, etc.)
│  ├─ data/                # Static site data (portfolioData.js)
│  ├─ hooks/               # Custom React hooks (useTheme, useSpotify, etc.)
│  ├─ pages/               # Route‑level components (hero, Blogs, individual blog posts)
│  ├─ utils/               # Helper functions (theme.js)
│  ├─ App.jsx               # Root component – sets up routing & global effects
│  └─ main.jsx              # Vite entry point – renders <App />
├─ .env                     # Environment variables (Spotify token, GitHub token, etc.)
├─ vite.config.js           # Vite configuration (Tailwind plugin)
└─ package.json
```

* **Component‑driven** – UI is broken into small, testable components.  
* **Hook‑centric** – Data fetching and UI state (theme, mouse position, Spotify) live in custom hooks.  
* **Data‑first** – `portfolioData.js` drives the content of the hero section, making it easy to add new projects or achievements.  

---  

## Getting Started  

### Prerequisites  

| Tool | Minimum version |
|------|-----------------|
| **Node.js** | 18.x |
| **npm** | 9.x (comes with Node) |
| **Git** | any recent version |
| **Spotify API credentials** *(optional for now‑playing card)* | `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` |
| **GitHub token** *(optional for contributions calendar)* | `GITHUB_TOKEN` (public repos work without a token) |

### Installation  

```bash
# 1️⃣ Clone the repo
git clone https://github.com/kaihere14/Portfolio-3.git
cd Portfolio-3

# 2️⃣ Install dependencies
npm ci   # uses package-lock for reproducible installs

# 3️⃣ Create a .env file (see below) and add your API keys
cp .env.example .env   # if an example exists, otherwise create manually
```

### Configuration  

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SPOTIFY_CLIENT_ID` | Spotify application client ID | `1234567890abcdef` |
| `VITE_SPOTIFY_CLIENT_SECRET` | Spotify application secret | `abcdef1234567890` |
| `VITE_SPOTIFY_REFRESH_TOKEN` | Long‑lived refresh token for the user | `AQB...` |
| `VITE_GITHUB_TOKEN` | (optional) GitHub personal access token for higher rate limits | `ghp_...` |

**`.env` sample**

```dotenv
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
VITE_SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
VITE_GITHUB_TOKEN=your_github_token   # optional
```

### Running the Project  

```bash
# Development server with hot‑module reload
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server starts at `http://localhost:5173` (or the port shown in the console).

---  

## Usage  

### Navigation  

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Portfolio` (src/pages/hero.jsx) | Main landing page – hero, about, experience, projects, tech stack, etc. |
| `/blogs` | `Blogs` | Index of all blog posts. |
| `/blogs/how-dns-resolution-works` | `Dnsworking` | Technical article on DNS resolution. |
| `/blogs/what-is-curl` | `CurlGuide` | Introductory guide to cURL. |

### Adding a New Blog Post  

1. Create a new file in `src/pages/Blogs/` (e.g., `MyNewPost.jsx`).  
2. Export a functional component that follows the existing pattern (use `useTheme`, `useMousePosition`, and include `<Navbar />`).  
3. Add a route in `src/App.jsx`:

```jsx
import MyNewPost from "./pages/Blogs/MyNewPost";

<Route path="/blogs/my-new-post" element={<MyNewPost />} />
```

4. Update `src/data/portfolioData.js` (or a dedicated blog index) if you want the post listed on the blog overview page.

### Example: Rendering the Spotify Card  

```jsx
import SpotifyCard from "../components/SpotifyCard";

function Example() {
  return (
    <section className="p-4">
      <SpotifyCard />
    </section>
  );
}
```

The component automatically fetches the currently playing track using the credentials defined in `.env`.

---  

## Development  

| Task | Command |
|------|---------|
| **Lint** | `npm run lint` |
| **Run tests** | *(no test suite yet – add Jest/React Testing Library as needed)* |
| **Format** | Use your editor’s Prettier integration (recommended). |
| **Debug** | Open Chrome DevTools → Sources → set breakpoints in `src/**/*.jsx`. Vite’s HMR will preserve component state across edits. |

### Code Style  

* **React Hooks** – Follow the Rules of Hooks; linted by `eslint-plugin-react-hooks`.  
* **JSX** – Use self‑closing tags when no children are present.  
* **Tailwind** – Prefer utility classes over custom CSS; extract repeated patterns into component‑level classes.  

---  

## Deployment  

### Vercel (recommended)  

1. Connect the repository to Vercel.  
2. Vercel automatically detects the **Vite** build command (`npm run build`) and the output directory (`dist`).  
3. Set the same environment variables in the Vercel dashboard as in your local `.env`.  

### Docker (optional)  

```dockerfile
# Dockerfile (place in project root)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build & run:

```bash
docker build -t portfolio-3 .
docker run -p 8080:80 portfolio-3
```

Visit `http://localhost:8080`.

---  

## API Documentation  

The project does **not** expose its own public API. It consumes two external APIs:

| API | Purpose | Endpoint used | Auth |
|-----|---------|----------------|------|
| **Spotify Web API** | Fetch currently playing track. | `GET https://api.spotify.com/v1/me/player/currently-playing` | Bearer token (generated from refresh token). |
| **GitHub API** | Retrieve contributions data for the calendar component. | `GET https://api.github.com/users/:username/events` (handled internally by `react-github-calendar`). | Optional personal access token for higher rate limits. |

If you wish to expose your own endpoints, add them under `src/api/` and document them here.

---  

## Contributing  

1. **Fork** the repository.  
2. **Create a feature branch**: `git checkout -b feat/awesome-feature`.  
3. **Install dependencies** (`npm ci`).  
4. **Make your changes** – keep the existing folder structure.  
5. **Run lint** (`npm run lint`) and ensure no errors.  
6. **Commit** with a clear message: `git commit -m "feat: add awesome feature"`.  
7. **Push** to your fork and open a **Pull Request** against `main`.  

### Pull Request Checklist  

- [ ] Code follows the existing style (ESLint passes).  
- [ ] New components have PropTypes (or TypeScript types if you add TS).  
- [ ] Documentation updated (README, component comments).  
- [ ] No new console warnings in the browser.  

---  

## Troubleshooting  

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| **Blank page after `npm run dev`** | `.env` missing required variables (Spotify token) | Add a `.env` file or comment out the `<SpotifyCard />` import. |
| **GitHub calendar shows “Failed to fetch”** | Rate‑limit exceeded or missing `GITHUB_TOKEN` | Add a personal access token to `.env` (`VITE_GITHUB_TOKEN`). |
| **Tailwind styles not applied** | Vite cache corrupted | Delete `node_modules/.vite` and restart dev server. |
| **Cursor effect lags** | `useMousePosition` causing excessive re‑renders | Ensure the hook uses `requestAnimationFrame` (already implemented). |
| **Production build fails** | Missing environment variable at build time | Vite injects only variables prefixed with `VITE_`. Verify names. |

For further help, open an issue or contact **Arman Thakur** (see below).

---  

## Roadmap  

- **Add TypeScript** – migrate the codebase to TS for stronger type safety.  
- **Unit & Integration Tests** – set up Jest + React Testing Library.  
- **Dark‑mode aware images** – serve optimized SVG/WEBP assets per theme.  
- **Blog CMS** – integrate a headless CMS (e.g., Contentful) for dynamic blog posts.  
- **Performance Audits** – Lighthouse CI integration for automated performance scores.  

---  

## License & Credits  

**License:** MIT – see `LICENSE` file.  

### Credits  

- **Vite** – fast dev server & build tooling.  
- **React** – UI library.  
- **TailwindCSS** – utility‑first styling.  
- **Lucide‑React** – icon set.  
- **Framer Motion** – animation library.  
- **@vercel/analytics** – traffic analytics.  
- **react‑github‑calendar** – contributions heatmap.  
- **Onek​o** – playful cat cursor animation (public domain).  

### Contact  

Arman Thakur – [armanthakur200814@gmail.com](mailto:armanthakur200814@gmail.com)  

---  

*Happy coding! 🎉*