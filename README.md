# 🌐 Horizon Network Website

A youth-led nonprofit website built with **React + TypeScript**, showcasing our mission, services, and contact information.

## 🚀 Features

- **Home Page** – Intro to Horizon Network with mission statement and branding.
- **Services Page** – Details about High School Horizons, Elementary Enrichment, and Fundraising for the Future.
- **Questions Form** – Contact form powered by [Formspree](https://formspree.io/) with optional name/email handling.
- **Contacts Section** – Links to Instagram, Discord, and WhatsApp for easy connection.

## 🛠️ Tech Stack

- [React](https://react.dev/) (with JSX/TSX)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (or CRA if you used that)
- CSS (custom styling with responsive layout)

## 📂 Project Structure

```
src/
├── assets/               # Images, SVGs, static files
├── components/
│   ├── Home.tsx          # Hero section with intro + image
│   ├── Services.tsx      # Services section
│   ├── Questions.tsx     # Formspree-powered form
│   ├── Contacts.tsx      # Contact links
│   └── ...
├── App.tsx               # Main app container
├── main.tsx              # React entry point
└── index.css             # Global styles
```

## ⚡ Getting Started

### 1. Clone repo

```bash
git clone https://github.com/yourusername/horizon-network.git
cd horizon-network
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run locally

```bash
npm run dev
```

Project will be live at [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
```

## 📬 Form Handling

The **Questions form** uses [Formspree](https://formspree.io/). Submissions go to the configured endpoint:

```tsx
<form
  action="https://formspree.io/f/mvgqzwan"
  method="POST"
>
```

- If **name** is left blank → defaults to `"No name"`
- If **email** is left blank → defaults to `"NoEmail@gmail.com"`

## 🌍 Contacts

- [Instagram](https://www.instagram.com/horizonnetworkbc/)
- [Discord](https://discord.gg/3G4qnpFn)
- [WhatsApp](https://wa.me/19876543210)

## 📜 License

MIT License © Horizon Network

