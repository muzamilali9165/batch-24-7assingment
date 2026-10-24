

// Q 1

alert("Wellcome to the Java Script")

// Q 2

alert("Error! Please Enter a Valid Number")


// Q 3

alert('Wellcome to js Land \n Happy Coding')

// Q 4

alert ("Wellcome to  js land ")
alert ("Happy Coding \n prevent this page from creating additional dialogs ")

// Q 5

alert("Hello... I can run  js throuwh my web browsers Console")


// Q 6


alert("Complete Alert Chepter ")




// chepter 2

// Q 1

var massage = "muzamilali"
console.log(massage);


// Q 2
var name = "muzamil"
console.log(name);

var nam ="Muzamil Ali"
console.log(nam);

// Q3

var massage = "I am muzamil and i am student SMIT"
console.log(massage);

var num = "Hello World"
console.log(num);

// Q 4

var nam = "muzamilali"
alert(nam)

var age = "18 years old"
alert(age)

var massage = "Certified mobaile Applecation Dewlepment"
alert(massage)

// Q 5

var massage = "pizza\npizz\npiz\npi\np"
alert(massage)

// Q 6

var email = "muzamilali9165@gmail.com"
alert(email)

// Q 7

var massage = "I am typing to lernin from  the book A smarter \n way to lern java script"
alert(massage)


// Q 9

var nam = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(nam)



// chepter 3 Q 1

var age = "I am 18 year old"
alert(age)


// Q 2

   let visits = localStorage.getItem("visits");

    if (visits === null) {
        visits = 1;
    } else {
        visits = Number(visits) + 1;
    }

    localStorage.setItem("visits", visits);

    alert("You have visited this site " + visits + " times")


    // Q 3

       var birthYear = 2009
      alert(birthYear)


    //   Q 4

       var visitorName = "Muzamil";
    var productTitle = "T-shirt";
    var quantity = 5;

    document.write(
        visitorName + " ordered " + quantity + " " +
        productTitle + "(s) on XYZ Clothing store"
    );


    // Chepter 4 
    
    
  // 1. Declare 3 variables in one statement
    var name = "Ali", age = 20, city = "Karachi";

    // 2. Five legal variable names
    var myName;
    var _name;
    var $price;
    var user1;
    var firstName;

    // Five illegal variable names (comments only)
    // var 1name;
    // var my-name;
    // var var;
    // var my name;
    // var @price;

    // 3. Display rules in browser
    document.write("<h1>Rules for naming JS variables</h1>");

    document.write(
        "Variable names can only contain letters, numbers, $ and _. " +
        "For example $my_1stVariable<br><br>"
    );

    document.write(
        "Variables must begin with a letter, $ or _. " +
        "For example $name, _name or name<br><br>"
    );

    document.write(
        "Variable names are case sensitive<br><br>"
    );

    document.write(
        "Variable names should not be JS reserved keywords"
    );




    // chepter 5

    //  Q 1
        var num1 = 3;
        var num2 = 5;
        var sum = num1 + num2;
        document.write("Sum of " + num1 + " and " + num2 + " is " + sum);


        // Q 2

        var num1 = 10;
        var num2 = 3;
        var subtraction = num1 - num2;
        var multiplication = num1 * num2;
        var division = num1 / num2;
        var modulus = num1 % num2;
        document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br>");
        document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");
        document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");
        document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);

        // Q 3
   var num = 10;

        document.write("Value of variable is: " + num);

