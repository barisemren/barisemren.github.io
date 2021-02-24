document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("form").onsubmit=function(){
        fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(response => response.json())
        .then(data => {
            const currency = document.getElementById("currency").value.toUpperCase();
            const rate = data.rates[currency];
            if(rate!==undefined){
                document.getElementById("result").innerHTML=`1 USD = ${rate} ${currency}`;
            }
            else{
                document.getElementById("result").innerHTML=`Invalid Currency`;
            }
        });
        return false;

    }
})


