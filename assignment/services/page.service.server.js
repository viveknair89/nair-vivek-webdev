module.exports = function(api) {
  api.post("/api/website/:websiteId/page", createPage);
  api.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  api.get("/api/page/:pageId", findPageById);
  api.put("/api/page/:pageId", updatePage);
  api.delete("/api/page/:pageId", deletePage);

  pages = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '890', 'description': 'Lorem'},
    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'}
  ];

  function createPage(req,res) {
    pages.push(req.body);
    res.json(req.body);
  }
  function findAllPagesForWebsite(req, res){
    const websiteId = req.params['websiteId'];
    const respages =  getPagesForWebId(websiteId);
    res.json(respages);
  }


  function getPagesForWebId(webId) {
    const pgs =[]
    for (var i = 0; i < pages.length; i++)
    {
      if (pages[i].websiteId === webId)
      {
        pgs.push(pages[i]);
      }
    }
    return pgs;
  }

  function findPageById(req,res){
    const pageId = req.params['pageId'];
    res.json(getPageById(pageId));
  }
  function getPageById(pid){
    for (var i=0; i< pages.length; i++){
      if(pages[i]._id === pid){
        return pages[i];
      }
    }
  }
  function updatePage(req, res){
    const pageId = req.params['pageId'];
    const websiteId =req.params['websiteId'];
    const newPage = req.body;
    for (var i =0; i<pages.length; i++){
      if(pages[i]._id === pageId) {
        pages[i] = newPage;
      }
    }
    res.json(pages);

  }
  function deletePage(req, res){
    const pageId = req.params['pageId'];
    for (var i=0; i<pages.length; i++){
      if (pages[i]._id === pageId) {
        pages.splice( i, 1);
      }
    }
    res.json(pages);
  }

}
