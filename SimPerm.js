function SimPerm(str1, str2){
    var object = {};
    var count = 0;
    for(var i = 0; i < str1.length ; i++){
        object[str1[i]] = false;
    }

    for(var i = 0; i < str2.length ; i++){
        object[str2[i]] = true;
    }

    for(key in object){
        if(object[key] == false){
            console.log(false);
            return false;
        }
        count++;
    }

    if(count != str1.length){
        console.log(false);
        return false;
    }
    
    console.log(true);
    return true;

}

// SimPerm("abc", "cba")

