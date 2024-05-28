

    window.addEventListener("DOMContentLoaded",async()=>{
      const res=await axios.get("/chat/onlineusers")
      console.log(res.data.users);
      for(var i=0;i<res.data.users.length;i++)
        {
          showuseronscreen(res.data.users[i])
        }

    })

    function showuseronscreen(user)
    {
    let parentNode=document.getElementById('chatWindow');


    
    const childNode=`<div id=${user.id}>${user.name} <br>
                    
                    <hr style="width:100%;text-align:left;margin-left:0">`

                       
    parentNode.innerHTML=parentNode.innerHTML+childNode; 
   


}

    // socket.on('updateUserList', (users) => {
    //   usersList.innerHTML = '';
    //   users.forEach(user => {
    //     const li = document.createElement('li');
    //     li.textContent = user.name;
    //     li.classList.add('list-group-item');
    //     usersList.appendChild(li);
    //   });
    // });

    // socket.on('chatMessage', (msg) => {
    //   const div = document.createElement('div');
    //   div.textContent = msg;
    //   chatWindow.appendChild(div);
    //   chatWindow.scrollTop = chatWindow.scrollHeight;
    // });

    // chatForm.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   const msg = messageInput.value;
    //   socket.emit('chatMessage', msg);
    //   messageInput.value = '';
    // });