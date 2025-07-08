import { useLocale } from "react-intlayer";
import { getLocaleName } from "intlayer";

export default function LocaleSwitcher() {
  const { locale, setLocale, availableLocales } = useLocale();

  return (
    <div style={{ marginTop: "1rem" }}>
      <span>🌐 Dil: </span>
      {availableLocales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          disabled={loc === locale}
          style={{
            marginRight: "0.5rem",
            fontWeight: loc === locale ? "bold" : "normal",
          }}
        >
          {getLocaleName(loc)}
        </button>
      ))}
    </div>
  );
}