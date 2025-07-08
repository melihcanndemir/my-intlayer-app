import { useLocale } from "react-intlayer";
import { getLocaleName } from "intlayer";

export default function LocaleSwitcher() {
  const { locale, setLocale, availableLocales } = useLocale();

  return (
    <div className="mt-4 flex items-center space-x-2">
      <span className="mr-2 text-base">🌐 Dil:</span>
      {availableLocales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          disabled={loc === locale}
          className={`px-3 py-1 rounded transition-colors duration-200 border
            ${loc === locale
              ? "bg-blue-600 text-white font-bold border-blue-700 cursor-not-allowed"
              : "bg-white text-blue-700 border-blue-300 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"}
            `}
          aria-current={loc === locale ? "true" : undefined}
          tabIndex={0}
        >
          {getLocaleName(loc)}
        </button>
      ))}
    </div>
  );
}