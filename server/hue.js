const router = require("express").Router();
module.exports = router;

const hueBridge = process.env.HUE_BRIDGE_ADDRESS;
const hueUser = process.env.HUE_BRIDGE_USERNAME;

router.get("/lights", async (req, res, next) => {
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
      // console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put(`/lights/:lightId/state`, (req, res, next) => {
  const url = `https://${hueBridge}/api/${hueUser}/lights/${req.params.lightId}/state`;
  const options = {
    method: "PUT",
    url: url,
    body: req.body,
    json: true,
    rejectUnauthorized: false
  };
  const rp = require("request-promise");
  rp(options)
    .then(result => {
      // console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//fix this router
//fix this router
//fix this router ]

router.get("/groups", async (req, res, next) => {
  const url = `https://${hueBridge}/api/${hueUser}/groups`;
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
      // console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
