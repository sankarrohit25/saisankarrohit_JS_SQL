checkRegistration=function ()
{
    let email=document.getElementById('email').value
    let name=document.getElementById('name').value
    let password=document.getElementById('password').value
    let confirmPassword=document.getElementById('repassword').value;
    let b = false;
    if(email=='')
    {
        alert('Please enter email')
        b = true;
    }
    if(name=='')
    {
        alert('Please enter username')
        b = true;
    }
    if(password=='')
    {
        alert('Please enter password')
        b = true;
    }
    if(confirmPassword=='')
    {
        alert('Please enter password to confirm')
        b = true;
    }
    else 
    {
        if(password!=confirmPassword)
        {
            alert('The entered passwords do not match')
            b = true;
        }
        if(b)
        {
            alert('Form validation success')
        }
    }
}