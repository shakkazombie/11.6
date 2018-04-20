//funckcja losująca 10 znaków z tablicy 61 znaków i składająca je w jeden string

function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ',
        str = '';

    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

//Math - obiekt globalny
//floor - metoda zaokrąglająca liczby w dół
//random - metoda losująca liczbę z zakresu <0,1)

//CREATING COLUMNS
var todoColumn = new Column('Do zrobienia');
var doingColumn = new Column('W trakcie');
var doneColumn = new Column('Wykonano');

// ADDING COLUMNS TO THE BOARD
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// CREATING CARDS
var card1 = new Card('Nowe zadanie');
var card2 = new Card('Stworz nową tablicę');

// ADDING CARDS TO COLUMNS
todoColumn.addCard(card1);
doingColumn.addCard(card2);