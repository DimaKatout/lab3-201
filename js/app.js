
'use strict'
var name = prompt('what is your name ?', 'Dima');
alert('welcome ' + name);

var q1 = prompt('do i have a cat ? ');
console.log(q1);
while (q1 === '') 
   { alert('please awnser with yes or no ');
    var q1 = prompt('do i have a cat ? ');}
if (q1.toUpperCase() === 'Y' || q1.toUpperCase() === 'YES') 
{ alert('you got it right '); }
else if (q1.toUpperCase() === 'N' || q1.toUpperCase() === 'NO')
 { alert('you got it wrong '); }


/*while (q1 === '') {
    alert('please awnser with yes or no ');
    var q1 = prompt('do i have a cat ? ');
}
*/
    
else
{
    alert('please awnser with yes or no ');

    var q1 = prompt('do i have a cat ? ');
    console.log('first try',q1);
    while ( q1.toUpperCase() === 'Y' || q1.toUpperCase() === 'YES'||q1.toUpperCase() === 'N' || q1.toUpperCase() === 'NO') 
    {
        var q1 = prompt('do i have a cat ? ');
        console.log('mskms',q1);

    
    if (q1.toUpperCase() === 'Y' || q1.toUpperCase() === 'YES') 
    { alert('you got it right ');
break; }
    else if (q1.toUpperCase() === 'N' || q1.toUpperCase() === 'NO')
 { alert('you got it wrong ');
break; }


    }

}


var q2 = prompt('do i have a phobia from dogs ? ');
console.log(q2);
if (q2.toUpperCase() === 'Y' || q2.toUpperCase() === 'YES') { alert('you got it right '); }
else if (q2.toUpperCase() === 'N' || q2.toUpperCase() === 'NO') { alert('you got it wrong '); }
else {
    alert('please awnser with yes or no ');
    var q2 = prompt('do i have a phobia from dogs ? ');
}

var q3 = prompt('is blue my favarite color ? ');
console.log(q3);
if (q3.toUpperCase() === 'Y' || q3.toUpperCase() === 'YES') { alert('you got it wrong '); }
else if (q3.toUpperCase() === 'N' || q3.toUpperCase() === 'NO') { alert('you got it right '); }
else {
    alert('please awnser with yes or no ');
    var q3 = prompt('is blue my favarite color ? ');

}

var q4 = prompt('do i own a car ? ');
console.log(q4);
if (q4.toUpperCase() === 'Y' || q4.toUpperCase() === 'YES') { alert('you got it wrong .. '); }
else if (q4.toUpperCase() === 'N' || q4.toUpperCase() === 'NO') { alert('you got it right '); }
else {
    alert('please awnser with yes or no ');
    var q4 = prompt('do i own a car ? ');

}


var q5 = prompt('am i a Gemeni person ? ');
console.log(q5);
if (q5.toUpperCase() === 'Y' || q5.toUpperCase() === 'YES') { alert('you got it right '); }
else if (q5.toUpperCase() === 'N' || q5.toUpperCase() === 'NO') { alert('you got it wrong '); }
else {
    alert('please awnser with yes or no ');
    var q5 = prompt('am i a Gemeni person ? ');

}

var q6 = prompt('guess a number between 1 and 20...');
for (var i = 0; i < 3; i++) //number is 12
{
    if (q6 < 12) {
        alert('lower than the number');
        var q6 = prompt('guess a number between 1 and 20...');
    }
    else if (q6 > 12) {
        alert('higher than the number');
        var q6 = prompt('guess a number between 1 and 20...');
    }
    else if (q6 === 12) {
        alert('yes you got it right');
        break;

    }
    else {
        alert('enter a number between 1 and 20');
        var q6 = prompt('guess a number between 1 and 20...');


    }
}
alert('the number is 12');

//avoiding null values https://stackoverflow.com/questions/20533127/detect-empty-value-on-prompt