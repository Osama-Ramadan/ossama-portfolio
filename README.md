# Ossama Portfolio (GitHub Pages)

Academic-style personal website tailored for PhD applications in robotics, control, and autonomous systems.

## Pages

- `index.html`: Landing page and PhD application snapshot
- `research.html`: Research statement and doctoral interests
- `publications.html`: Peer-reviewed publications
- `projects.html`: Technical/research project portfolio
- `cv.html`: Extended CV page with timeline and skills

## Assets

- `assets/css/style.css`: Shared styles for all pages (light theme)
- `assets/js/main.js`: Section reveal animation + active navigation state
- `assets/Awesome_CV.pdf`: Downloadable CV document

## Local Preview

Open any HTML file directly in your browser, or run a local static server from this folder.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages Deployment

1. Push this folder to a GitHub repository.
2. In repository settings, open **Pages**.
3. Set source to the `main` branch root (or your default branch root).
4. Save and wait for deployment.

## Customization Notes

- Update profile text in each page hero section.
- Add new publications in `publications.html` under `.publication-list`.
- Add project cards in `projects.html` under `.project-grid`.
- Keep shared visual consistency by editing only `assets/css/style.css`.