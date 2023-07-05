function makeShit()
{
    //const rickTimes = document.body.appendChild(document.createElement("h2"));
    /*const rickTimes = document.createElement("h2");
    fetch("http://localhost:8000/about")
    .then(res => res.json())
    .then(res => {
        rickTimes.innerHTML = `${res.rick} times`;
    })
    document.getElementById("BigBoss").appendChild(rickTimes);*/
    
    const rickTimes = document.getElementById("ricked");
    fetch("/about")
    .then(res => res.json())
    .then(res => {
        rickTimes.addEventListener("click",rickTimes.innerHTML = `${res.rick} times`);
    })
    window.open("https://youtu.be/xvFZjo5PgG0");
}