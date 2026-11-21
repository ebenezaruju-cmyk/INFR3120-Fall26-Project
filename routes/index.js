var express = require('express');
var router = express.Router();

// In-memory storage for incidents (first release - no database yet)
var incidents = [
  { title: 'Wi-Fi down on 3rd floor', severity: 'High', status: 'Open', date: '2026-11-18' },
  { title: 'Printer offline in Lab 2', severity: 'Low', status: 'Resolved', date: '2026-11-17' }
];

/* GET dashboard - list all incidents */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Incident Dashboard', incidents: incidents });
});

/* GET form to report a new incident */
router.get('/incidents/new', function(req, res, next) {
  res.render('new-incident', { title: 'Report New Incident' });
});

/* POST - handle the submitted form, add incident, redirect to dashboard */
router.post('/incidents', function(req, res, next) {
  var newIncident = {
    title: req.body.title,
    severity: req.body.severity,
    status: 'Open',
    date: new Date().toISOString().split('T')[0]
  };
  incidents.push(newIncident);
  res.redirect('/');
});

module.exports = router;