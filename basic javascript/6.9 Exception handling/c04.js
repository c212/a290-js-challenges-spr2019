function processNumbers(numList) { // Code will be tested with different values of numList
   var result = 0;
   
   if (numList.length < 4) throw new Error("Array has less than 4 elements");

   for (var index = 0; index < numList.length; index++) {
      if (numList[index] < 0) throw new RangeError("Number less than 0");
      result += numList[index] * 1.3 * index;
   }

   return result;
}
