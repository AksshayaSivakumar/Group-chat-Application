async function submitForm(e)
        {
           
               e.preventDefault();
               const logindata={
                email:e.target.email.value,
                password:e.target.password.value
               }

               await axios.post("user/loginpage",logindata)
               .then(response=>{
                
                alert(response.data.message);
                //6  window.location.href="/expense/index"
                localStorage.setItem('token',response.data.token)
                
               })
               .catch(err=>{
                console.log(JSON.stringify(err))
                document.body.innerHTML += `<div style="color:red;">${err.message} <div>`;
               })
                
        }
         
          