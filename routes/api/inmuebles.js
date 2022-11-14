const router = require('express').Router();
const Inmueble = require('../../models/inmueble.model')


router.get('/', function(req, res) {
    Inmueble.find()
        .then(inmuebles => res.json(inmuebles))
        .catch(err => res.json({error: err.message}));
});

router.post('/', function(req, res) {
    Inmueble.create(req.body)
        .then(inmueble => res.json(inmueble))
        .catch(err => res.json({error: err.message}));
});

router.put('/:inmuebleId', function(req, res) {
    Inmueble.findByIdAndUpdate(req.params.inmuebleId, req.body, { new:true })
        .then(inmueble => res.json(inmueble))
        .catch(err => res.json({error: err.message}));
});

router.delete('/:inmuebleId', function(req, res) {
    Inmueble.findByIdAndDelete(req.params.inmuebleId)
        .then(inmueble => res.json(inmueble))
        .catch(err => res.json({error: err.message}));
});

module.exports = router;