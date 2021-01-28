import express from 'express';
import render from './render';

const app = express();

app.get("*", (req, res) => {
  const content = render();
  res.send(content);
});

app.listen(3000, () => {
  console.log("listening on port 3000 💗");
});
