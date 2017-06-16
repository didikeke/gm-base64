# gm-base64

A plugin for gm node module, which converts img to base64 string

## Installation

    $ npm install gm-base64

## Usage

With DataUri:

```
var gm = require('gm');
require('gm-base64');

var toDataUri = true;
gm('a.jpg')
  .resize(384)
  .toBase64('bmp', toDataUri, function(err, base64){
    console.log(base64);
  });

```


Without DataUri:
```
var gm = require('gm');
require('gm-base64');

gm('a.jpg')
  .resize(384)
  .toBase64('bmp', function(err, base64){
    console.log(base64);
  });

```

## License

[The MIT License](http://opensource.org/licenses/MIT)
