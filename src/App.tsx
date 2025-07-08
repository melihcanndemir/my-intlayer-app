import { useIntlayer } from "react-intlayer";
import LocaleSwitcher from "./LocaleSwitcher";

function App() {
  const content = useIntlayer("app");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <section className="w-full max-w-2xl text-center py-16 rounded-3xl shadow-xl bg-white/80 backdrop-blur-md border border-blue-100">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 drop-shadow-lg tracking-tight">
          {content.title}
        </h1>
        <p className="text-lg md:text-2xl text-blue-900 mb-10 font-medium">
          {content.description}
        </p>
        <LocaleSwitcher />
      </section>
    </div>
  );
}

export default App;