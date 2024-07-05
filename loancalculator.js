document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById("gif").style.display= "block";
    setTimeout(calculate,2000);
});

function calculate(e)
{   
    
    const loanamt = document.getElementById("loanamt");
    const interest = document.getElementById("interest");
    const year = document.getElementById("year");
    const montlypayment = document.getElementById("montlypayment");
    const  totalamount= document.getElementById("totalamount");
    const totalinterest = document.getElementById("totalinterest");
    const principal = parseFloat(loanamt.value);
    const calinterest = parseFloat(interest.value)/100 /12;
    const calpayment = parseFloat(year.value)*12;
    const x = Math.pow(1+calinterest,calpayment);
    const montly = (principal * x * calinterest )/(x-1);

    if(isFinite(montly))
        {
            montlypayment.value = montly.toFixed(2);
            totalamount.value = (montly * calpayment).toFixed(2);
            totalinterest.value  = (montly * calpayment-principal).toFixed(2);   
         document.getElementById("result").style.display = "block";
         document.getElementById("gif").style.display= "none";
        }
    else 
    {
        showAlert("Please Check the values");
        document.getElementById("gif").style.display= "none";
    }
    
    e.preventDefault();  
}

function showAlert(error){
     const errorele = document.createElement("div");
     errorele.className = "alert alert-danger";
     errorele.appendChild(document.createTextNode(error));
     const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    card.insertBefore(errorele,heading);
 
    setTimeout(function(){
        document.querySelector(".alert").remove();
    },3000)
}
