import express from 'express';
import render from 'server/render';

const app = express();

// 开启静态资源服务器
app.use(express.static("public"));

app.get("*", (req, res) => {
  const context = {};
  const content = render(req, context);
  res.send(content);
});

app.listen(3000, () => {
  console.log("listening on port 3000 💗");
});
