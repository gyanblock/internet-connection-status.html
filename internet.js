window.addEventListener("load",CheckInternetConnection);
function CheckInternetConnection(){
    const checkstatus=document.getElementById('status');
    const  ipadress=document.getElementById('ip');
    const  network=document.getElementById('network');
    
    checkstatus.textContent='checking......';

    if(navigator.onLine){
    fetch('https://api.ipify.org?format=json')
    .then((Response)=>Response.json())
    .then((data)=>{
        ipadress.textContent=data.ip;
        checkstatus.textContent='connected'
        const connection=navigator.connection;
        const networkStrength=connection?connection.downlink
        +'Mbps':'unknown';
        network.textContent=networkStrength;

    })
    .catch(()=>{
    checkstatus.textContent='Disconnected';
    ipadress.textContent='-'
    network.textContent='-'
        
})

}
else{
    checkstatus.textContent='checking......';
    ipadress.textContent='-'
    network.textContent='-'
}
}
