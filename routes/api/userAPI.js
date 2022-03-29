const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

//validation
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { name, email } = req.body;

    try {
      //see if user exists in real life

      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists'}] });
      }
 
  
      user = new User({
        name,
        email,
      });

      
      //save into database 
      await user.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// if email exist update with new name 
router.patch('/',  async(req, res) => {
    try {
        let user = await User.findOne({ user: req.user.id }); 
            
      if(user) {
        user = await User.findByIdAndUpdate({user: req.user.id}, {$set: userName}, {new: true});
        return res.json(user);
    }
      //create user name
      user = new User(userName);
      await user.save();
      res.json(user);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");  
    }
})

module.exports = router;
