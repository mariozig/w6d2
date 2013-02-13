function println(string) {
  // we'll learn about this when we talk about DOM manipulation.
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}

var towers_game = function() {
  var towers = [
    [3,2,1],
    [],
    []
  ];

  var victory = function() {
    if (towers[0].length == 0) {
      if ((towers[1].length == 0) || (towers[2].length == 0)) {
        return true;
      }
    }

    return false;
  };

  var print_board = function() {
    clear();
    for (var i = 0; i < towers.length; i ++) {
      println("TOWER" + " " + (i + 1) + " " + towers[i]);
    }
  };

  var get_input = function() {
    var from_tower = prompt("From where?") - 1;
    var to_tower = prompt("To where?") - 1;
    return [from_tower, to_tower];
  };

  while (!victory()) {
    print_board();
    var move = get_input();

    from = move[0];
    to = move[1];

    if ((from < 0) || (from > 2) || (to < 0) || (to > 2)) {
      alert("Illegal move.");
      continue;
    }

    if (towers[from][towers[from].length - 1])

    if (towers[from].length != 0) {
      towers[to].push(towers[from].pop());
    }
  };

  println("YOU WIN WIN WIN WIN WIN");
};

towers_game();
