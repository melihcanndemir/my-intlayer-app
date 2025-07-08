import { t, type Dictionary } from "intlayer";
import type { ReactNode } from "react";

const appContent: Dictionary = {
    key: "app",
    content: {
        title: t({
            en: "Welcome to Intlayer",
            tr: "Intlayer'a Hoşgeldiniz"
        }),
        description: t<ReactNode>({
            en: <>Edit <code>src/App.tsx</code> and save to test HMR</>,
            tr: <>HMR'yi test etmek için <code>src/App.tsx</code>'i düzenleyin ve kaydedin</>,
        })
    }
} satisfies Dictionary;

export default appContent;