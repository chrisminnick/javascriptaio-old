const metricConversions = require('./metricConversions');

exports.convertToMetric = (value, unit) => {
  switch (unit) {
    case 'in':
      return metricConversions.inchesToCentimeters(value);
    case 'ft':
      return metricConversions.feetToCentimeters(value);
    case 'yd':
      return metricConversions.yardsToMeters(value);
    case 'mi':
      return metricConversions.milesToKilometers(value);
    default:
      return value;
  }
};
