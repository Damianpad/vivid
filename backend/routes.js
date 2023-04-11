const express = require("express");
const router = express.Router();


//test route to localhost:8000/api/
router.get('/', (req, res) => {
    try {
        res.json({msg: 'test GET request working'});
    } catch(error) {
        res.status(400).json({error: 'something went wrong'});
    }
});

module.exports = router;