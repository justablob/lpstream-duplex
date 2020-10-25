# lpstream-duplex

`lpstream-duplex` provides a length-prefixed Duplex stream.
Based on:
  - `duplexify` by mafintosh: https://github.com/mafintosh/duplexify
  - `length-prefixed-stream` by mafintosh: https://github.com/mafintosh/length-prefixed-stream

### Installation

```
# npm
npm i lpstream-duplex

# yarn
yarn add lpstream-duplex
```

Typescript declarations are provided.

### License and Credits

Licensed under MIT. All credits go to [mafinstosh](https://github.com/mafintosh), they are responsible for all the important code here.

## Usage

One good use for this module would be to encode messages that will be sent over TCP, which might fragment the data. You would use `lpstream-duplex` around an existing `net.Socket`.

Some example code:
```js
const Lpsd = require("lpstream-duplex");

const lpsd = new Lpsd(inputStream);

// It's just a Duplex stream, you know how to use it.
```