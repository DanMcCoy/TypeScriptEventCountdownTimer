window.onload = () => {
    var _timer1: TECT.CountdownTimer = new TECT.CountdownTimer(60 * 1000, 1, document.getElementById('example1'));
    _timer1.start();


    var _timer2: TECT.CountdownTimer = new TECT.CountdownTimer(20 * 1000, 1, document.getElementById('example2'));
    _timer2.tickEvents = [{ time: 0, callback: function (time, element) { document.getElementById('clock').className = 'animated shake'; } }];
    _timer2.start();

    var _timer3: TECT.CountdownTimer = new TECT.CountdownTimer(60 * 1000, 1, document.getElementById('example3'));
    _timer3.tickEvents = [
        { time: 50 * 1000, callback: function (time, element) { document.getElementById('bombMessage').innerHTML = 'Is that a bomb?'; } },
        { time: 40 * 1000, callback: function (time, element) { document.getElementById('bombMessage').innerHTML = 'Ahhh, it IS a bomb!'; } },
        { time: 30 * 1000, callback: function (time, element) { document.getElementById('bombMessage').innerHTML = 'It\'s going to blow up soon!'; } },
        { time: 20 * 1000, callback: function (time, element) { document.getElementById('bombMessage').innerHTML = 'Not long now!'; } },
        { time: 10 * 1000, callback: function (time, element) { document.getElementById('bombMessage').innerHTML = 'Oh nooo!'; } },
        { time: 5 * 1000, callback: function (time, element) { document.getElementById('bombMessage').innerHTML = 'AAAAHHRGH!'; } },
        {
            time: 0,
            callback: function (time, element) {
                (<any>document.getElementById('bomb')).src = 'images/flash.png';
                document.getElementById('bombMessage').innerHTML = 'BOOM!';
                (<HTMLInputElement>document.getElementById('stopStartBomb')).disabled = true;
                
            }
        }
    ];

    _timer3.onReset = () => {
        document.getElementById('bombMessage').innerHTML = '';
        (<HTMLInputElement>document.getElementById('stopStartBomb')).disabled = false;
    }

    document.getElementById('stopStartBomb').onclick = () => {
        if (_timer3.isRunning) {
            _timer3.stop();
            (<HTMLInputElement>document.getElementById('stopStartBomb')).value = 'Start';
            document.getElementById('bombMessage').innerHTML = 'Phew!';
        }
        else {
            _timer3.start();
            (<HTMLInputElement>document.getElementById('stopStartBomb')).value = 'Stop';
            document.getElementById('bombMessage').innerHTML = 'Oh no it\'s started again!';
        }
    };

    document.getElementById('resetBomb').onclick = () => {
        _timer3.reset();
    }

    _timer3.start();


}