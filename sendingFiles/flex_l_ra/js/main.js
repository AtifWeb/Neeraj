function validateForm(){
  let nameErr = document.getElementById('errorName');
  let emailErr = document.getElementById('errorEmail');
  let flag=0;
  if(document.getElementById('fname').value.length == 0){
    nameErr.style.display = 'block'
    flag = 1
  }
  else{
    nameErr.style.display = 'none'
  }

  let email = document.getElementById('email').value;
  if(!validateEmail(email)){
    emailErr.style.display="block";
    flag =1;
  }
  else{
    emailErr.style.display="none";
  }
  console.log(flag);
  if(flag == 1 ){
    return false;
  }
  else{
    return true;
  }

}



function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(email));
  return re.test(email);
}
