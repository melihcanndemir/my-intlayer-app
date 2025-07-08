const content = {
  'en': () => Promise.resolve(require('./app.en.json')),
  'tr': () => Promise.resolve(require('./app.tr.json'))
};
module.exports = content;
