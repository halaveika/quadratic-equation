module.exports = function solveEquation(equation) {
  //finding possition of multiplications
  first = equation.indexOf('*');
  second = equation.indexOf('*',first+1);
  // cut substrings from 'A * x^2 - B * x + C'
  const A=equation.substring(0,first-1);
  const SIGN1=equation.substring(first+6,first+7);
  const B=SIGN1 + equation.substring(first+8,second-1);
  const SIGN2=equation.substring(second+4,second+5);
  const C=SIGN2 + equation.substring(second+6);
  //find X1, X2 as integer
  const X1=parseInt(String((-Number(B)+Math.sqrt(Number(B)**2-4*Number(A)*Number(C)))/(2*Number(A))*1000000000)/999999999);
  const X2=parseInt(String((-Number(B)-Math.sqrt(Number(B)**2-4*Number(A)*Number(C)))/(2*Number(A))*1000000000)/999999999);
  let solutions = new Array(2);
  //recording to array in order
  X1 <= X2 ? solutions=[X1, X2] : solutions=[X2, X1];
return solutions;
}


