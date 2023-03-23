// Code your solutions in this file
//created afunction countdown with Parameter num
function countDown(num) {
  //in the while loop expression the num should be greater or equal to zero  
  while (num >= 0) {
    console.log(num);
    num--;//decrement operator
  }
}
countDown(10)//then we called the function

//just for the fun of it
function count(x) {
    for (let i = x; i >= 0; i--) {
      console.log(i);
    }
  }
  count(10);