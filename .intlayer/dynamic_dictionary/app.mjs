const content = {
  'en': () => import('./app.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'tr': () => import('./app.tr.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
