module.exports = function (app) {

  // var multer = require('multer'); // npm install multer --save
  // var upload = multer({dest: __dirname + '/../../src/assets/uploads'});

  // app.post("/api/upload", upload.single('myFile'), uploadImage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);


  widgets = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/vbOO9Wq6rCA'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}

  ];
  function createWidget(req,res) {
    widgets.push(req.body);
    res.json(req.body);
  }

  function findAllWidgetsForPage(req,res) {
    const pid = req.params['pageId'];
    const reswidgets = getWidgetsForPageId(pid);
    res.json(reswidgets);
  }
  function getWidgetsForPageId(pid){
    const curwidgets = [];
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pid) {
        curwidgets.push(widgets[i]);
      }
    }
    return curwidgets;
  }
  function findWidgetById(req,res){
    const widgetId = req.params['widgetId'];
    res.json(getWidgetById(widgetId));
  }
  function getWidgetById(wid){
    for (var i=0; i< widgets.length; i++){
      if(widgets[i]._id === wid){
        return widgets[i];
      }
    }
  }
  function updateWidget(req, res){
    const widgetId =req.params['widgetId'];
    const newWidget = req.body;
    for (var i =0; i<widgets.length; i++){
      if(widgets[i]._id === widgetId) {
        pages[i] = newWidget;
      }
    }
    res.json(widgets);
  }
  function deleteWidget(req, res){
    const widgetId = req.params['widgetId'];
    for (var i=0; i<widgets.length; i++){
      if (widgets[i]._id === widgetId) {
        widgets.splice( i, 1);
      }
    }
    res.json(widgets);
  }

}
