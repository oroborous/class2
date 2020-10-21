function sayHello(greeting) {
    document.write(greeting.toUpperCase());
}

function rollDie(sides)
{
    var die = Math.floor(Math.random() * sides) + 1;
    alert(die);
}

function drawCard()
{
    var card = Math.floor(Math.random() * 52) + 1;
    alert(card);
}

function generateLetter()
{
    var num = Math.floor(Math.random() * 26) + 65;
    var letter = String.fromCharCode(num);
    return letter;
}

function generateAcronym()
{
    var firstLetter = generateLetter();
    var secondLetter = generateLetter();
    var thirdLetter = generateLetter();

    alert(firstLetter + secondLetter + thirdLetter);
    alert("global is " + global);
    global++;
}

var global = 0;