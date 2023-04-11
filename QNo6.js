function saveobj (key, object){
let objstring = JSON.stringify(object);
localStorage.setItem(key,objstring);
}
let MyObj = {
    name: "Siddique",
    RollN0:38
};
saveobj("Mykey",MyObj);