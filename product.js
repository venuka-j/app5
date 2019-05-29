const express = require('express');

const router = express.Router();

router.get('/product', (request, response) => {
        response.send("lists of products");
    })

router.post('/product', (request, response) => {
        response.send("product created");
    })
module.exports = router;