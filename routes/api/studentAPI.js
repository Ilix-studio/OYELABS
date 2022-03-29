const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Student = require('../../models/Student')

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('subject', 'Enter subject name').not().isEmpty()
], 
async (req,res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({ errors:errors.array() });
   }
   const { name, email, subject } = req.body;

   try {
     
      student = new Student ({
        name,
        email,
        subject 
     });

     await student.save();

    res.send('Student added ');  
   } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
   } 


});

module.exports = router;