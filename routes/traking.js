const express = require("express");
const router = express.Router();

const data = [
  {
    path: "/visitors/events/",
    value: {
      fingerprint: "5d4697775392fc850a737fe225fbd8e9",
      sessionId: "0da4fc08-3f12-5890-fdce-2455fc17c394",
      visitorId: "be4ab37a-1de9-a0f0-f973-562b7cd4365e",
      trackingId: "INF-yj562hjojzbtez",
      userId: null,
      userProfile: null,
      geo: {
        latitude: 28.58,
        longitude: 77.33,
        city: "Noida",
        country: "India",
        ip: "103.83.128.66",
      },
      form: {
        formId: "2bc04127-92d8-eb72-b1d3-26dc63f6ff19",
        email: "agency@gmail.com",
        anonymous: "Login",
      },
      timestamp: "2019-12-08T06:42:57.289Z",
      event: "formsubmit",
      source: {
        url: {
          host: "app.useinfluence.co",
          hostname: "app.useinfluence.co",
          pathname: "/login",
          protocol: "https:",
        },
      },
      referrer: "",
    },
  },

  {
    path: "/visitors/events/",
    value: {
      fingerprint: "5d4697775392fc850a737fe225fbd8e9",
      sessionId: "0da4fc08-3f12-5890-fdce-2455fc17c394",
      visitorId: "be4ab37a-1de9-a0f0-f973-562b7cd4365e",
      trackingId: "INF-ixpktk3itsk86",
      userId: null,
      userProfile: null,
      geo: {
        latitude: 28.58,
        longitude: 77.33,
        city: "Noida",
        country: "India",
        ip: "103.83.128.66",
      },
      form: {
        formId: "2bc04127-92d8-eb72-b1d3-26dc63f6ff19",
        email: "agency@gmail.com",
        anonymous: "Login",
      },
      timestamp: "2019-12-08T06:42:57.289Z",
      event: "formsubmit",
      source: {
        url: {
          host: "app.useinfluence.co",
          hostname: "app.useinfluence.co",
          pathname: "/login",
          protocol: "https:",
        },
      },
      referrer: "",
    },
  },
  {
    path: "/visitors/events/",
    value: {
      fingerprint: "5d4697775392fc850a737fe225fbd8e9",
      sessionId: "0da4fc08-3f12-5890-fdce-2455fc17c394",
      visitorId: "be4ab37a-1de9-a0f0-f973-562b7cd4365e",
      trackingId: "INF-3gbfcjjsd6vhvo",
      userId: null,
      userProfile: null,
      geo: {
        latitude: 28.58,
        longitude: 77.33,
        city: "Noida",
        country: "India",
        ip: "103.83.128.66",
      },
      form: {
        formId: "2bc04127-92d8-eb72-b1d3-26dc63f6ff19",
        email: "agency@gmail.com",
        anonymous: "Login",
      },
      timestamp: "2019-12-08T06:42:57.289Z",
      event: "formsubmit",
      source: {
        url: {
          host: "app.useinfluence.co",
          hostname: "app.useinfluence.co",
          pathname: "/login",
          protocol: "https:",
        },
      },
      referrer: "",
    },
  },
];
//get single random data
router.get("/", (req, res) => {
  const newdata = data[Math.floor(Math.random() * data.length)];
  res.json(newdata);
});
//get more than one random data
router.get("/random", (req, res) => {
  const newdata = data.sort(() => 0.5 - Math.random()).slice(0, 2);
  
  const trackingId = newdata.map((item) => {
    return item.value.trackingId;
  });
  const total = newdata.length;
  res.json({ total, trackingId });
});

router.get("/time", (req, res) => {
  const date1 = new Date();
  const date2 = data[0].value.timestamp;
  const date3 = new Date(date2);
  const newdata = data.filter(
    (item) => date1 - new Date(item.value.timestamp) > 5 * 60 * 1000
  );
  const trackingId = newdata.map((item) => {
    return item.value.trackingId;
  });
  const total = newdata.length;
  res.json({ total, trackingId });
});

module.exports = router;
