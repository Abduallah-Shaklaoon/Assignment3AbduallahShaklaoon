/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costWeek = document.getElementById("calculated-cost");
let daysSelected = 0;
let rate = 35;
let dayButtons = document.querySelectorAll(".work-days");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(element => {
    element.addEventListener("click", function(){
        if (element.classList.contains("clicked")){
            element.classList.remove("clicked");
            daysSelected-=1;
            calculate();
        }
        else{
            element.classList.add("clicked");
            daysSelected+=1;
            calculate();
        }
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", clearFunction);
    
function clearFunction(){
    dayButtons.forEach(element => {
            if (element.classList.contains("clicked")){
                element.classList.remove("clicked");
                daysSelected=0;
            }
        });
    if(halfButton.classList.contains("clicked")){
        halfButton.classList.remove("clicked");
        fullButton.classList.add("clicked");
    }
    rate = 35;
    calculate();
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click", halfFunction);
function halfFunction(){
    if(fullButton.classList.contains("clicked")){
        fullButton.classList.remove("clicked");
        halfButton.classList.add("clicked");
        rate = 20;
        calculate();
    }
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener("click", fullFunction);
function fullFunction(){
    if(halfButton.classList.contains("clicked")){
        halfButton.classList.remove("clicked");
        fullButton.classList.add("clicked");
        rate =35;
        calculate();
    }
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    costWeek.innerHTML = rate*daysSelected;
}

