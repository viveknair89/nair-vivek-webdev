module.exports = function(api) {
  api.post("/api/website/:websiteId/page", createPage);
  api.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  api.get("/api/page/:pageId", findPageById);
  api.put("/api/page/:pageId", updatePage);
  api.delete("/api/page/:pageId", deletePage);

  var PageModel = require("../models/page/page.model.server");

  function createPage(req,res) {
    page = req.body;
    PageModel.createPage(page.websiteId,page)
      .then(function (page) {
        res.json(page);
      });
  }
  function findAllPagesForWebsite(req, res){
    const websiteId = req.params['websiteId'];
    PageModel.findAllPagesForWebsite(websiteId)
      .then(function(respages){
        res.json(respages);
      });
  }

  // function getPagesForWebId(webId) {
  //   const pgs =[]
  //   for (var i = 0; i < pages.length; i++)
  //   {
  //     if (pages[i].websiteId === webId)
  //     {
  //       pgs.push(pages[i]);
  //     }
  //   }
  //   return pgs;
  // }

  function findPageById(req,res){
    const pageId = req.params['pageId'];
    PageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page);
      });
  }

  // function getPageById(pid){
  //   for (var i=0; i< pages.length; i++){
  //     if(pages[i]._id === pid){
  //       return pages[i];
  //     }
  //   }
  // }

  function updatePage(req, res){
    const pageId = req.params['pageId'];
    const websiteId =req.params['websiteId'];
    const newPage = req.body;
    PageModel.updatePage(pageId,newPage)
      .then(function (status) {
        return PageModel.findAllPagesForWebsite(websiteId);
      })
      .then(function (pages) {
        res.json(pages);
        return;
      },(function (err) {
        res.sendStatus(404).send(err)
        return;
      }));
  }

  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    PageModel.deletePage(pageId)
      .then(function (status) {
        return PageModel.findAllPagesForWebsite(pageId.websiteId);
      })
      .then(function (pages) {
        res.json(pages);
        return;
      },(function (err) {
        res.sendStatus(404).send(err)
        return;
      }));
  }

}
