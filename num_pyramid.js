var sp=' ';
var i;
var j;
var n=20;
var num;
for (i=1; i<=n; i++)
{
  var str=" ";
  num=i;
  for(j=1;j<=n-i;j++)
  {
  str=sp+str+' ';
  }
  for(j=1;j<=i;j++){
    str=str+(' '+num%10);
    num++;
  }
  num-=2;

  for(j=1;j<i;j++)
  {
    str=str+(' '+num%10);
    num--;
  }
  console.log(str);
}