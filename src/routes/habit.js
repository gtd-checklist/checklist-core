const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.setStatus(200));

module.exports = router;
