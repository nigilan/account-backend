var express = require('express');
var router = express.Router();
const modelAccounts = require('../models/accountdetails');

router.get('/:user', function(req, res, next) {
  const {user} = req.params;
  if (!user){
    res.status(500).send({data:'', errMsg : 'Internal Server Error!!'});
    return;
  }
  const accounts = modelAccounts.getAccountDetails(user);
  if (!accounts || accounts.length === 0){
    res.status(401).send({data:[], errMsg : 'No data found!'});
    return;
  }
  res.status(200).send({data:accounts, errMsg : ''});
});

module.exports = router;
