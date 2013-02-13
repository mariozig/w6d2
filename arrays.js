// dup
// two sum
// transpose

var array = [1,2,3];

var dup = function(array) {
  var new_array = [];

  for (var i=0; i<array.length; i++) {
    new_array[i] = array[i];
  }

  return new_array;
};

var uniq = function(array) {
  var new_array = [];

  for(var i = 0; i < array.length; i++) {
    var found = false;

    for(var j = 0; j < new_array.length; j++) {
      if (array[i] === new_array[j]) {
        found = true;
      }
    }
    if (!found) {
      new_array.push(array[i]);
    }
  }

  return new_array;
}

var two_sum = function(array) {
  var two_sums = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] == (-1*array[j])) {
        two_sums.push([i,j]);
      }
    }
  }

  return two_sums;
};

var rows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

var transpose = function(array) {
  new_array = [];

  for (var i = 0; i < array.length; i++) {
    new_array.push([])
    for (var j = 0; j < array[i].length; j++) {
      new_array[i][j] = array[j][i];
    }
  }
  return new_array;
}

var show = console.log

console.log("Dup:");
console.log(dup(array));

console.log("Two sums:");
console.log(two_sum([-1,0,1]));
console.log(two_sum([0,2,4,65]));

show("transpose");
show(transpose(rows));

show("uniq");
show(uniq([1,1,1,2,2,2,5,7,8]));