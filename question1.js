/**  (25 points)
 * @Question1
 *
 * We have defined two arrays named @numberList1 and @numberList2 .
 *
 * We want you to find the numbers common to both arrays.
 *
 * You need to add the numbers you find to the array named @commonNumberinBothList . +15 points
 *
 * If you want to get full points for this question, you must not add the numbers common to both lists to @commonNumberinBothList twice. +10 points
 *
 *
 * The output should look like this;
 * ---------------------------------
[
  18,  3,  6, 8, 19, 13, 14,
   2, 16, 15, 9, 12,  0,  1,
  20,  5, 10, 7, 11, 17
]
 * */

const numberList1 = [
    18, 3, 6, 8, 19, 4, 3, 13, 13, 8, 13, 14, 2, 19, 16, 4, 15, 9, 4, 12, 6, 9, 0,
    8, 8, 1, 13, 6, 15, 4, 20, 5, 14, 4, 9, 10, 9, 7, 8, 15, 9, 14, 13, 3, 19, 16,
    8, 19, 18, 11, 2, 7, 14, 6, 8, 5, 13, 9, 6, 10, 17, 13, 10, 14, 3, 20, 3, 6,
    5, 2, 13, 6, 19, 17, 18, 10, 11, 15, 6, 1, 10, 7, 11, 5, 11, 12, 8, 6, 16, 5,
    4, 12, 3, 6, 16, 19, 1, 19, 17, 12,
  ];
  const numberList2 = [
    13, 20, 13, 7, 11, 5, 6, 2, 8, 10, 11, 8, 5, 17, 6, 12, 16, 2, 14, 10, 16, 16,
    10, 7, 17, 18, 9, 9, 11, 7, 8, 18, 14, 18, 18, 18, 8, 5, 0, 15, 2, 13, 19, 2,
    5, 2, 13, 0, 5, 7, 20, 14, 10, 9, 0, 3, 5, 9, 8, 14, 10, 18, 3, 12, 3, 6, 5,
    16, 11, 10, 10, 11, 8, 2, 15, 11, 2, 6, 1, 6, 9, 0, 6, 19, 1, 15, 14, 9, 9,
    13, 18, 6, 11, 16, 5, 9, 15, 18, 13, 5,
  ];
  const commonNumberinBothList = [];
  
  
  /* write your code here  */
  
  /**
   * Compares the elements of the first array and the second array. 
   * If this element is not in the newly created array, this number will be added to that array.
   * */ 
  for (let number1 = 0; number1 < numberList1.length; number1++) {
    for (let number2 = 0; number2 < numberList2.length; number2++) {
      if (numberList1[number1]  === numberList2[number2]  && !commonNumberinBothList.includes(numberList1[number1])) {
        commonNumberinBothList.push(numberList1[number1]);
      }
    }
  }
  /* write your code here */
  
  /* Result */
  
  console.log(`Numbers in the First List`);
  console.log(`-------------------------`);
  console.log(numberList1);
  console.log(`Numbers in the second List`);
  console.log(`--------------------------`);
  console.log(numberList2);
  
  console.log(`List of numbers common to both lists`);
  console.log(`------------------------------------`);
  console.log(commonNumberinBothList);
  