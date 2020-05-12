'use strict'
/*
var name = prompt('what is your name ?', 'Dima');
alert('welcome ' + name);

var q1 = prompt('do i have a cat ? ');
console.log(q1);
while (q1 === '') {
    alert('please awnser with yes or no ');
    var q1 = prompt('do i have a cat ? ');
}
if (q1.toUpperCase() === 'Y' || q1.toUpperCase() === 'YES') { alert('you got it right '); }
else if (q1.toUpperCase() === 'N' || q1.toUpperCase() === 'NO') { alert('you got it wrong '); }


/*while (q1 === '') {
    alert('please awnser with yes or no ');
    var q1 = prompt('do i have a cat ? ');
}
*/

/*else {
    alert('please awnser with yes or no ');

    var q1 = prompt('do i have a cat ? ');
    console.log('first try', q1);
    while (q1.toUpperCase() === 'Y' || q1.toUpperCase() === 'YES' || q1.toUpperCase() === 'N' || q1.toUpperCase() === 'NO') {
        var q1 = prompt('do i have a cat ? ');
        console.log('mskms', q1);


        if (q1.toUpperCase() === 'Y' || q1.toUpperCase() === 'YES') {
            alert('you got it right ');
            break;
        }
        else if (q1.toUpperCase() === 'N' || q1.toUpperCase() === 'NO') {
            alert('you got it wrong ');
            break;
        }


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
    if (q6 == 12) {
        alert('yes you got it right');
        break;

    }
    else if (q6 < 12) {
        alert('lower than the number');
        var q6 = prompt('guess a number between 1 and 20...');
    }
    else if (q6 > 12) {
        alert('higher than the number');
        var q6 = prompt('guess a number between 1 and 20...');
    }

    else {
        alert('enter a number between 1 and 20');
        var q6 = prompt('guess a number between 1 and 20...');


    }
}
alert('the number is 12');

/*var even = [2, 4, 6, 8, 10, 12, 14, 18];
//var q7= prompt('guess an even number between numbers[1-19]');
   for (var i = 0; i < 5; i++) {
    {

        for (var j = 0; j < even.length; j++) {
            var q7 = prompt('guess an even number between numbers[1-19]');
            if (q7 === even[j]) {
                alert('you got it correct');
                alert('the even numbers between [1-19] are 2,4,6,8,10,12,14,18 ');
                //i=5;

                break;
            }
            else {
                alert('you got it wrong');
            }

        } break;
    }
}
//avoiding null values https://stackoverflow.com/questions/20533127/detect-empty-value-on-prompt
var arr = [2, 4, 6, 8, 10];




    
    
    //console.log(oddNum);
    for (var i = 0; i < 5; i++) {
        {
            
            for (var j = 0; j < arr.length; j++) {
                var oddNum = prompt('guess an even number less than 11 and bigger than zero ');
                console.log(arr[i]);
                console.log(i);
                //console(oddNum);
                if (oddNum == arr[i]) {
                    alert('you got it correct');
                    //sum=sum+1;
                    break;
                }
                else 
                { alert('you got it wrong'); }
            }break;

            

        }

             




    }
    */

    
var sum=0;
alert('welcomee');
var hello = prompt('please enter your name ');
alert('hello ' + hello);


var cat = prompt('do you think i have a phobia from cats ?');
cat = cat.toLowerCase();
console.log(cat);
if (cat == 'n' || cat == 'no')
    {alert('you got it right ');
    sum=sum+1;}
else
    alert('you got it wrong ')

var favCol = prompt('do you think red is my favorite color ');
favCol = favCol.toLowerCase();
if (favCol == 'y' || favCol == 'yes') { alert('you got it correct');
sum=sum+1; }
else { alert('wrong awnser'); }

var age = prompt('do you think i\'m 23? ');
age = age.toLowerCase();
if (age == 'y' || age == 'yes') { alert('you got it right'); 
sum=sum+1;}
else { alert('wrong '); }

var smart = prompt('do you think im smart ');
smart = smart.toLowerCase();
if (smart == 'y' || smart == 'yes') { alert('you got it correct');
sum=sum+1; }
else { alert('noo wrong'); }


var food = prompt('do i love food? ');
food = food.toLowerCase();
switch (food) {
    //hoon ba7ot bel case small letters la2no hala2 kol shi 7ayd5ol 3aliha 7aykon t7awal la small

    case 'y':
    case 'yes':
        {alert('yes you got it correct');
    sum=sum+1;}
        break;

    case 'n':
    case 'no':
        alert('you got it wrong');
        break;
}

for (var i = 0; i <= 3; i++) {
    var num = prompt('guess a number please');
    if (num == 10) {
        alert('bravoooooo');
        sum=sum+1;
        break;
    }



    else if (num > 10) {
        alert('too high');
    }
    else if (num < 10) {
        alert('too low ');
    }
}
alert('the awnser is 10');

var arr = [2, 4, 6, 8, 10];




    
    
    //console.log(oddNum);
    for (var i = 0; i < 5; i++) {
        {
            
            for (var j = 0; j < arr.length; j++) {
                var oddNum = prompt('guess an even number less than 11 and bigger than zero ');
                console.log(arr[i]);
                console.log(i);
                //console(oddNum);
                if (oddNum == arr[i]) {
                    alert('you got it correct');
                    sum=sum+1;
                    break;
                }
                else 
                { alert('you got it wrong'); }
            }break;

            

        }

             




    }
    









alert('you got  ' + sum + '  out of 7');
alert('the possible awnsers is 2 ,4 ,6 ,8 ,10 ');
alert('thank you for visiting ');














