window.onload = () => {
    var _countdownTimer: TECT.CountdownTimer = new TECT.CountdownTimer(60 * 1000, 1, document.getElementById('example1'));
    _countdownTimer.start();
}