module.exports = function (app) {

  var multer = require('multer'); // npm install multer --save
  var upload = multer({dest: __dirname + '/../../src/assets/uploads'});


  app.post('/api/upload', upload.single('myFile'), uploadImage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  var WidgetModel = require('../models/widget/widget.model.server');

  function createWidget(req,res) {
    const widget = req.body;
    WidgetModel.createWidget(widget.pageId, widget)
      .then(function (widgets) {
        res.json(widgets);
      });
  }

  function findAllWidgetsForPage(req,res) {
    const pid = req.params['pageId'];
    WidgetModel.findAllWidgetsForPage(pid)
      .then(function (reswidgets) {
        res.json(reswidgets);
      });
  }

  // function getWidgetsForPageId(pid){
  //   const curwidgets = [];
  //   for (var i = 0; i < widgets.length; i++) {
  //     if (widgets[i].pageId === pid) {
  //       curwidgets.push(widgets[i]);
  //     }
  //   }
  //   return curwidgets;
  // }
  function findWidgetById(req,res){
    const widgetId = req.params['widgetId'];
    WidgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      });
  }

  function getWidgetById(wid){
    WidgetModel.findWidgetById(wid)
      .then(function (widget) {
        res.json(widget);
      });
  }

  function updateWidget(req, res){
    const widgetId =req.params['widgetId'];
    const newWidget = req.body;
    WidgetModel.updateWidget(widgetId,newWidget)
      .then(function (status) {
        return WidgetModel.findAllWidgetsForPage(widgetId.pageId);
      })
      .then(function (widgets) {
        res.json(widgets);
        return;
      },(function (err) {
        res.sendStatus(404).send(err)
        return;
      }));
  }

  function deleteWidget(req, res) {
    const widgetId = req.params['widgetId'];
    WidgetModel.deleteWidget(widgetId)
      .then(function (status) {
        return WidgetModel.findAllWidgetsForPage(widgetId.pageId);
      })
      .then(function (widgets) {
        res.json(widgets);
        return;
      }, (function (err) {
        res.sendStatus(404).send(err)
        return;
      }));
  }
  function uploadImage(req, res) {
    console.log(req.body);
    var widgetId      = req.body.widgetId
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var widget = req.body.widget;
    var appUrl = req.body.appUrl;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    // widget = getWidgetById(widgetId);
    // widget.url = 'assets/uploads/'+filename;

    var widget = {
      url: '/assets/uploads/'+filename,
      width: width
    }

    WidgetModel.updateWidget(widgetId,widget)
      .then (function (status) {
        res.json(status);
      });

    // var callbackUrl   = "http://localhost:4200/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget";
    var callbackUrl   = "https://nair-vivek-webdev.herokuapp.com//user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget";

    res.redirect(callbackUrl);
  }


}
