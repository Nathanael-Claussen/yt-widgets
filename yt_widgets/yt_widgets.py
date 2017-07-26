import ipywidgets as widgets
from traitlets import Unicode, Bool, Integer, Float, TraitError, validate


@widgets.register('View')
class View(widgets.DOMWidget):
    """
    View Widget
    """
    _model_name = Unicode('ViewModel').tag(sync=True)
    _model_module = Unicode('yt_widgets').tag(sync=True)
    _model_module_version = Unicode('0.1.0').tag(sync=True)
    _view_name = Unicode('ViewView').tag(sync=True)
    _view_module = Unicode('yt_widgets').tag(sync=True)
    _view_module_version = Unicode('0.1.0').tag(sync=True)

    x_pan = Float(1.0).tag(sync=True)
    y_pan = Float(1.0).tag(sync=True)
    zoom = Float(1.0).tag(sync=True)
