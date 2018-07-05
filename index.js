'use strict';

function calculateRatio(dimensions) {
  return dimensions.width / dimensions.height;
}

module.exports = function fitToArea(options) {
  if (!options || !options.objectDimensions || !options.areaDimensions) {
    throw new TypeError('Expected objectDimensions and areaDimensions');
  }

  const { areaDimensions, objectDimensions } = options;

  if (
    objectDimensions.width <= areaDimensions.width &&
    objectDimensions.height <= areaDimensions.height
  ) {
    return objectDimensions;
  }

  const objectRatio = calculateRatio(objectDimensions);
  const areaRatio = calculateRatio(areaDimensions);
  const scaleTarget = areaRatio > objectRatio ? 'height' : 'width';
  const scaleFactor = areaDimensions[scaleTarget] / objectDimensions[scaleTarget];

  return {
    width: objectDimensions.width * scaleFactor,
    height: objectDimensions.height * scaleFactor,
  };
}
