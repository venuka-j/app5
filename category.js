const express = require('express');

const router = express.Router();

router.get('/category', (request, response) => {
        response.send("list of products");
    });
module.exports = router;