const router = require('express').Router();
let Customer = require('../models/customer.model');

router.route('/').get((req,res)=>{
    Customer.find()
    .then(customer => res.json(customer))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const address = req.body.address;
    const userId = req.body.userId;

    const newCustomer = new Customer({
        name,phone,address,userId
    })

    newCustomer.save()
    .then(()=>res.json('Data Saved!!!'))
    .catch(err=>res.status(400).json('Error:'+err));
});

module.exports = router;