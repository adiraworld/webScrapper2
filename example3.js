var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://test:1234@adiraworld.ddns.net:27017/exam1');
db.on('error', console.error.bind(console, 'connection error:'));
console.log('db.on');
db.once('open', function (callback) {
  // yay!
  var newBestArticleSchema = new mongoose.Schema({
    createdAt: Date,
    title: String,
    hit: Number,
    from: String
  });

  var newBestArticleModel = mongoose.model('newBestArticle', newBestArticleSchema);
  var instance = new newBestArticleModel();

  instance.createdAt = new Date();
  instance.title = '빠른 사진';
  instance.hit = 30;
  instance.from = 'SlrClub';

  console.log('create Model');

  instance.save(function(err, obj){
    console.log('instance save');
    if(err){
      throw err;
    }
    else {
        db.close();
    }
  });
});
console.log('db.open');
