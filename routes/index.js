var express = require('express');
var router = express.Router();
const standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  return standupCtrl.list(req, res);
});

// POST filter by member name - home page
router.post('/', function(req, res) {
    return standupCtrl.filterByMember(req, res);
});

// GET new note page
router.get('/newnote', function(req, res) {
    return standupCtrl.getNote(req, res);
});

// POST New Note
router.post('/newnote', function(req, res) {
    return standupCtrl.create(req, res);
});



module.exports = router;
