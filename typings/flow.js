// @flow
declare type Dimensions = {| width: number, height: number |};

declare module.exports: ({|
  objectDimensions: Dimensions,
  areaDimensions: Dimensions,
|}) => Dimensions;
