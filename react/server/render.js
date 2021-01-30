import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import App from 'client/App';

const render = (req, context) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <App />
    </StaticRouter>
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
