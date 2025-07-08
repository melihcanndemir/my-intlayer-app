/* eslint-disable */
export default {
  key: "app",
  content: {
    title: {
      nodeType: "translation",
      translation: {
        en: "Welcome to Intlayer",
        tr: "Intlayer'a Hoşgeldiniz"
      }
    },
    description: {
      nodeType: "translation",
      translation: {
        en: {
          key: null,
          props: {
            children: [
              "Edit ",
              {
                type: "code",
                key: null,
                props: {
                  children: "src/App.tsx"
                },
                _owner: null,
                _store: {}
              },
              " and save to test HMR"
            ]
          },
          _owner: null,
          _store: {}
        },
        tr: {
          key: null,
          props: {
            children: [
              "HMR'yi test etmek için ",
              {
                type: "code",
                key: null,
                props: {
                  children: "src/App.tsx"
                },
                _owner: null,
                _store: {}
              },
              "'i düzenleyin ve kaydedin"
            ]
          },
          _owner: null,
          _store: {}
        }
      }
    }
  }
} as const;
