// 1kg = 2.205 lbs
const weight_input=document.querySelector("#weight_input");
const error_message=document.querySelector("#error_message");
const output_text=document.querySelector("#output_text");

weight_input.addEventListener("input",handleInputChange);

// if statements
function handleInputChange(e){
    const weight = e.target.value.trim();

    // clear previous messages by default
    error_message.textContent = "";
    output_text.textContent = "Your weight in kg is:";

    // if input is empty, just clear output and return
    if (weight === ""){
        // leave output as the base prompt or empty — here we keep the base text
        return;
    }

    // parse the input as pounds
    const pounds = parseFloat(weight);
    if (isNaN(pounds)){
        error_message.textContent = "Invalid weight — please enter a number";
        // ensure we don't show the last successful conversion
        output_text.textContent = "Your weight in kg is:";
        return;
    }

    // valid number: convert pounds to kilograms and display
    const weight_kgs = (pounds / 2.205).toFixed(2);
    output_text.textContent = `Your weight in kg is: ${weight_kgs}`;
}
