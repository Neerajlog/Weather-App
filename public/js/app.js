console.log('Client side javascript file is loaded!')

const weather_form=document.querySelector('form');
const search=document.querySelector('input');
const messageOne=document.querySelector('#message-1');
const messageTwo=document.querySelector('#message-2');

// mesageOne.textContent="";

weather_form.addEventListener('submit',(e)=>{
    e.preventDefault();

   const loaction=search.value;

   messageOne.textContent="loading..."
   messageTwo.textContent="";
   fetch(`http://localhost:3000/weather?address=${loaction}`).then((response)=>{
    response.json().then((data)=>{
           if(data.error){
        messageOne.textContent=data.error;
           }else{
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
           }
    })
})
   

})

