class SamplePom {
    get here() {
        return $("//a[text()='here']")
    }

    get userName() {
        return $("//input[@id='username']")
    }

    get password()
    {
        return $("//input[@id='password']")
    }

    get confirmPassword()
    {
        return $("//input[@id='confirmPassword']")
    }

    get register()
    {
        return $("//button[text()='Register']")
    }

    get registerconfirmMessage()
    {
        return $("//b[text()='Successfully registered, you can log in now.']")
    }

    get login()
    {
        return $("//button[text()='Login']")
    }

    get loginConfirmmessage()
    {
        return $("//b[text()='You logged into a secure area!']")
    }

    get logout()
    {
        return $("//i[text()=' Logout']")
    }

    
  
}
module.exports=new SamplePom();