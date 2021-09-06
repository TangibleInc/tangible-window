module.exports = window.wp.element

/**
 * Workaround to prevent "Uncaught TypeError: _wpElement.default is undefined"
 * caused by Babel's prelude.
 */
window.wp.element.default = window.wp.element
