var express = require('express');

var router = express.Router();

router.get('/',function(req,res,next) {

    var x = Math.random();

    var y;

    y = req.query.y;

    if(y==undefined)

    {
        y=x;

    }

    res.render('computation',{ title: `f(${x}) is ${Math.sqrt(x)} & f(${x} is ${Math.tan(x)}`});
     
});



   // res.render('computation', { title: `f(${x} is ${Math.tan(x)}`});



    module.exports = router;