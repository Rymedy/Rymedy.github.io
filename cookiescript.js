function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value += 1;
    document.getElementById('number').value = Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value);
    localStorage.setItem("number");
}

function incrementValue2()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value -= 1000;
    document.getElementById('number').value = Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value);
    localStorage.setItem("number");
        }

        
