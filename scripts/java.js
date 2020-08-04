alert ('Hello on this page');

function greet()
{
    let name = document.querySelector('#imie').value;
    if (name ==='')
    {
        name = 'world';
    }
   alert('Hello, ' + name + '!'); // wyskakujące okno

    document.querySelector('#result').innerHTML = '<h1> Hello ' + name + ' to the CATS page! </h1>';
}