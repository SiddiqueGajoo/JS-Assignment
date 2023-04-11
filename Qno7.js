function getobj (key){
    let objstring = localStorage.getItem(key);
    let Object = JSON.parse(objstring);
    return Object;
    }
    let MyObj = getobj("Mykey");
    console.log(MyObj.name);
    console.log(MyObj.RollN0);