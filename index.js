const globalthis = require("system.global")()
module.exports = (function($) {
  return function() {
    globalthis.jQuery = $
  }
})(require('jquery'))