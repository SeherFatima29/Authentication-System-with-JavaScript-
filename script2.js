
function dataStore() {
    let name=document.getElementById("name")
    localStorage.setItem("name",name.value)
    // localStorage.getItem("name.value")

    let email=document.getElementById("email")
    localStorage.setItem("email",email.value)
    // localStorage.getItem("email.value")

    let password=document.getElementById("password")
    localStorage.setItem("password",password.value)
}