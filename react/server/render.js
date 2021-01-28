import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'client/App';

const render = () => {
  const content = renderToString(<App />)

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
