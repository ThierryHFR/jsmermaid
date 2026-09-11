# Mermaid Studio

Mermaid Studio is a lightweight, offline [Mermaid](https://github.com/mermaid-js/mermaid)
diagram editor that runs
entirely in the browser. It provides a live preview, diagram examples,
customization options, and export tools without requiring an Internet
connection at runtime.

## Online demo

Try Mermaid Studio directly in your browser:

**[Open the live demo](https://mermaid.infinityfreeapp.com/)**

The same application can also be run locally or with Docker as described
below.

## Features

- Live Mermaid editor with automatic preview updates.
- Built-in examples for workflow, sequence, class, and Gantt diagrams.
- Mermaid themes: `default`, `dark`, `forest`, and `neutral`.
- Layout engines: Dagre and ELK.
- Custom background color and transparent background support.
- Export to SVG, PNG, and PDF through the browser.
- Copy Mermaid source code to the clipboard.
- Download the source as a `.mmd` file.
- Keyboard shortcuts:
  - `Ctrl`/`Cmd` + `S`: download the Mermaid source.
  - `Ctrl`/`Cmd` + `Enter`: refresh the preview.
- The Mermaid source is saved locally in the browser with `localStorage`.
- No server-side application, database, or external API is required.

## Automatic language detection

The interface automatically uses the browser's preferred language. There is
no manual language selector.

The following 13 locales are currently supported:

- English
- French
- German
- Spanish
- Italian
- Portuguese
- Dutch
- Polish
- Russian
- Chinese
- Japanese
- Korean
- Arabic, including right-to-left layout support

If the browser language is not yet translated, the interface falls back to
English. Regional browser settings such as `fr-FR`, `de-DE`, or `pt-BR` are
matched to their base language automatically.

## Run locally without Docker

The simplest option is to open [`web/index.html`](web/index.html) directly in
a browser.

If the browser restricts local files, start Python's built-in web server:

```sh
python3 -m http.server 8080 --directory web
```

Then open <http://127.0.0.1:8080>.

## Run with Docker

Build and start the application with:

```sh
docker compose build
docker compose up
```

Then open <http://localhost:8080>.

The local port can be changed with the `MERMAID_PORT` environment variable:

```sh
MERMAID_PORT=8088 docker compose up
```

The application is served by Nginx. The Docker build does not clone a
repository or install runtime dependencies. Once the image is built, Mermaid
Studio can run without Internet access.

## Integrated project files

All runtime assets are included in the repository:

| File | Purpose |
| --- | --- |
| [`web/index.html`](web/index.html) | Main application page and interface structure. |
| [`web/styles.css`](web/styles.css) | Responsive layout, editor, preview, print, and RTL styles. |
| [`web/app.js`](web/app.js) | Mermaid initialization, rendering, localization, persistence, shortcuts, and exports. |
| [`web/assets/mermaid.min.js`](web/assets/mermaid.min.js) | Locally bundled Mermaid rendering engine ([upstream project](https://github.com/mermaid-js/mermaid)). |
| [`web/assets/mermaid-layout-elk.js`](web/assets/mermaid-layout-elk.js) | Locally bundled ELK layout engine, built from Mermaid's [`@mermaid-js/layout-elk` package](https://github.com/mermaid-js/mermaid/tree/develop/packages/mermaid-layout-elk). |
| [`Dockerfile`](Dockerfile) | Docker image definition. |
| [`docker-compose.yml`](docker-compose.yml) | Docker Compose configuration and port mapping. |
| [`nginx.conf`](nginx.conf) | Nginx static-file server configuration. |

The application does not depend on a package manager or a build step: the
`web` directory can be served as-is.

## Offline behavior

Mermaid and the ELK layout engine are bundled under
[`web/assets`](web/assets). No CDN, remote font, analytics service, or network
request is needed to edit and render diagrams.

Mermaid Studio uses the open-source Mermaid project and bundles its browser
runtime locally for offline use. The ELK bundle comes from Mermaid's dedicated
[`@mermaid-js/layout-elk` package](https://github.com/mermaid-js/mermaid/tree/develop/packages/mermaid-layout-elk),
which provides ELK support for Mermaid. See the [official Mermaid repository](https://github.com/mermaid-js/mermaid)
for the upstream project, documentation, and licensing information.

## Browser compatibility

Mermaid Studio is designed for modern browsers with support for JavaScript,
`localStorage`, the Clipboard API, Blob URLs, and Canvas export. Directly
opening the HTML file works in Firefox; using the included Python server or
Docker setup is recommended if a browser applies restrictions to `file://`
pages.

## License

The original Mermaid Studio source code is licensed under the
[GNU General Public License v3.0 or later](LICENSE).

The bundled Mermaid and ELK JavaScript assets are third-party components and
remain available under their respective MIT license terms. See
[`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md) for attribution, upstream
links, and license information.
