import { useIntlayer } from "react-intlayer";
import LocaleSwitcher from "./LocaleSwitcher";

function App() {
  const content = useIntlayer("app");

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <LocaleSwitcher />
    </div>
  );
}

export default App;