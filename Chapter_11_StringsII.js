// separate a string sentence into an array of words

function StringtoWordArray(string){
   var wordArr = string.split(" ")
   console.log(wordArr)
}

// StringtoWordArray("life is not a drill!")

function ReverseWordOrder(string){
   var wordArr = string.split(" ")
   
   for(var i = 0; i < Math.floor(wordArr.length / 2); i++){
       var temp = wordArr[i]
       wordArr[i] = wordArr[wordArr.length - 1 - i]
       wordArr[wordArr.length - 1 - i] = temp;
   }
   
   console.log(wordArr)
}

// ReverseWordOrder("life is not a drill!")

//find longest word in sentence string

function LongestWord(string){
    var wordArr = string.split(" ")
    var longest = wordArr[0]
    
    for(var i = 1; i < wordArr.length; i++){
        if(wordArr[i].length > longest.length){
            longest = wordArr[i];   
        }
    }
    console.log(longest);
    return longest;
}

// LongestWord("snap crackle pop makes the world go round")

//Unique words retain words that only occurr once

function UniqueWords(string){
    var wordArr = string.split(" ")
    var unique = []
    for(var i = 0; i < wordArr.length; i ++){
        var count = 0;
        for(var x = 0; x < wordArr.length; x++){
            if(wordArr[i] == wordArr[x]){
                count++
            }
        }
         if(count < 2){
            unique.push(wordArr[i])
        }
    }   
    console.log(unique);
    return unique;
}
// UniqueWords("Sing a song! Sing a song; loud; sing")

function RotateString(string, times){
    var newstring = "";

    for(var i = 1; i <= times; i ++){

    }
}




//given 2 strings, remove letters that are in seconds string from first string

function BadCharacters(str1, str2){
    var arr1 = str1.split("")
    var arr2 = str2.split("")
    var arr3 = []

    for(var i = 0; i < arr1.length; i ++){
        var flag = false;
        for(var x = 0; x < arr2.length; x++){
            if(arr1[i] == arr2[x]){
                flag = true;
            }
        }
        if(flag == false){
            arr3.push(arr1[i])
        }
    }
    var str3 = arr3.join("")
    console.log(str3)
    return str3
}

// BadCharacters("funny", "unn")


// function Censor(string, bad){
//     var arr1 = string.split("")
//     var bad1 = bad.split("")
    
//     for(var i = 0; i < arr1.leght; i++){
        
//         for(var x = 0; x < bad1.length; x ++)
//     }
// }

function dedupe(string){
    var newstring = ""

    for(var i = 0; i < string.length; i++){
        var count = 0;
        for( var x = i+1; x < string.length; x++){    
            if(string[i] == string[x]){
                count++
            }
        }
        if(count == 0){
            newstring += string[i]
        }
    }
    console.log(newstring);
    return newstring;
}

// dedupe("Snaps! crackles! pops!")

function indexOfFirstUniqueLetter(string){
    
    for(var i = 0; i < string.length; i++){
        var count = 0;
        for(var x = 0; x < string.length; x++){
            if(string[x] == string[i]){
                count++
            }
        }
        if(count == 1){
            console.log(i + " is string index of " + string[i] )

        }
    }
}

// indexOfFirstUniqueLetter("empathetic monarch meets primo stinker")



function indexOfFirstUniqueLetter(string){
    
    for(var i = 0; i < string.length; i++){
        var count = 0;
        for(var x = 0; x < string.length; x++){
            if(string[x] == string[i]){
                count++
            }
        }
        if(count == 1){
            console.log(i + " is string index of " + string[i] )

        }
    }
}


//are strings interleaved

function areInterleaved(str1, str2, str3){
    var check1 = 0 
    var check2 = 0

    for(var i = 0; i < str3.length; i++){
        if(i % 2 === 0){
            if(str3[i] == str1[check1]){
                check1++;
            }else{
                console.log(false);
                return false;
            }
        }else{
            if(str3[i] == str2[check2]){
                check2++;
            }else{
                console.log(false);
                return false;
            }
        }
    }
    console.log("is interleaved");
    return true;
}

// areInterleaved("dne", "ail", "daniel")

function AllLooseInterleaved(str1, str2){
    var str3 = "";
    var arr = [];

    str3 = str3 + str1 + str2;
    arr.push(str3);
    str3 = "";

    str3 = str3 + str2 + str1;
    arr.push(str3)
    str3 = "";

    for(var i = 0; i < str1.length; i++){
        str3 += str1[i];
        str3 += str2[i];
    }
    arr.push(str3)
    str3 = "";

    for(var i = 0; i < str1.length; i++){
        str3 += str2[i];
        str3 += str1[i];
    }
    arr.push(str3)
    str3 = "";
    console.log(arr);
    return arr;

}

// AllLooseInterleaved("ab", "yz")

//encode

function encode(string){
    var encode = "";
    var lastone = "";
    

    for(var i = 0; i < string.length; i++){
        var count = 0;
        if(string[i] != lastone){
            encode += string[i];
            for(var x = 0; x < string.length; x++){
                if(string[x] == string[i]){
                    count++;
                }
            }
        encode += count.toString()
        }
        lastone = string[i]
        
    }
    console.log(encode);
    return encode;
}
// encode("aaabbcddd")

function decode(code){
    var string = "";

    for(var i = 0; i < code.length; i++){
        if(i % 2 != 0){
            var num = parseInt(code[i])
            var x = 1;
            while(x <= num){
                string += code[i-1]
                x++;
            }
        }
    }
    console.log(string);
    return string;
}

// decode("a3b2c1d3")