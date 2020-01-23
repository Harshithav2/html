var n=4
for (var i=0; i<n; i++)
{
  var str=" ";
  for(var j=1;j<n-i;j++)
  {
  str=str+" ";
  }
  for (var k=1; k<=(i+1); k++ )
  {
    str=str+"| ";
  }
  console.log(str);
}