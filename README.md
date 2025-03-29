# Issue Tracker

A modern issues tracker

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm, yarn, pnpm, or bun package manager

### Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd <your-project-name>
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development Server

Run the development server with hot-reload:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## 🔧 Project Structure

```
├── app/                  # Application source directory (App Router)
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── globals.css       # Global styles
├── public/               # Static assets
├── components/           # Reusable React components
├── lib/                  # Utility functions and custom hooks
├── styles/               # Component-specific styles
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies and scripts
```

## 🎨 Features

### Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a modern sans-serif typeface designed by Vercel. The font is automatically optimized and served locally for the best performance and styling consistency.

### App Router

The project utilizes Next.js App Router, which provides:

- File-based routing
- Layouts and nested layouts
- Loading states
- Error handling
- Server components
- Data fetching on the server

## 🌐 API Routes

Create API endpoints by adding files to the `app/api` directory:

```javascript
// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: "Hello World" });
}
```

## 🔄 Environment Variables

Create a `.env.local` file in the root directory to add environment variables:

```
DB_CONNECTION_STRING=...
API_KEY=...
```

Access them in your code with `process.env.VARIABLE_NAME`.

## 🧪 Testing

This project can be set up with Jest and React Testing Library for testing:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

## 📦 Deployment

### Vercel

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
