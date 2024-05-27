async function submitForm(e) {
    console.log("hi")
    try{
        
    // Get form data
    e.preventDefault();
    
    // Create a data object to send to the API
    const userData = {

        name: e.target.name.value,
        email: e.target.email.value,
        phone:e.target.phone.value,
        password: e.target.password.value
        // Add more fields as needed
    };
    console.log(userData)
    // Make an HTTP POST request to your API endpoint
    const response= await axios.post("http://localhost:3000/user/submit-user", userData)

        
        if (response.status ===201) {
            console.log("hi")   
            alert(response.data.message);
        window.location.href = "/user/login"
       }else{
        throw new Error('Failed to login')
}    
    
}
    catch(err) {
        
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    };
}