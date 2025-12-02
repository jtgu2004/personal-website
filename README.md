# John Gu - Executive Finance Portfolio

A professional personal website for a Finance Executive, featuring:
- AI-Powered "Virtual CFO" Chat
- Downloadable Financial Models & Work Samples
- Experience Timeline & Skill Matrices

## 🚀 How to Run Locally

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start the Development Server**
    ```bash
    npm run dev
    # or
    npm start
    ```

3.  **Open in Browser**
    Visit `http://localhost:5173` (or the port shown in your terminal).

## 📁 File Structure

-   **`src/`**: Contains the React code (`App.tsx`, `constants.ts`).
-   **`public/assets/`**: Place your Headshot, Resume, and Excel/PDF models here.

## ⚠️ Note on Assets

If you are using **Vite** or **Vercel**, files in the `public` folder are served at the root.
*   *File on disk:* `public/assets/headshot.jpeg`
*   *URL in code:* `/assets/headshot.jpeg`

If you are just opening `index.html` directly or using a simple static server, you may need to include the `public` prefix in your paths.

## ☁️ Deployment

This project is ready to be deployed to:
-   **GitHub Pages**
-   **Vercel** (Recommended for easiest setup)
-   **Netlify**
