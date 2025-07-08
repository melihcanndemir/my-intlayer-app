# Intlayer React Vite Starter

A modern, production-ready React + Vite + TypeScript starter project with seamless internationalization powered by [Intlayer](https://github.com/aymericzip/intlayer).  
This template provides a robust foundation for scalable, multilingual web applications.

---

## 🚀 Features

- **React 18+** with functional components and hooks
- **Vite** for lightning-fast development and builds
- **TypeScript** for end-to-end type safety
- **Intlayer** for advanced i18n and content management
- **Zustand** (recommended) for state management
- **ESLint + Prettier** for code quality and consistency
- **Ready for CI/CD** and modern deployment workflows

---

## 📦 Project Structure

```
my-intlayer-app/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── App.tsx
  │   ├── App.css
  │   ├── app.content.tsx
  │   ├── LocaleSwitcher.tsx
  │   ├── main.tsx
  │   ├── index.css
  │   └── vite-env.d.ts
  ├── intlayer.config.ts
  ├── vite.config.ts
  ├── package.json
  ├── tsconfig*.json
  ├── eslint.config.js
  ├── README.md
  └── ROADMAP.md
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/melihcanndemir/my-intlayer-app.git
cd intlayer-react-vite-starter/my-intlayer-app
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure Intlayer

- Edit `intlayer.config.ts` to define your supported languages and i18n settings.
- Update `vite.config.ts` to include the Intlayer plugin.

### 4. Define Content

- Add your translation keys and content in `src/app.content.tsx` using the `t()` function.

### 5. Run the development server

```sh
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your app.

---

## 🌍 Internationalization

- Use `IntlayerProvider` in `main.tsx` to wrap your app.
- Fetch content with `useIntlayer("app")`.
- Switch languages with the `LocaleSwitcher` component (`useLocale()` and `setLocale()`).

---

## 🧩 Advanced Features

- URL-based routing (middleware support)
- Visual Editor (coming soon)
- CMS integration
- Dynamic `<html lang>` and `dir` updates

---

## 🖥️ CLI Usage

- Build dictionaries:  
  ```sh
  npx intlayer dictionaries build
  ```
- Add `.intlayer/` to your `.gitignore`.

---

## 🧑‍💻 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

- Star the project on [GitHub](https://github.com/aymericzip/intlayer)
- For issues or questions, use [GitHub Issues](https://github.com/aymericzip/intlayer/issues)

---

## 🏆 Project Rarity & Level

- **Rarity:** Advanced, modern, and modular i18n React starter with Intlayer integration (rare in open source).
- **Level:** Suitable for intermediate to advanced React/TypeScript developers.

---
