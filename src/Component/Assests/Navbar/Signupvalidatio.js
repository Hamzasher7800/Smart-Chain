function Validation(values){
    let error ={}
    const email_pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const password_pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (values.name ===""){
        error.name ="Name should not be empty"
    }
    
    else {
        error.name= ""
    }

    if (values.email ===""){
        error.email ="Email should not be empty"
    }
    else if(email_pattern.value.match(values.email)){
        error.email="Email Didn't match"
    }
    else {
        error.email= ""
    }


    if (values.password === "") {
        error.password = "Password should not be empty";
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password Didn't match";
    }
    else if (values.confirmPassword === "") {
        error.confirmPassword = "Confirm Password should not be empty";
    }
    else if (values.confirmPassword !== values.password) {
        error.confirmPassword = "Passwords did not match";
    }
    else {
        error.password = "";
        error.confirmPassword = "";
    }

    return error;
}

export default Validation