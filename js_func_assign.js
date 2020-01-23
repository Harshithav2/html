//function that take an argument and returns that
function identify(num){
  return num;
}
console.log(identify(10));
//adding and multiplying two numbers in function and returning the result
function add(num1=1,num2){
  var addition = num1 + num2;
  return addition;
}
var a = add(3,4);
console.log("Addition value of two number "+a);

//multiplication
function mul(num1,num2){
  return num1 * num2;
}
console.log("Multiplication value of two number "+mul(3,4));

//function takes an argument and returns a function that return that argument
function takingArg(num){
  return identify(num);
}
console.log(takingArg(10));

//function that adds from two invocations
function addOne(num1){
  return function addTwo(num2){
      return num1 + num2;
  };
}
console.log(addOne(10)(20));

//function that takes a binary function and makes it callable with two invocation
function applyf(func){
  return function(num1){
    return function(num2){
      return func(num1,num2);
    }
  }
}
console.log("Addition with two invocation "+applyf(add)(4)(5));
console.log("Addition with two invocation "+applyf(mul)(4)(5));

//function that takes a function and an argument, and returns a function that cans supply a second argument
function curry(func,num1){
  return function(num2){
      return func(num1,num2);
  }
}
var add3 = curry(add,9);
console.log("Addition function that takes function and argumnet "+add3(5));
console.log("Multiplication function that takes function and argumnet "+curry(mul,3)(4));

// creating the inc function
var inc = curry(add,1);
console.log("increment type one "+inc(5));
console.log("increment type two "+inc(inc(5)));

//function that converts a binary function to a method
function methodize(funct){
  return function(num){
    return funct(this,num);
  }
}
Number.prototype.add = methodize(add);
console.log("Addition using methodize "+(2).add(5));
//function from binary function will return a unary function that passes as an argument twice
function twice(func){
  return function(num1){
    return func(num1,num1);
  }
}
var double = twice(add);
console.log("double of the passes value "+double(11));
var square = twice(mul);
console.log("square of the passed value "+square(11));

//function taking two unary function and returning unary function
function compose(func,fu){
  return function(num1){
    return fu(func(num1));
  }
}
console.log(compose(double,square)(3));