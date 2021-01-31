import express from 'express';
import { matchRoutes } from 'react-router-config';
import render from 'server/render';
import createStore from 'client/store';
import routerConfig from '@/router';

const app = express();

// 开启静态资源服务器
app.use(express.static("public"));

app.get("*", (req, res) => {
  const context = {};
  const requests = [];
  const store = createStore();
  const routes = matchRoutes(routerConfig, req.path);
  routes.forEach(({ route }) => {
    if (route.getInitialData) {
      requests.push(route.getInitialData(store.dispatch));
    }
  });
  Promise.all(requests).then(() => {
    const content = render(req, context, store);
    if (context?.action === 'REPLACE') {
      // 重定向
      res.redirect(301, context.url);
    } else if (context.NotFound) {
      // 404
      res.status(404);
      res.send(content);
    } else {
      res.send(content);
    }
  }).catch(() => {
    res.send('sever error');
  })
});

app.listen(3000, () => {
  console.log("listening on port 3000 💗");
});

