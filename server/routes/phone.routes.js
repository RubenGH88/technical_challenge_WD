const router = require("express").Router();
const phonesData = require("../data/phones.json");


router.get("/", (req, res, next) => {
res.json(phonesData)
});

router.get("/:id", (req, res, next) => {
    const phoneId =Number(req.params.id);
 
    const phone = phonesData.find(phone=>phone.id===phoneId)
   
    if(!phone){
    return res.status(400)
    .json({message:"The phone with this ID is not available"})
    }
    res.json(phone)
    });

module.exports = router;
