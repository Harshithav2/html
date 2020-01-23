var f;
var i;
var n=5;
var val1;
var val2;
var j;
var k;

function factorial(num){
  for( f=1;num>1;num--)
  {
    f*=num;
  }
  return f;
}
function ncr(val1,val2){
  return factorial(val1) / ( factorial(val1-val2) * factorial(val2) );
}
for (i=0; i<=n; i++)
{
  var str=" ";
  for( j=0;j<=n-i;j++)
  {
  str=str+" ";
  }
  for(j=0;j<=i;j++)
  {
    str=str+ncr(i,j)+" ";
  }
  console.log(str);
}