let ans = document.getElementById("input-value");
let str = "";
let btn = document.querySelectorAll(".btn");

btn.forEach((btn) => {btn.addEventListener("click", (e) =>{
    if(e.target.innerHTML == "="){
        if(ans.value == '0'){
            ans.value = 0;
        }
        else{
            str = String(eval(str));
            ans.value = str;
        }
        
    }
    else if(e.target.innerHTML == "AC"){
        str = "";
        ans.value = str;
    }
    else if(e.target.innerHTML == "DEL"){
        str = str.substring(0, str.length-1);
        ans.value = str;
        console.log(str);
    }
    else{
        str += e.target.innerHTML;
        ans.value = str;    
    }
});})