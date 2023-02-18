var express = require('express');
var router = express.Router();

let userModel = require("../domain/models/user.model");

/* GET users listing. */
router.get('/', async function (req, res, next) {
  let users = await userModel.find();
  res.send(users);
});

/* POST */
router.post('/', (req, res) => {
  let newUser = userModel({
    name : "Ace",
    lastName: "Ituna",
    email :"ace.ituna@enace.ite.com",
    user: "elaceito-so",
    password: "aaaaaaaaa",
    state: true
  })

  newUser.save()
  .then(()=> console.log("Exipoto"))
  .catch((e)=> console.error("Se cayo el gayo", e));
  res.send('Registrar')
})

/* PUT */
router.put('/', (req, res) => {
  res.send(' PUT ')
})

/* DELETE */
router.delete('/', (req, res) => {
  res.send('Delete')
})

module.exports = router;