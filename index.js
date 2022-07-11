// 1.Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript
function max(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}

console.log("Tha maximum of 20 and 10 is: " + max(5, 10));


// 2.Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(first, second, three) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > three) {
        return second;
    }
    else {
        return three;
    }
}

console.log("maximum in 5,4 and 44 is: " + maxOfThree(5, 10, 15));


// 3.Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(vowel) {
    if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
        return true;
    } else {
        return false;
    }
}

console.log("a is vowel: " + isVowel('a'));
console.log("b is vowel: " + isVowel('b'));




// 4.Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
const arr = [1, 2, 3, 4];
let mul = 1;
let total = 0;
function multiply(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        mul = mul * arr[i];
    }
    return mul;
}

// sum of the array
function sum(arr2) {
    for (let i = 0; i < arr2.length; i++) {
        total = total + arr[i];
    }
    return total;
}

console.log("Sum of array is: " + sum(arr));
console.log("mul of array is: " + multiply(arr));


// 5.Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}

console.log("reverse is of jag testar is: " + reverse("jag testar"));


//6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
const words = ["abc", "bcdef", "abcdefgh", "abcdefghijklm", "a"];
function findLongestWord(words) {
    let maxWordLen = words[0].length;
    for (let i = 1; i < words.length; i++) {
        let currWordLen = words[i].length;
        if (currWordLen > maxWordLen) {
            maxWordLen = currWordLen;
        }
    }
    return maxWordLen;
}

console.log("Max word length in array is: " + findLongestWord(words));


//7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(wordsArr, j) {
    let filterArray = [];
    for (let i = 0; i < words.length; i++) {
        let currWordLen = words[i].length;

        if (currWordLen > j) {
            filterArray.push(wordsArr[i]);
        }
    }
    return filterArray;
}

console.log("filter array is: " + filterLongWords(words, 7));

// 8.Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:
// a.  multiply each element by 10; 

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
document.writeln(b.toString() + "<br/>");

// b. return array with all elements equal to 3; 
const c = a.filter(function (elem, i, array) {
    return elem == 3;
});
document.writeln(c.toString() + "<br/>");

//c. return the product of all elements;
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
document.writeln(d + "<br/>");