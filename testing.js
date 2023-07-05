(async()=>{
    await fetch("http://localhost:8000/about")
    .then(res => res.json())
    .then(res => console.log(res.rick))
})()