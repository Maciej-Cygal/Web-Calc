const wyswietlacz = document.getElementById("wyswietlacz");

function appendToDisplay(input)
{
wyswietlacz.value += input;
}

function clearDisplay()
{
wyswietlacz.value = "";
}

function calc()
{
    try
    {
        wyswietlacz.value = eval(wyswietlacz.value);
    }
    catch(error)
    {
        wyswietlacz.value = "Oh no! Error..";
    }
}