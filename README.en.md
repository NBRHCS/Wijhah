# Wijhah (وجهة)

[التوثيق العربي](README.md)

Wijhah is an Arabic-first bilingual platform that helps students, graduates, and people considering a new direction explore educational and career paths in a structured way. It combines an adaptive interest assessment, broad field exploration, direct comparisons, and learning roadmaps that users can save and follow.

The current release covers 21 career domains and 103 paths in Arabic and English, without automatically favoring technical or higher-paying fields.

**Project status:** an initial open-source release that is ready to run and contribute to, with content and user experience work continuing.

> Results support exploration and a clearer next step. They do not diagnose ability or guarantee qualification or employment. Users should independently verify local licensing requirements and current labor-market information.

## Features

- Complete Arabic RTL interface and English LTR interface.
- Adaptive assessment that starts broad and asks deeper questions in selected domains.
- Ranked results with explicit handling for ties and incomplete answers.
- Career exploration and filtering across diverse professional families.
- A map from interests and domains to explorable career paths.
- Side-by-side comparison of up to three careers.
- Practical learning roadmaps with progress tracking.
- Local draft persistence and authenticated progress saving when the hosting environment supports it.
- Complete light and dark themes with a persisted user choice.
- Responsive layouts, keyboard navigation, and reduced-motion support.

## Screenshots

Screenshots will be added in a later release. Suggested captures:

- Landing page using Theme 2.
- Assessment flow.
- Results page.
- Career map.
- Career roadmap using Theme 6.

## Tech Stack

- React 19 and TypeScript.
- Next.js App Router APIs running through Vinext and Vite.
- Tailwind CSS 4, shadcn/Radix UI primitives, and Lucide icons.
- Cloudflare Workers and D1 for optional hosted persistence.
- Drizzle ORM for database schema management.
- ESLint and Node-based assessment tests.

## Getting Started

### Prerequisites

- Node.js 22.13 or later.
- The npm version bundled with Node.js.

### Installation

```bash
git clone https://github.com/NBRHCS/Wijhah
cd Wijhah
npm ci
```

No application environment variables are currently required. You can still create a local file from the template to keep a stable setup workflow:

```bash
# macOS / Linux
cp .env.example .env.local

# Windows PowerShell
Copy-Item .env.example .env.local
```

Start the development server:

```bash
npm run dev
```

Open the URL printed by Vite. Development uses local D1 storage and a mock identity for loopback requests only; that identity is excluded from production builds.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development environment. |
| `npm run build` | Create a production build. |
| `npm run start` | Run the built Worker locally through Wrangler. |
| `npm run lint` | Check TypeScript, React, and Next.js code with ESLint. |
| `npm run typecheck` | Check types without emitting files. |
| `npm run test:assessment` | Run assessment correctness and balance tests. |
| `npm run db:generate` | Generate a migration from the Drizzle schema. |

## Project Structure

```text
app/                  Pages, user journey, assessment logic, and API routes
  api/saved/          User progress persistence
  themes/             Theme provider and selector
build/                Local Vinext hosting integration
components/ui/        Reusable interface primitives
db/                   Drizzle schema and D1 access
drizzle/              Database migrations
public/               Public assets
scripts/              Development, build, and CI utilities
tests/                Assessment tests
vendor/               Vendored files and their licenses
.github/               CI, contribution templates, and Dependabot
docs/                  Repository setup documentation
```

## Themes

Wijhah offers two choices in the header theme selector:

- **Theme 2:** the default warm, light theme.
- **Theme 6:** a modern dark theme.

The browser stores the selection and applies it before the interface is shown to avoid a flash of the default theme.

## Contributing

Contributions are welcome. Read the [contribution guide](CONTRIBUTING.md) before opening a pull request. Use the repository issue forms for bugs and feature proposals.

## Security

Do not disclose a vulnerability in a public issue. Follow the private reporting steps in the [security policy](SECURITY.md).

## License

This project is available under the [MIT License](LICENSE). See the [third-party notices](THIRD_PARTY_NOTICES.md) for vendored files and the locations of their license texts.
