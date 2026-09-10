# Cloud Duo Portfolio — Dhanush P × Kabir Ahmed Khan

Premium interactive React/Vite portfolio with Three.js, React Three Fiber, Drei and Framer Motion. The supplied Dhanush and Kabir photos are included in `public/images/` and used in the hero/profile areas.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Deploy on Render (recommended)
Create a **Static Site** connected to this repository:
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- No Start Command is needed.

`render.yaml` is included for Blueprint-style setup.

### If you already created a Render Web Service
The project is a frontend/Vite site, so Static Site is preferred. If you keep the Web Service, use:
- Build Command: `npm install && npm run build`
- Start Command: `npm run preview -- --host 0.0.0.0 --port $PORT`
