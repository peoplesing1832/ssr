import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/views/Home';

const render = () => {
  const content = renderToString(<Home />)

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;
};

export default render;
