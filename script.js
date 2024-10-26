//                                                              -:  LOOPS  :-

// FOR LOOP:
// Print 1 to 5 : 
// for( let i = 1 ; i <= 5 ; i++){
//     console.log("i = " + i);
// }


// Calculate sum of 1 to 5
// let sum = 0;

// for ( let i = 1 ; i <= 5 ; i++){
//     sum = sum + i;
// }
// console.log("sum = " + sum);

// WHILE LOOP :
// let i = 1;
// while( i <= 10 ){
//     console.log("Apna College");
//     i++;
// }

// DO-WHILE LOOP :

// let i = 1;
// do{
//     console.log("Apna College");
//     i++;
// } while( i <= 10 );

//FOR-OF LOOP :
// let str = "Javascript";
// let size = 0;

// for( let val of str){
//     console.log("i = " + val);
//     size++;
// }
// console.log("String size = " + size);

// FOR-IN LOOP :
// let student = {
//     name: "Alina Afzal",
//     age: 19,
//     cgpa: 7.5,
//     isPass: true,
// };

// for ( let key in student){
//     console.log("key= " + key, " value = ", student[key]);
// }


//                                                                  -: STRINGS :-

// let str = "Apna College";
// console.log(str[3]);

// Template Literals :
// let specialString = `This is a template literal`;
// console.log(typeof specialString);

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let outPut = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(outPut);

// let str= "Apna\tCollege";
// console.log(str.length);

// STRING METHODS/FUNCTIONS IN JS :
// let str = "alina afzal";
// str = str.toUpperCase();
// console.log(str);

// let str = "alina afzal";
// str = str.toLowerCase();
// console.log(str);

// let str = "  alina afzal   ";
// str = str.trim();
// console.log(str);

// let str = "hello";
// console.log(str.slice(0 , 3));

// let str1 = "Alina";
// let str2 = "Afzal";

// let res = str1.concat(str2); // str1 + str2
// console.log(res);

// let str = "hello";
// console.log(str.replace("lo", "p"));

// let str = "helololo";
// console.log(str.replaceAll("lo", "p"));

// let str = "i love JS ";
// console.log(str.charAt(3));