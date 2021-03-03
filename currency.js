document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("form").onsubmit=function(){
        let link = "https://api.exchangeratesapi.io/latest?base=";
        let base = document.querySelector("#basecurrency").value;
        let target = document.querySelector("#targetcurrency").value;
        let url = link + base;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[target];
            document.getElementById("result").innerHTML=`1 ${base} = ${rate} ${target}`;
        });
        return false;

    }
})


