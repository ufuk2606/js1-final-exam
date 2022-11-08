/** +40 Points
 * @Question3
 *
 *  We ask you to generate a random password from the 4 sequences given to you.  @number @alphabetB @alphabetS @symbols
 * 
 *  Randomly select characters from each array and create an 8-character password.
 *  Below are 4 different arrays.
 *  Firstly, select one of these arrays randomly. Then randomly select an item from the selected array. And in this way, create the first character of the password.
 *  Repeat the same process for the remaining 7 characters. (+25 Points)
 *
 *  
 *  You cannot use the same character in consecutive order. (+10 Points)
 *  Abb12=zh   => is not allowed 'bb'
 *  d&F+i-+d   => is allowed
 * 
 *  No other restrictions
 *  
 * Write in the comment line in detail what your code does. (+5 Points)
 * ---------------------------------
 * */    
 const number =["0","1","2","3","4","5","6","7","8","9"]
 const alphabetU= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const alphabetL= ["a","b","c","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 const symbols= ["/","(",")","=","*","-","%","&","!","+",":","½"];
 let passwordLength = 8;
 let password = "";

  /* write your code here  */

  /**
   * Since each array will be randomly selected, I assigned 4 arrays to 1 array, then looped it.
   * In the second loop, I generated random numbers as long as the length of each array and selected elements accordingly.
   * If this selected element is the same as the previous character, I selected the next element and added it.
   */
  const newArr = [number, alphabetU, alphabetL, symbols];
  for (let index = 0; index < 8; index++) {
    let randomlyNumber = Math.floor(Math.random()*4) ; 
    for (let j = 0; j < 1; j++) {
      let randomlyNumber2 = Math.floor(Math.random()*newArr[randomlyNumber].length) ; 
      if (password.charAt(password.length-1) !== newArr[randomlyNumber][randomlyNumber2]) {
        password += newArr[randomlyNumber][randomlyNumber2];
      }else{
        password += newArr[randomlyNumber][randomlyNumber2+1];
      }
    }
  }
/* write your code here */
/* Result  Use the random functıon 'Math.random()' to choose the array below. Then select the character from that array.  */

console.log(`Generated password`);
console.log(`-------------------------`);
console.log(password);
