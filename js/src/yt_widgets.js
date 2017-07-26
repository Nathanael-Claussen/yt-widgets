var widgets = require('jupyter-js-widgets');
var _ = require('underscore');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including `_model_name`, `_view_name`, `_model_module`
// and `_view_module` when different from the base class.
//
// When serialiazing entire widget state for embedding, only values different from the
// defaults will be specified.
var ViewModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(_.result(this, 'widgets.DOMWidgetModel.prototype.defaults'), {
        _model_name : 'ViewModel',
        _view_name : 'ViewView',
        _model_module : 'yt-widgets',
        _view_module : 'yt-widgets',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0'
    })
});

// Custom View. Renders the widget model.
var ViewView = widgets.DOMWidgetView.extend({
  render: function() {

  },

  redraw: function() {

  },

  update_zoom: function() {

  },

  update_pan: function() {

  },

});

// BOILERPLATE:
module.exports = {
    ImageModel : ViewModel,
    ImageView : ViewView
};
