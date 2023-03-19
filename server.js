const express = require("express")
const app = express()
const port = process.env.PORT || 8080
const expressLayouts = require("express-ejs-layouts")

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(expressLayouts)
app.use(express.urlencoded({ extended: true }))
app.use(require("./middlewares/method_override"))

app.get("/", (req, res) => {
  res.render("home")
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
