const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

//This route for - to POST(create) customer - api/customers - name and phone number

router.post('/', [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('phoneNo', 'Please enter the number').isNumeric().isLength({max:10})
], 
(req,res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({ errors:errors.array() })
   }
    res.send('customer route')});

module.exports = router;