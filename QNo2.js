let Arr = [1,2,3,4,5];
function search (arr,val){
 
     if (arr.length===0){
    return false;
     }else if (arr[0]===val) {
        return true;
     }
    return search(arr.slice(1),val);
    }
    
  console.log(search(Arr,7));