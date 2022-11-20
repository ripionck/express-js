const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");
const bodyParser = require("body-parser");

/*............body parser...........*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post("/user", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   res.send(`Student name is ${name} and age is ${age}`);
// });
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`User name is ${fullName} and age is ${age}`);
});

/*..........router connected with app...........*/
app.use("/api/user", userRouter);

/*............. json file send............*/
// app.use("/register", (req, res) => {
//   res.status(200).json({
//     message: "I am register route.",
//     statusCode: 200,
//   });
//   res.redirect("/login");
// });

/*............html file send...........*/
// app.use("/register", (req, res) => {
//   res.statusCode = 200;
//   res.sendFile(__dirname + "/views/register.html");
//   res.end();
// });

/*........cookie send.........*/
// app.use("/login", (req, res) => {
//   res.cookie("name", "ruthee");
//   res.cookie("age", "25");
//   res.clearCookie("name");
//   res.end();
// });

/*........header send.........*/
// app.use("/login", (req, res) => {
//   res.append("id", "120000");
//   res.end();
// });

/*..........query parameters request.............*/
// app.use("/", (req, res) => {
//   const id = req.query.id;
// const name = req.query.name;
//   const { id, name } = req.query;
//   res.send(`Student name is ${name} and id id ${id}`);
// });

/*...........route parameters request..............*/
// app.use("/userId/:id/userAge/:age", (req, res) => {
//   //   const id = req.params.id;
//   //   const age = req.params.age;
//   const { id, age } = req.params;
//   // res.send(`Student age is ${age} and id id ${id}`);
// });

/*...........header request..............*/
// app.use("/", (req, res) => {
//   const id = req.header("id");
//   const name = req.header("name");
//   res.send(`Student name is ${name} and id id ${id}`);
// });

// app.use("/", (req, res) => {
//   res.send("I am the request route.");
//   res.end();
// });

app.use((req, res) => {
  res.send("404 !!! Not a valid url.");
});

module.exports = app;
