checkSignIn=function ()
{
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let b = false;
    if(email=='')
    {
        alert('Please enter email')
        b = true;
    }
    if(password=='')
    {
        alert('Please enter password')
        b = true;
    }
    if(b)
    {
        alert('Form validation success')
    }
}