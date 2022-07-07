function otheredu(){
    a=document.getElementById('other_edu');
    a.checked=true;
}
function edu(){
    a=document.getElementById('other_text');
    a.value="";
}
function validate_form(){  
    const phone=document.getElementById('phone').value;
    const watsapp = document.getElementById('watsapp').value;
    if(phone.length!=10 || watsapp.length!=10)
    {
        alert("invalid number");
    }
    else
    {
        alert("submitted successfully");  
    }
    
}  