let q = [1, 3, 2];

function minimumBribes(q) {
    // Write your code here

    // Create my variables
    let num = 0; // Used to track bribe count
    let chaotic = false; //Used to track chaotic

 /* 
 i = 2, as long as i is greater or equal to zero, keep looping.
 
 If we subtract the value of the array position from the array position we can calculate invalid bribes (any element with bribes>3) 
 */
    for (let curVal = q.length - 1; curVal >= 0; curVal--) {
        if (q[curVal] - curVal > 3) chaotic = true;

        // console.log(curVal, q[curVal] - 2);
        for (let preVal = q[curVal] - 2; preVal < curVal; preVal++) {
            if (q[preVal] > q[curVal]) {
                //console.log(q.indexOf(q[preVal]), preVal);
                num++;
            }
        }
    }
    if (chaotic) {
        console.log(`Too chaotic`);
    } else {
        console.log(num);
    }
}

let result = minimumBribes(q);

//console.log(result);