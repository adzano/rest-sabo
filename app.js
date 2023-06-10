// This is the Main Backend Service provided by CC for SaBo App
const express = require("express");
require('@google-cloud/debug-agent').start();
const port = 8081;

const app = express();

const userRouter = require("./api/users/user.router");
const cctvRouter = require("./api/cctv/cctv.router");
const adminRouter = require("./api/admin/admin.router");

app.get("/", (req, res) => {
  return res.status(200).send("If you seeing this, that means our backend server is up and running! For API Documentation, refer to " + "<a href='https://docs.google.com/spreadsheets/d/1GCcjG5RSXkoDq9XkSQIgPpwpn7zdazr5xilzSL7uja0/edit'>Link</a>");
});

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/cctv", cctvRouter);
app.use("/api/admin", adminRouter);

app.listen(port, () => {
  console.log("Server up and running on PORT :", port);
});
