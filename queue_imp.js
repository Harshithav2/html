var rear = -1;
var front=0;
var a = [];
var max = 100;
//function to insert
function insert(num){
  if(rear=== max-1){
    console.log("Oops!! queue is full");
  }
  else{
    a[++rear]=num;
    console.log("Item pushed to the queue are "+num);
  }
}
//function to delete from queue
function delet()
{
  if(front==rear+1)
  {
    console.log("Oops!! there is nothing in the queue")
  }
  else{

    var num = a[front++];
    console.log("Element is deleted from the queue is "+num)
    return num;
  }
}
//function to display
function display()
{
  if(front==rear+1)
  {
    console.log("Oops!! there is nothing in the queue to display");
  }
  else{
    console.log("queue elements are");
    for(var i = front; i <=rear; i++) {

      console.log(a[i]);
    }
  }
}
//function calls
insert(10);
display();
insert(20);
insert(30);
delet();
display();