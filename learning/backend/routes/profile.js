const router = require('express').Router();
let Profile = require('../models/profile.model');



router.route('/').get((req,res)=>{
    Profile.find()
    .then(profile =>res.json(profile))
    .catch(err=>res.status(400).json('Error:'+err));
});


router.route('/ad').post((req,res)=>{
    const userId = req.body.userId;
    const name = req.body.name;
    const email = req.body.email;
    const pic = req.body.pic;

    const newProfile = new Profile({
        userId,name,email,pic
    })
    const existingUser = Profile.findOne({userId})

    Profile.findOneAndUpdate(existingUser,newProfile,(err,doc)=>{
        if(err){
            console.log(err);
        }
        newProfile.save()
    .then(()=>res.json('Data Saved!'))
    .catch(err=>res.status(400).json('Error:'+err));
    })
    // if(existingUser) return res.status(404).json({message:'Profile Already exist'})
    // const query = req.params.id;
    // const option = {upsert:true};
    // Profile.findOneAndUpdate(query,newProfile,option);
    // newProfile.save()
    // .then(()=>res.json('Data Saved!'))
    // .catch(err=>res.status(400).json('Error:'+err));

});

module.exports = router;