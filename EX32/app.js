//!
//*  *//
//!

function calc(...Numbers) {
    result = 0;
        for (let i = 0; i < Numbers.length; i++) {
            result += Numbers[i];
        }
    console.log(result);
}

calc(1,4,7,2,6,4,8,1,7,0,4)