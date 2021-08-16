const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minsElement = document.getElementById('mins')
const secsElement = document.getElementById('secs')

const newYears = "1 Jan 2022"

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const secs = Math.floor(totalSeconds) % 60

    daysElement.innerHTML = formatTime(days)
    hoursElement.innerHTML = formatTime(hours)
    minsElement.innerHTML = formatTime(mins)
    secsElement.innerHTML = formatTime(secs)
}

countdown()
setInterval(countdown, 1000)

