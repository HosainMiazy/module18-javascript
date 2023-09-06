// for(var i=0; i<=20; i++){
//     console.log(i);
//     if(i>5){
//         break;
//     }
// }

var num = [56,14,65,23,22,55,80]
for(var i=0; i<num.length; i++){
    var count = num[i];
    // console.log(count);
    if(count>50){
        // break;
        continue;
    }
    console.log(count);
}