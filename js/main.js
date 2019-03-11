
//getting references
const fm = document.querySelector("form");
let fn = document.getElementById("fullname");
//do same thing for email
let em = document.getElementById("email");
let msg = document.getElementById("message");
//event target object
let btn = document.getElementById("collect");
let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// event handler
function validateForm(){
	console.clear();
	//Console.log("Click event handler!");
	let collectedData = {};
	let errors = [];
	
	//validater the fullname
	if  (fn.value !== "") {
		collectedData.fname = fn.value;
	} else {
		errors.push("Full name is missing");
	}
	
	//validate your email
    if (em.value && emailFormat.test(em.value)) {
    collectedData.email = em.value
  } else if (em.value && !emailFormat.test(em.value)) {
    errors.push("Provide valid email, please")
  } else{
    errors.push("Provide email, please")
  }
	
	//validate your message
	if  (msg.value !== "") {
		collectedData.message = msg.value;
	} else {
		errors.push("Message is missing");
	}
    
	//collect the data and create the feedback
	if (errors.length === 0) {
		console.log(collectedData);
		fm.reset();
	} else {
		console.log(errors);
	
	}
	
	
}

btn.addEventListener("click", validateForm);