const router = require('express').Router();
let Money = require('../models/money.model');

router.route('/').get((req,res)=>{
    Money.find()
    .then(money =>res.json(money))
    .catch(err=>res.status(400).json('Error:'+err));
});

// router.route('/:id').get((req, res)=>{
//     Money.findById(req.params.id)
//     .then(money => res.json(money))
//     .catch(err=>res.status(400).json('Error:'+err));
// });

router.route('/:id').delete((req,res)=>{
    Money.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise Deleted !'))
    .catch(err => res.status(400).json('Error:'+err));
});


router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const twoThous = Number(req.body.twoThous);
    const fiveHun = Number(req.body.fiveHun);
    const twoHun = Number(req.body.twoHun);
    const oneHun = Number(req.body.oneHun);
    const fifty = Number(req.body.fifty);
    const totalNotes = Number(req.body.totalNotes);
    const totalAmt = Number(req.body.totalAmt);
    const words = req.body.words;
    const userId = req.body.userId;

    const newMoney = new Money({
        title,twoThous,fiveHun,twoHun,oneHun,fifty,totalAmt,totalNotes,words,userId
    })

    newMoney.save()
    .then(()=>res.json('Data Saved!'))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/list').get((req,res)=>{
    Money.find(req.query)
    .then(money=>res.json(money))
    .catch(err=>res.status(400).json('Error:'+err))
});

module.exports = router;