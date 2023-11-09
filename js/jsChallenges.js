// function challenge1(){
//     if(document.getElementById("subscribe").checked==true) {
//     console.log("this works");
//     document.querySelector("#emailDiv").style.display = "initial";

// }else{
//         document.querySelector("#emailDiv").style.display = "none";
// }    
// }


// function challenge2(element){
//     let bill = document.querySelector("#bill")
//     let home = document.querySelector("#home")
//     console.log("home value is" + "home.value")
//     console.log("bill value is" + "bill.value")

//     if(element.checked){
//         home.value=bill.value;
//         home.disabled=true;
//     }

//     else{
//         home.value="";
//         home.disabled = false;
//     }

// }

// Discussion #11
function challenge1(element){
    console.log("the checked attribute:" + element.checked);
    if (element.checked==true){
        document.querySelector('#emailDiv').style.display="block";
    }else{
        document.querySelector('#emailDiv').style.display="none"
    }

}

function challenge2(){
    document.querySelector('#sameAddress').addEventListener('click', challenge2);
    document.querySelector('#home').value = document.querySelector('#bill').value;
    document.querySelector('#home').setAttribute("disabled", "");


}




