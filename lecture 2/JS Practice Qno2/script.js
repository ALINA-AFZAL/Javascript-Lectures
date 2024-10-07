/*Qno2 : write a code which can give grades to students according to their scores:
.90 _ 100, A
.70 _ 89, B
.60 _ 69, C
.50 _ 59, D
.0 _ 49, F */

let score = prompt("Write your marks to find your grades:");

if ( score >= 90 && score <=100 ){
    console.log(" According to your score, your grade is 'A' ");
} else if ( score >= 70 && score <= 89){
    console.log(" According to your score, your grade is 'B' ");
} else if ( score >= 60 && score <= 69){
    console.log(" According to your score, your grade is 'C' ");
} else if ( score >= 50 && score <= 59){
    console.log(" According to your score, your grade is 'D' ");
} else if ( score >= 0 && score <= 49){
    console.log(" According to your score, your grade is 'F' ");
}  