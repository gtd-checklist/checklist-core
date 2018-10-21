import express from 'express';

import { User } from '../models';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    res.status(401).send('User not found');
  } else if (!user.authenticate(password)) {
    res.status(401).send('Password does not match');
  } else {
    const token = user.generateToken();

    delete user.password; // This is not working :(

    res.json({ token, user });
  }
});

export default router;
