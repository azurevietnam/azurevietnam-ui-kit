// /**
//  *  @name plugin
//  *  @description description
//  *  @version 1.0
//  *  @options
//  *    option
//  *  @events
//  *    event
//  *  @methods
//  *    init
//  *    publicMethod
//  *    destroy
//  */
// ;(function($, window, undefined) {
//   'use strict';

//   var pluginName = 'plugin';
//   var privateVar = null;
//   var privateMethod = function(el, options) {
//     // to do
//   };

//   function Plugin(element, options) {
//     this.element = $(element);
//     this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
//     this.init();
//   }

//   Plugin.prototype = {
//     init: function() {
//       var that = this;
//       this.vars = {
//         key: 'value'
//       };
//       // initialize
//       // add events
//     },
//     publicMethod: function(params) {
//       // to do
//       $.isFunction(this.options.onCallback) && this.options.onCallback();
//       this.element.trigger('customEvent');
//     },
//     destroy: function() {
//       // remove events
//       // deinitialize
//       $.removeData(this.element[0], pluginName);
//     }
//   };

//   $.fn[pluginName] = function(options, params) {
//     return this.each(function() {
//       var instance = $.data(this, pluginName);
//       if (!instance) {
//         $.data(this, pluginName, new Plugin(this, options));
//       } else if (instance[options]) {
//         instance[options](params);
//       }
//     });
//   };

//   $.fn[pluginName].defaults = {
//     key: 'value',
//     onCallback: null
//   };

//   $(function() {
//     $('[data-' + pluginName + ']').on('customEvent', function() {
//       // to do
//     });

//     $('[data-' + pluginName + ']')[pluginName]({
//       key: 'custom'
//     });
//   });

// }(jQuery, window));


/**
 * @name Site
 * @description Global variables and functions
 * @version 1.0
 */

var Site = (function($, window, undefined) {
  'use strict';
  undefined;
  var privateVar = null;
  var privateMethod = function() {
    //focus input form
    $('.form-control').on('focus', function() {
      $(this).parents('.input-group').addClass('input-group-focus');
    }).on('blur', function() {
      $(this).parents('.input-group').removeClass('input-group-focus');
    });

    //Activate bootstrap-select
    $('[data-select]').selectpicker({
      tickIcon: ''
    });
  };
  return {
    publicVar: privateVar,
    publicMethod: privateMethod
  };

})(window.jQuery, window);


window.jQuery(function() {
  Site.publicMethod();
});
