var arr_max = 6;
var top = -1;
var array_stack = [];
//push function to push element to the stack
function push(x) {
  if (top >= arr_max - 1) {
    console.log("Stack overflow");
  }
  else {
    array_stack[++top] = x;
    console.log("Item pused to the stack is "+x);
  }
}
//pop function to pop element from stack
function pop() {
  if (top < 0) {
    console.log("Oops!! there is nothing in the stack to pop");
  }
  else {
    x = array_stack[top];
    top = top - 1;
    console.log("Item poped is " + x);
  }
}
//display function to display all the elements in the stack
function display() {
  if (top < 0) {
    console.log("Oops!! there is nothing in the stack to display");
  }
  else {
    console.log("queue elements are")
    for (var i = top; i >= 0; i--) {
      console.log(array_stack[i]);
    }
  }
}
//function calls
push(5);
push(10);
push(15);
push(20);
display();
pop();
display();