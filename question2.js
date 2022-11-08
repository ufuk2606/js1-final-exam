/** 30 Points
 * @Question2
 *We want you to create a mail address from the values in the given array. 
 *First name, last name and registration number are listed sequentially (every 3 elements).
 *
 * 
 *Example:
 * ---------------------------------
    MEHMET DOGAN 5689
    CHARLES BUKOWSKI 1490
    CHARLES DICKNES 1200
    JHON DOE 1900   
 *
 * We want you to lowercase the first letter of the first name, the first two letters of the last name and the first 3 values of the registration number and add "@hicoders.ch" at the end.
 * 
 * Example :
 * ---------------------------------
    Mehmet -> M
    Dogan -> DO
    5689 -> 568
    mdo568@hicoders.ch
 * 
 *We want you to add this mail address to the array named @emails . (+25 Points)
 * 
 * Write in the comment line in detail what your code does. (+5 Points)
 * The output should look like this;
 * ---------------------------------
[
  'mdo568@hicoders.ch',
  'cbu149@hicoders.ch',
  'cdi120@hicoders.ch',
  'jdo190@hicoders.ch'
]
 * */


let personInfo=["   MEHMET","   DOGAN",5689,"CHARLES"," BUKOWSKI",1490,"    CHARLES","DICKNES",1200," JHON","   DOE",1900]
let emails=[];

/* write your code here  */

/**
 * I convert all the elements of the array to string then i remove the spaces and convert it to lowercase.
 * Since all three elements belong to one mail, I put it in a loop.
 * I took the relevant sections and sent them to the e-mail.
 */
let mail ;
let counter = 0 ;
for (let index = 0; index < personInfo.length; index++) {
   personInfo[index]= personInfo[index].toString().trim().toLocaleLowerCase();
   if (counter === 0) {
      mail = personInfo[index].charAt(0);
      counter ++ ;
   }else if (counter=== 1) {
      mail += personInfo[index].slice(0,2);
      counter ++ ;
   }else if (counter=== 2) {
      mail += personInfo[index].slice(0,3).concat("@hicoders.ch");
      emails.push(mail)
      mail ="";
      counter=0;
   }
}
/* write your code here */

/* Result */


console.log(`List of mail addresses`);
console.log(`-------------------------`);
console.log(emails);

