function saveobj (obj){
for(let key in obj){
    localStorage.setItem(key,obj[key]);
}
let savedobj = {};
for(let i =0;i<localStorage.length;i++){
    let key = localStorage.key(i);
    savedobj[key] = localStorage.getItem(key);
}
return savedobj;
};
let MyObj = {
    name: "Siddique",
    RollN0:38
};
let savedobj = saveobj(MyObj);
console.log(savedobj.name);
console.log(savedobj.RollN0);