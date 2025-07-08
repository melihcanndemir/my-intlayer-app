🧭 Intlayer Roadmap (React + Vite)

✅ 1. Project Setup
 npm create vite@latest my-app -- --template react-ts
 cd my-app && npm install
 npm install intlayer react-intlayer
 npm install --save-dev vite-intlayer @vitejs/plugin-react-swc

✅ 2. Configuration
 Create intlayer.config.ts → define languages
 vite.config.ts → add intlayerPlugin()

✅ 3. Content Definition
 Create src/app.content.tsx
 Define translations with t() function

✅ 4. Integrate into App
 Wrap main.tsx with IntlayerProvider
 Fetch content with useIntlayer("app")

✅ 5. Language Switching
 Create LocaleSwitcher component with useLocale()
 Change language with setLocale()

✅ 6. Advanced Features (Optional)
 🌍 URL-based routing (middleware)
 🧠 Visual Editor (coming soon)
 🧾 CMS integration
 Update <html lang> and dir

✅ 7. CLI Usage
 npx intlayer dictionaries build → compile contents
 Add .intlayer/ folder to .gitignore