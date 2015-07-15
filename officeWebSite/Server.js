/**
 * Created by linli on 2014/9/25.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + ''));

app.get('/showboxImgs', function(req, res){
    res.json({
        images:['img/img_feature_03_2.jpg','img/img_feature_03_4.jpg','img/img_feature_03_5.jpg','img/img_feature_03_6.jpg']
    });
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});