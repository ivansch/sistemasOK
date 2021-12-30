const { preloadProject } = require("./preloaderProject.js");
const { preloadAdmins } = require('./preloaderAdmins.js')
async function preloader() {
  await preloadProject();
  await preloadAdmins()
}

module.exports = {
  preloader,
};
