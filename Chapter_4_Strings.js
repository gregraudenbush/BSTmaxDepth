//remove blank spaces from a string
function RemoveBlanks(string){
    var newstring = "";
    for (var i = 0; i < string.length; i++){
        if(string[i] != " "){
            newstring = newstring + string[i];
        }
    }
    console.log(newstring)
    return newstring
}

// RemoveBlanks("Pl  ayTha  tF   u  nkyM  usi     c")

//checks for integers in substring then converts them to an integer
function GetDigits(string){
    var stringnumbers = "0123456789";
    var newstring = "";
    for (var i = 0; i < string.length; i++){
        if(stringnumbers.includes(string[i]) ){
            newstring = newstring + string[i];
        }
    }
    var newnumber = parseInt(newstring);
    console.log(newnumber);
    return newnumber;
}
// GetDigits("0s1a3y5w7h9a2tf?6!8?0")

//creates a capitalized acronym for a sentence like string

function Acronym(string){
    var newstring = ""
    if(string[0] != " ") {
            newstring = newstring + string[0];
        }
    for (var i = 0; i < string.length; i++){
        if(string[i] == " " && i != string.length - 1) {
            newstring = newstring + string[i + 1];
        }
    }
    var newupper = newstring.toUpperCase();
    console.log(newupper);
    return newupper;
}
// Acronym(" there's no free lunch - gotta pay yer way. ")
// Acronym("live from new yor, it's saturday night!")

//count non space substrings in a string

function CountNonSpaces(string){
    var count = 0;
    for (var i = 0; i < string.length; i++){
        if(string[i] != " "){
            count++;
        }
    }
    console.log(count);
    return count;
}

// CountNonSpaces("Honey pie, you are driving me crazy")

//Remove any string from an array of string that is shorter than a given length

function RemoveShorterStrings(len, strArr){

    for(var i = 0; i < strArr.length; i++){
        if(strArr[i].length < len){
            strArr.splice(i, 1)
        }
    }
    console.log(strArr);
    return strArr;
}

// RemoveShorterStrings(4, ["butt", "arse", "bum", "heynow", "hey"])

//given a string, return it in reverse

function reverseString(string){
    var length = string.length - 1;
    var revstring = "";
    for (var i = 0; i <= length; i ++){
        revstring = revstring + string[length - i];
    }
    console.log(revstring);
    return revstring;
}

// reverseString("happynewyear")

//Given an array of strings, remove all even length strings

function RemoveEvenLengthStrings(strArr){

    var rerun = false;

    for(var i = 0; i < strArr.length; i++){
        
        if(strArr[i].length % 2 == 0){
            strArr.splice(i, 1)
            rerun = true;
        }   
    }
     if(rerun == true){
        return RemoveEvenLengthStrings(strArr) 
    }else{
        console.log(strArr);
        return strArr;
    }
}

// Rema


//Coin change with an obeject

function CoinChangeObject(change){
    var coins = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }

    coins.quarters = Math.floor(change/25);
    change = change - coins.quarters * 25;
    coins.dimes = Math.floor(change/10);
    change = change - coins.dimes * 10;
    coins.nickels = Math.floor(change/5);
    change = change - coins.nickels;
    coins.pennies = change;
    console.log(coins)

}
// CoinChangeObject(45)


//zip arrays into map
function zipArraysToMap(arr1, arr2){
    var map = {}
    for(var i = 0; i < arr1.length ; i++){
        map[arr1[i]] = arr2[i];
    }
    console.log(map);
}

// zipArraysToMap(["abc", 3, "yo"], [42, "wassup", true])

//invert a map, making values the keys and the keys to values

function objectInvert(object){
    var inv = {};
    
    for(key in object){
        inv[object[key]] = key;
       
    }
    console.log(inv)
}

// objectInvert({fun: "pool", dad: "driving"})

//find size/length of an object

function objectSize(object){
    var len = 0;
    
    for(key in object){
        len++
       
    }
    console.log(len)
}

// objectSize({fun: "pool", dad: "driving"})

function Concat(str1, str2, str3){
    str1 = str1 + str2 + str3;
    console.log(str1);
    return str1;
}

// Concat("omg", "lol", "wtf")

function newSlice(string, start, end ){
    if(end == undefined){
        end = string.length;
    }
    newstring = "";

    for(var i = start; i < end; i++){
        newstring += string[i];
    }

    console.log(newstring);
    return(newstring)
}

// new

function newTrim(string){
    var newstring = "";

    for(var i = 0; i < string.length; i ++){
        if(string[i] == " "){
            continue;
        }else if (string[i] == " \ " && string[i+1] == "n" || string[i] == " \ " && string[i+1] == "t" ){
            continue;
        }else{
            newstring += string[i];
        }
    }
    console.log(newstring)

}

newTrim(" \n hello goodbye \t ")