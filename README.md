# EverestHack

This repository is split into independent frontend and backend workspaces.

```text
EverestHack/
├── frontend/   Website and contact API currently used by the marketing site
└── backend/    Reserved for the future FastAPI service
```

## Frontend

The complete website lives in [`frontend/`](./frontend). Install, run, lint, and build it from that directory:

```bash
cd frontend
npm install
npm run dev
```

See [`frontend/README.md`](./frontend/README.md) for content editing, media replacement, email configuration, verification, and deployment guidance.

## Backend

The future backend will use FastAPI. It has intentionally not been scaffolded or configured yet. See [`backend/README.md`](./backend/README.md).
