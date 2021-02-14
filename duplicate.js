var num = [1,3,4,5,1,3,4,7,8,0,7,8];
var uniqueName = [];

for(var i=0; i <num.length, i++){
    var element = num[i];
    var index = uniqueName.indexOf(element);
    if (index==-1){
        uniqueName.push(element);

    }

}
console.log(uniqueName);