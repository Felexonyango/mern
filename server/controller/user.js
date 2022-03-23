const express =require('express')
const router = express.Router()
const User= require('../model/user')
router.get('/',async(req,res)=>{
    try{
        const user = await User.find()
        res.json(user);

    }
    catch(err){

        console.log(err)
    }
    
})
router.post('/user',async(req,res)=>{
    const {name,email}=req.body
try{

   
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({
        name,
        email
    })
 await user.save()
}
catch(err){
    console.log(err)


}

})










module.exports=router