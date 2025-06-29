/*

the value of this will be define based on how you are calling a function.

const showMessage(){
    console.log("hello world")
    console.log(this)
}

Four way to call a function

1.  showMessage();     // this = window
2.  new showMessage();  // this = newly create object (whenever we call with new keyword)
3.  showMessage.call() or showMessage.apply()    
4. if showMessage function was a key of an object like 
    const obj = {
        showMessage
    }

    then obj.showMessage();    // this = parent object itself





    your js code run or executes in 2 phases
    1. memory allocation 
    2. code running.


    1. execution context is a area in memory where our code executes.
    2. execution context creates when we call/invoke a function and destroyed once the function completes its execution
    3. so for every function call a brand new execution context is created.
    4. For every execution context a brand new global variable is created and we know it with the name 'this'
    5. default value of this is window object



    if strict mode is on then the value of this is undefined.
    else, then the value of this will depend on how you are calling the function. 




    showMessage.call() or showMessage.apply()    

    call and apply methods are same.
    if we call directly like showMessage.call() or showMessage.apply()  then the value of this is window object.

    on the other way, we can pass the value of this object as a first argument in call and apply method like
    showMessage.call({}) -> in this case the value of this is blank empty object
    showMessage.apply({a: 4})   -> in this case the value of this is {a: 4}

    call and apply method are use to assign custom value of this on a function



    Different types of scope
    1. block scope
    2. function scope
    3. global scope
    4. lexical scope -> means fixed scope



    so in event listener the value of this is the element itself on which you have assigned event 
    eg: button with click event will have this value of button element itself.


    For assigning custom this then there are three method:
    1. call method -> set the value of this and immediate invoke that funtion 
        eg: showMessage.call(value_of_this, argument1, argument2,...)

    2. apply method -> set the value of this and immediate invoke that funtion and only difference bet call and apply is in passing argumne
        eg: showMessage.call(value_of_this, [argument1, argument2, ...])

    3. bind method -> permanantly setting this value.
        eg: showMessage.call({a: 4}, argument1, argument2,...)




    in regular function the value of this is defined based on how the function is been invoked.
    in arrow function, it inherit value of this from its parent scope where if defined (lexically)
*/
