var board = {
    name: 'Kanban Board',
    addColumn: function(column) {
        this.$element.append(column.$element);
        initSortable();
    },

    $element: $('.column-container')
};

$('.create-column').click(function() {
    var name = prompt('Podaj nazwę', 'nazwa');
    if (name) {
        var column = new Column(name); // tworzymy nową instancję klasy Column
        board.addColumn(column);
    } else if (name == "") {

        var columns = new Column('Untitled');
        board.addColumn(columns); //modyfikujemy właściwość obiektu board - dodajemy utworzoną wczesniej kolumnę do elementu o klasie .column-container
    }
});

function initSortable() {
    $('.column-card-list').sortable({
        connectWith: '.column-card-list',
        placeholder: '.card-placeholder',
        dropOnEmpty: true
    }).disableSelection();
}