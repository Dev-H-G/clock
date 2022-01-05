function myClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    if (hour === 0) {
        hour = 12;
    }

    hour = (hour < 10) ? `0${hour}` : hour;
    minute = (minute < 10) ? `0${minute}` : minute;
    second = (second < 10) ? `0${second}` : second;

    let clock = `${hour}:${minute}:${second} ${session}`;
    document.querySelector(".clock").innerText = clock;
}
setInterval(myClock, 1000);