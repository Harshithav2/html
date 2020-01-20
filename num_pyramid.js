var sp;
var i;
var j;
var n=5;
var num;
for (i=1; i<=n; i++)
{
  var str=" ";
  num=i;
  for(j=1;j<=n-i;j++)
  {
  str=str+" ";
  }
  for(j=1;j<=i;j++){
    str=str+num;
    num++;
  }
  num--;
  num--;
  for(j=1;j<i;j++)
  {
    str=str+num;
    num--;
  }
  console.log(str);
}