//Number 1
document.querySelector('.grpname').innerHTML = " ATHENA"
document.querySelector('.grpname').style.color = 'Blue'
    
//Number 2
let teamMembers = [ 'Toba', 'Emmanuel', 'Obumneme', 'Jhenna', 'Mikems', 'Shytemi', 'Korex'];
console.log (teamMembers[1]);

//Number 3
let personalDetails = {
    firstName : "Emmanuel",
    lastName : "Chima",
    bestMovie : '13 Hours, The Secret Soldiers of Benghazi',
    complexion : 'Fair',
    birthMonth : 'November',
    state : 'Ebonyi',
    groupName : 'Athena'
}
console.log (personalDetails['bestMovie']);

//Number 4
let noun = 'Dog';
let verb = 'killed';
let adjective = 'swiftly';
console.log ('The ' + noun + ' ' + verb + ' the cat ' + adjective + '.');
console.log ('The ' + noun + ' and the cat ' + verb + ' the Rat.');
console.log ('The ' + noun + ' ran ' + adjective + '.');
console.log ('The ' + noun + ' ' + verb + ' the cat ' + adjective + ' and also ran away and ' + verb + " his owner." );
console.log ('The ' + noun + ' runs ' + adjective + '!');

//Number 5
function remainder(x, y) {
   console.log (x % y);
}
remainder(7, 2);

//Number 6 
let root1
let root2
function solve(a,b,c) {
    let numerator = b * b - (4 * a * c);
    if (numerator > 0) {
        root1 = (-b + Math.sqrt(numerator)/(2 * a));
        root2 = (-b - Math.sqrt(numerator)/(2 * a)); 
        console.log (root1, root2);
    }   
    else if (numerator < 0) {
        root1 = (-b + Math.sqrt(numerator)/(2 * a));
        root2 = (-b - Math.sqrt(numerator)/(2 * a)); 
        console.log (root1, root2);
    }    
}

solve(2,9,4);


//Number 7
const myNoun = 'dog';
const myAdjective = 'big';
const myVerb = 'quickly';
const wordBlanks = 'My ' + myNoun + ' is ' + myAdjective + ' and runs ' + myVerb + '.';
console.log (wordBlanks);

//Number 8 
const pi = 3.142;
function findArea (r) {
    const area = (pi * r * r);
    return area;
}
const area = findArea(9)
console.log (area.toFixed(2));

//Number 9
const capital = 8200;
const time = 2.5;
const rate = 17.5;
const simpleInterest = (time * rate * capital)/100;
console.log (simpleInterest);

//Number 10
const answer = 10 % 4;
console.log (answer.toFixed(2));

//Number 11
let merit = {
    mass : 78,
    height : 1.69
}
let nutJob = {
    mass: 92,
    height : 1.95
}
const meritBMI =  merit.mass/(merit.height * merit.height);
const nutJobBMI =  nutJob.mass/(nutJob.height * nutJob.height);
console.log (meritBMI.toFixed(2));
console.log (nutJobBMI.toFixed(2));
if (meritBMI > nutJobBMI) {
    console.log ('True')
}
else {
    console.log ('False')
}


