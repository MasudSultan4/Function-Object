// for (let i = 0; i < 20; i++) {
//     console.log(i);

//     if (i == 12) {
//         break;
//     }
    
    
// }

var numbar = [56,48,69,44,55,110,63,86,95,75]

// for (let i = 0; i < numbar.length; i++) {
//     const numbars = numbar[i];
//     console.log(numbars)
//     if (numbars>100) {
//         break;
//     }

// }

for(var i = 0; i < numbar.length; i++){
    var numbars = numbar[i];
    
    if(numbars > 90){
        continue;
    }
    console.log(numbars)
}