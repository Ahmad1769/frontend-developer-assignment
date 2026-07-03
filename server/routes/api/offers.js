const express = require('express');
const offers = require('../../data/offers');

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ success: true, data: offers });
});

router.get('/:id', (req, res) => {
  const offer = offers.find((item) => String(item.id) === String(req.params.id));
  if (!offer) {
    return res.status(404).json({ success: false, message: 'Offer not found' });
  }
  res.json({ success: true, data: offer });
});

module.exports = router;
