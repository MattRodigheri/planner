const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const password = require("./keys.js");
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
const dbRoute = `mongodb+srv://mrodigheri:${password}@planner-vflyi.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/data", (req, res) => {
  Data.findById("5d894728738b5c797cf5ac8f", (err, data) => {
    console.log(data);
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/data", (req, res) => {
  Data.findByIdAndUpdate(
    req.body.params.id,
    {
      sunday: req.body.params.sunday,
      monday: req.body.params.monday,
      tuesday: req.body.params.tuesday,
      wednesday: req.body.params.wednesday,
      thursday: req.body.params.thursday,
      friday: req.body.params.friday,
      saturday: req.body.params.saturday
    },
    { new: true }
  )
    .then(data => {
      if (data) {
        return res.json({ success: true });
      } else {
        return res.json({ success: false });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
