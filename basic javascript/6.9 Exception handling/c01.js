function processNumbers(toProcess) { // Code will be tested with different values of toProcess
   var result = 0;

   for (var index = 0; index < toProcess.length; index++) {
      
      if (isNaN(toProcess[index])) {
         throw "Found an element that is not a number.";
      }
      
      result += toProcess[index] * 1.3 * index;
   }

   return result;
}
