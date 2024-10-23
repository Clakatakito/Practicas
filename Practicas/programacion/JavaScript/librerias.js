const { JSDOM } = require('jsdom');

// Crear una nueva instancia de JSDOM con un HTML básico
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

// Asignar `document` y `window` globales para que estén disponibles globalmente
global.document = dom.window.document;
global.window = dom.window;