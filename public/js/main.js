let city = document.getElementById('city');
city.style.display = 'none';
let temprature = document.getElementById('temprature');
temprature.style.display = 'none';
let btn = document.getElementById("btn");
btn.addEventListener('click', async (event)=>{
    event.preventDefault();
    let input = document.getElementById("input");
    let inputval = input.value;
    if(inputval==""){
        let msg = document.getElementById('msg');
        msg.innerHTML="please enter the city name";
        let city = document.getElementById('city');
        city.style.display = 'none';
        let temprature = document.getElementById('temprature');
        temprature.style.display = 'none';
    }
    else{
        try{
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputval}&units=metric&appid=c8ddd3a82b35c86ca7028c08c49f66f9`);
            let objdata = await response.json();
            // console.log(objdata)
            let city = document.getElementById('city');
            city.style.display = 'block';
            city.innerHTML = `${objdata.name} , ${objdata.sys.country}`;
            let temp = document.getElementById("temp");
            temp.innerHTML = objdata.main.temp;
            let temprature = document.getElementById('temprature');
            temprature.style.display = 'block';
        }catch(err){
            let msg = document.getElementById('msg');
            msg.innerHTML="please enter the valid city name";
            let city = document.getElementById('city');
            city.style.display = 'none';
            let temprature = document.getElementById('temprature');
            temprature.style.display = 'none';
        }
    }
    input.value = '';

    
})