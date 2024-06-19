const express = require("express");
const app = express();

app.get("/simpleInterest",(req, res) => {
  const p = parseInt(req.query.p);
  const t = parseInt(req.query.t);
  const r = parseInt(req.query.r);

  if(p === null || t === null || r === null ) {
    return res.json({
      total: null,
      interest: null
    })
  }

  const simpleInterest = (p*r*t)/100
  const amount = p+simpleInterest;

  res.json({
    total: amount,
    interest: simpleInterest
  });
})

app.listen(3000);