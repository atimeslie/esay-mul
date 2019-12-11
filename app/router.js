
module.exports = app => {
  // app.get('/', app.controller.home.index);
  app.get('/client', app.controller.home.client);
  app.get('/pager', app.controller.home.pager);
  app.all(/^\/user\/.*/, app.controller.backend.apis)
  app.get('/', app.controller.index.ssr);
  app.get('/category', app.controller.category.index);
  app.get('/public/parseUser', app.controller.index.setCookie)
};
