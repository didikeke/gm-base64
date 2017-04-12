var gm = require('gm');

gm.prototype.toBase64 = function(format, toDataUri, callback) {
  if(typeof toDataUri == 'function') {
    callback = toDataUri;
    toDataUri = undefined;
  }

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
        var result = buffer.toString('base64');
        if(toDataUri) {
          result = "data:image/" + format + ";base64,"  + result;
        }

        callback(null, result);
      });
  });

  return this;
};
