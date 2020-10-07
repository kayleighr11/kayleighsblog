import App from './app';

// Ensure DOM is loaded before we do stuff
window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.render();
});