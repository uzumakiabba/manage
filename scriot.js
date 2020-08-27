

   /*  function email(){
        var email=document.querySelector("#emailput")
        var caution=document.querySelector("#caution")
        if(email.checkValidity()==false){
            caution.innerHTML=email.validationMessage;
        }
    } */

    /* function myFunction() {
        var inpObj = document.querySelector("#emailput");
        if (!inpObj.checkValidity()) {
          document.querySelector("#caution").innerHTML = inpObj.validationMessage;
        }
      
      } */

      

      var form=document.querySelector("#form")
      var email=document.querySelector("#emailput")

      form.addEventListener("submit",(e) =>{
          e.preventDefault();

          checkInput();
      }) 
/* 
      form.addEventListener("submit",checkInput) */

      function checkInput(){

       var emailValue= email.value

       if(emailValue===""){
           return document.querySelector("#caution").innerHTML="Please type in Your email Address"
       }
       else if(!isEmail(emailValue)){
           return document.querySelector("#caution").innerHTML="Please fill in a Valid mail Address"
       }

      }

      function isEmail(email){
        return /\S+@\S+\.\S+/.test(email)
      }