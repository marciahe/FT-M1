'use strict';

function BinarioADecimal(num) {
   var array = String(num).split("").map((num)=>{
      return Number(num)
    })

   var counter = 0;
   var newArray = [];
   
   for (let i = array.length - 1; i > -1; i--) {
      const element = array[i];
      if (element === 1) {
         var pow = Math.pow(2, counter);
         newArray.push(pow);
      }
      counter += 1;
   }

   var decimal = newArray.reduce((a, b) => a + b, 0);
   return decimal;
}

function DecimalABinario(num) {
   
   var workingNumber = num;
   var array = []; 

   while (workingNumber >= 1) {
      if (workingNumber % 2 === 0) {
         array.push(0);
      }else{
         array.push(1);
      }
      workingNumber = Math.floor(workingNumber/2);
      console.log(workingNumber);
   }
   array.reverse();

   return array.join('');
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

