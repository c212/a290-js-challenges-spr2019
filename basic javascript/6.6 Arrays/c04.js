var origArray = [ 40, 50, 60, 70 ]; // Tests will use different arrays
var offsetAmount = [ 2, 5, 8, 4 ]; // Tests will use different arrays
var destinationArray = [];

for (var i = 0; i < origArray.length; i++) {
   destinationArray.push(origArray[i] / offsetAmount[i]);
}
