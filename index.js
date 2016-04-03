var gm = require('gm');

gm.prototype.toBase64 = function(format, callback) {
  this.stream(format, function(err, stdout) {
    var buf = '';
    if (err) {
      return callback(err);
    }
    stdout
      .on('data', function(data) {
        buf += data.toString('binary');
      })
      .on('end', function() {
        var buffer = new Buffer(buf, 'binary');
        callback(null, buffer.toString('base64'));
      });
  });

  return this;
};
