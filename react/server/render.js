import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from 'client/App';

const render = (req, context, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <!-- 水合 -->
        <script src="hydrate.js"></script>
      </body>
    </html>
  `;

  return html;
};

export default render;
