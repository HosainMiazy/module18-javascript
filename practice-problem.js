// display "ajke amar mon valo nei" for 39 times
for(var i = 1; i<=39; i++){
    
    // console.log('ajke amar mon valo nei');
}
//display numbers between 58 to 98
for(var i = 58; i<=98; i++){
    
    // console.log(i);
}

// show all even numbers from 412 to 456
for(var i = 412; i<=456; i+=2){
    
    // console.log(i);
}

// show all odd numbers 591 to 632
for(var i = 591; i<=632; i+=2){
    
    // console.log(i);
}
// create an array show all number
var num = [5,6,5,6,56,5,6,21,5]
var a = num.length
// console.log(a);

// run a loop from 30 to 86. this loop will stop if the values get higher than 44

for(var i=30; i<=86; i++){
    if(i==44){
        // break;
        // continue;
    }
    console.log(i);
    
}
// write the price of the books that you have.Display the prices if the prices is lower than 200
var bookPrice = [234,398,465,45,185,150]
for(var i=0; i<=bookPrice.length; i++){
    var a = bookPrice[i]
    // console.log(a);
    if(a<200){
        // console.log(a);
    }
}

// odd and even number
for(var i=1; i<=7; i++){
    if(i%2==0){
        // console.log(i ,"is even");
    }
    else{
    // console.log(i, "is odd");
}
}
// 1 to 10 namta
for(let i =1; i<=10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let a=1; a<=10; a++){
        // console.log(a);
        // console.log(i+' * '+a+' = '+ i*a);
    }
}