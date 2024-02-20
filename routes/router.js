const express = require("express")
const router = express.Router();
const members = require("../mockdata/members")
const uuid = require("uuid")


router.get("/", (req, res) => {
    // res.render("base.njk", { members })
    res.render("./pages/nccHomePage.njk", {members} );
})

router.get("/home", (req,res) => {
    res.render("pages/home.njk", { data : {
        'ketchup': '5 tbsp',
        'mustard': '1 tbsp',
        'pickle': '0 tbsp'
       }} )
    //res.json(members);
})

router.get("/team/:id", (req,res) => {
    const hasMember = members.some(mem => mem.id ===  parseInt(req.params.id));
    if(hasMember) {
        const result = members.filter( mem => mem.id === parseInt(req.params.id));
        res.json(result);
    }
    else{
        res.status(400).json({ msg : "memeber not found"})
    }
   
})

router.post("/team", (req,res) => {
   
   const newMember = {
    id: uuid.v4(),
    name : req.body.name,
    dob : req.body.dob,
    address : req.body.address
   }
   if(req.body?.name || req.body?.dob || req.body?.address)
       members.push(newMember)

   res.json(members)

})

router.delete("/team/:id", (req, res) => {
    let newArray 
    if(req.body?.id){
         newArray = members.filter(member => member.id !== parseInt(req.body.id))
    }
    
    res.json(newArray)

})
module.exports = router
