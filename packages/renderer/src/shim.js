import process from 'process'

if (typeof global == 'undefined' || typeof global.process === 'undefined') {
  /* Global Window */
  window.global = window
  window.process = process
}
