# Yao Yao Resume (Brewitty-style)

Personal CV site inspired by `brewitty.com`, rebuilt as a lightweight static page and ready for GitHub Pages.

## Highlights

- Brewitty-like visual language: bold outline cards, pastel blocks, animated hero, wave footer.
- Dynamic scrolling experience: GSAP + ScrollTrigger + Lenis inertia scrolling.
- Bilingual content (`中文 / EN`) switch.
- Section-by-section storytelling (education, internships, research).
- Download entry for PDF resume (`cv/assets/Yao_Yao_Resume.pdf`).

## Project Structure

- `index.html`: root entry, redirects to `./cv/` (for Pages root deployment).
- `cv/index.html`: main resume page.
- `cv/cv.css`: layout, theme, and animation styles.
- `cv/cv.js`: i18n and interaction logic.
- `cv/assets/`: self-contained static assets (`hero.json`, `bomb.json`, `wave.svg`, logos, PDF).

## Local Preview

Run from repository root:

```bash
python3 -m http.server 8080
```

Open:

- `http://localhost:8080/` (redirect entry)
- `http://localhost:8080/cv/` (main CV page)

## Deploy to GitHub Pages

1. Repository: `YaoYao021123/resume`
2. Settings → Pages
3. Source: `Deploy from a branch`
4. Branch: `main`, Folder: `/(root)`

After deploy, visit:

`https://yaoyao021123.github.io/resume/`
