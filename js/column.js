//klasa Column

function Column(name) {

    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();


    function createColumn() {

        //tworzymy poszczególne elementy kolumny:

        var $column = $('<div>').addClass('column');
        var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
        var $columnCardList = $('<ul>').addClass('column-card-list');
        var $columnDeleteButton = $('<button>').addClass('btn-delete btn');
        var $columnDeleteSymbol = $('<span  class="glyphicon glyphicon-remove" aria-hidden="true" aria-hidden="true"></span>');
        var $columnAddCard = $('<button>').addClass('add-card btn btn-success btn-sm').text('Add a Card');

        //ustawiamy nasłuchiwanie zdarzeń

        $columnDeleteButton.click(function() {
            self.removeColumn();
        });

        $columnAddCard.click(function(event) {
            self.addCard.click(new Card(prompt('Enter the name of the card', 'Card\'\s name')));

            $columnDeleteButton.append($columnDeleteSymbol);
            $column.append($columnTitle).append($columnDeleteButton).append($columnAddCard).append($columnCardList);
            return $column;
        });

        $column.append($columnTitle)
            .append($columnDelete)
            .append($columnAddCard)
            .append($columnCardList);

        return $column;

    }
}

function Card(description) {

    var self = this;

    this.id = randomString();
    this.description = description;
    this.$element = createCard();

    function createCard() {
        var $card = $('<li>').addClass('card');
        var $cardDescription = $('<p>').addClass('card-description').text(self.description);
        var $cardDelete = $('<button>').addClass('btn-delete').addClass('btn btn-danger').text;

        $cardDelete.click(function() {
            self.removeCard();
        });

        $card.append($cardDelete)
            .append($cardDescription);

    }
    Card.prototype = {
        removeCard: function() {
            this.$element.remove();
        }
    };
}