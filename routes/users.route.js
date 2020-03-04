const router = require("express").Router();
const users = require("../db/users.json");
router.route("/users")
    .get((req, res) => {
        res.json(users);
    })
    .post((req, res) => {
        console.log(req.body);
        // let user = req.body.
        // let usersArray = JSON.parse(users);
        // usersArray.push()
        // res.status(201).send(user);
    });

router.get("/users/:email", (req, res) => {
    console.log(req.params);
    let user = users.find((user) => user.email == req.params.email);
    if(user){
        res.send(user);
    }
    else{
        res.status(404).send({error: "No existe"});
    }
});



module.exports = router;