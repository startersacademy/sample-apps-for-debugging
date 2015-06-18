function testDebugging() {
    debugger;
    makeItColor('red');
    makeItColor('green');
    makeItColor('red');
    makeItColor('');
}

function makeItColor(color) {
    $('body').css('background-color', color);
}
