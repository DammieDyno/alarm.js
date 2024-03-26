let time = document.getElementById('time')
let select1 = document.getElementById('alarmhours')
let select2 = document.getElementById('alarmmins')
let select3 = document.getElementById('anti-post')

for (let index = 0; index <= 23; index++) {
    select1.innerHTML += `<option value="${index }"> ${index} </option>`
}
for (let index = 0; index <= 60; index++) {
    select2.innerHTML +=  `<option value="${index}"> ${index} </option>`
}

date = new Date()

function set() {
    date = new Date()
    time.innerHTML = ` ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${select3.value}`

    if (select1.value == '' && select2.value == '')  {
        alert("Set an alarm")
    }
}

setInterval(() => {
    date = new Date()
    time.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${select3.value}`

    if (select1.value == date.getHours() && select2.value == date.getMinutes())  {
        alert("It is working")
    }
}, 1000);

function stop() {
    
}