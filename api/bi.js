export default (req, res) => {
  res.setHeader("content-type", "image/svg+xml");
  res.write("<svg>a</svg>");
  res.statusCode = 200;
};
