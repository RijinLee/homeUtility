const router = require("express").Router();
module.exports = router;

router.get("/lights", async (req, res, next) => {
  const hueBridge = process.env.HUE_BRIDGE_ADDRESS;
  const hueUser = process.env.HUE_BRIDGE_USERNAME;
  const url = `https://${hueBridge}/api/${hueUser}/lights`;
  // console.log(url);
  const options = {
    method: "GET",
    url: url,
    json: true,
    rejectUnauthorized: false
  };
  const rp = require("request-promise");
  rp(options)
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
