function openLink(url, newTab) {
    if (newTab) {
        window.open(url, "_blank");
    } else {
        window.location.href = url;
    }
}

document.querySelector('#nav-btn').addEventListener('click', function () {
    document.querySelector('#nav-bar').classList.toggle('active');
});