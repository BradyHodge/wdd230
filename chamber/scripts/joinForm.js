function getFormLoadTime() {
    var currentTime = Date.now();

    document.getElementById("time-loaded").value = currentTime;
}

document.getElementById("join-form").addEventListener("submit", getFormLoadTime());