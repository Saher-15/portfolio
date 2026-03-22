# Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite.

## Features

- **Hero Section** — introduction and call to action
- **About** — background and experience
- **Skills** — tech stack overview
- **Projects** — showcase of work
- **Contact** — contact form with email support
- **CV Modal** — view/download CV directly from the site

## Tech Stack

- React 19 + Vite
- React Icons
- Express + Nodemailer (contact form backend)
- CSS3

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Saher-15/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

Open `http://localhost:5173`

### 4. Build for production
```bash
npm run build
```

## Contact Form Setup

The contact form uses Express + Nodemailer. Create a `.env` file:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

Then run the backend:
```bash
node server.js
```
