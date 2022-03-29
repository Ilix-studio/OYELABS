//Question No 1.
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Customer = require('../../models/Customer');

//This route for - to POST(create) customer - api/customers - name and phone number

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('phoneNo', 'Please enter the number').isNumeric().isLength({max:10})
], 
async (req,res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({ errors:errors.array() });
   }
   const { name, phoneNo } = req.body;

   try {
     //check duplicate
     let customer = await Customer.findOne({phoneNo});
     if(customer){
         res.send(400).json({errors: [{msg: 'Phone Number already exits'}]})
     }
     customer = new Customer ({
        name,
        phoneNo 
     })

     await customer.save();

    res.send('Customer Registered ');  
   } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
   } 


});

module.exports = router;