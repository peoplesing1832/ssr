import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import App from 'client/App';

const render = (req, context, store, state) => {
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => {
    css.add(style._getCss())
  });

  const content = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </StyleContext.Provider>
  );

  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>ssr</title>
        <!-- 同步数据 -->
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
        <style>${[...css].join('')}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <!-- 水合 -->
        <script src="hydrate.js" defer></script>
      </body>
    </html>
  `;

  return html;
};

export default render;
