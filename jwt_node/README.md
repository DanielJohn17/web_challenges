# JWT NODE

## Description

This is a simple project to demonstrate how to use JWT in Node.js with TypeScript.

## Technologies

- Node.js
- TypeScript
- MongoDB
- React
- Tailwind CSS
- JWT (JSON Web Tokens)

## Installation

```bash
git clone https://github.com/DanielJohn17/web_challenges.git
cd web_challenges/jwt_node
```

### Install api dependencies

```bash
cd api
pnpm install
```

### Install React dependencies

```bash
cd frontend
pnpm install
```

## Usage

### Run the API

Add a `.env` file in the `api` directory with the following content:

```env
PORT=5000
MONGO_DB_URI=<your_mongodb_uri_here>
CORS_ORIGIN=http://localhost:4173
SECRET_KEY=<your_secret_here>
```

Then run the following commands:

```bash
cd api
pnpm run build
pnpm start
```

### Run the frontend

```bash
cd frontend
pnpm run build
pnpm preview
```
