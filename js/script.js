



function sayHello()
{

    const myName = "Austin";

    let response = "Good";
    let response1 = "Bad";
    let response2 = "Okay";

    console.log("Hello! My name is " + myName);
    console.log("How are you doing today?");

    if (response === "Good") {

        console.log("Hey! Glad to see that you are doing well.");

    } else if (response1 === "Bad") { 
        console.log("I'm sorry to hear that. Hope your day gets better later.If not today, then tomorrow.");

    } else if (response2 === "Okay") {
        console.log("I see...It's somewhere around the middle. What would of made your day better?");
    }
    

}