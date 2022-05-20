# Self Hosted App Starter

> A self hosted app starter for full-stack developer/creator.

## Tech Stack

### Backend

- Go
- Air
- SQLite

### Frontend

Generate by [vue3-starter](https://github.com/xiaoluoboding/vue3-starter)

- Vue 3
- Vite
- WindiCSS

### Prerequisites

- [Go](https://golang.org/doc/install) (1.16 or later)
- [pnpm](https://pnpm.io/installation)
- [Air](https://github.com/cosmtrek/air#installation) (1.27.10 or later). This is for backend live reload.

## Setup

1. Install [Air](https://github.com/cosmtrek/air#installation).

1. Pull source.

```bash
npx degit xiaoluoboding/self-hosted-app-starter my-self-hosted-app
```

2. Start backend using air (with live reload).

```bash
air -c scripts/.air.toml
```

Change the open file limit if you encounter "error: too many open files".

```
ulimit -n 10240
```

3. Start frontend (with live reload).

```bash
cd frontend && pnpm i && pnpm dev
```

The app should now be running at https://localhost:3000 and change either frontend or backend code would trigger live reload.

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)
