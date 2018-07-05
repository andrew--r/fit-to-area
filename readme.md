# @andrew-r/fit-to-area

## Install

```
$ npm install @andrew-r/fit-to-area
```


## Usage

```js
const fitToArea = require('@andrew-r/fit-to-area');

fitToArea({
  areaDimensions: {
    width: 5,
    height: 5,
  },
  objectDimensions: {
    width: 5,
    height: 10,
  },
});
//=> { width: 2.5, height: 5 }
```


## API

```
type Dimensions = {|
  width: number,
  height: number,
|};

fitToArea(options: {|
  areaDimensions: Dimensions,
  objectDimensions: Dimensions,
|}): Dimensions
```

## License

MIT © [Andrey Romanov](https://github.com/andrew--r)
