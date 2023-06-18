
// email js
function sendMail() {

    var from_name =  document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");
    var errror = "";
  
    if (from_name.length ==""){
      errror = "please enter your name"
      error.innerHTML= errror ;
      return false; 
    }
  
  
    else if (email.indexOf("@") == -1 || email.length < 10){
      errror = "please enter Valid Email"
      error.innerHTML= errror ;
      return false; 
    }
  
  
    else if (message.length ==""){
      errror = "please enter a message"
      error.innerHTML= errror ;
      return false; 
      
    }
    
    else {
      var params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
    
      const serviceID = "service_zbe3b2d";
      const templateID = "template_kuf1j8n";
    
        emailjs.send(serviceID,templateID, params)
        .then(res=>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
    
        })
        .catch(err=>console.log(err));
         
      return true;
    }
    
  
  
    
  }