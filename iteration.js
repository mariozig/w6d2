var show = console.log;

var bubbleSort = function(array, sorter) {
  var sorted = false;

  if (sorter === undefined) {
    var sorter = function(a,b) {
      return (a > b);
    };
  }

  while (sorted == false) {
    var sorted = true;

    for (var i = 0; i < array.length; i++) {
      if (sorter(array[i], array[i+1])) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
      }
    }
  }
  return array;
}

var substrings = function(string) {
  var subs = [];

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < string.length; j++) {
      if (j > i) {
        subs.push(string.slice(i,j));
      }
    }
  }

  return subs;
}

var array = [34,12,1,2,4,5,43,"jack","foobar", 3,4,7,2];

show(bubbleSort(array));
show(bubbleSort(array, function(a,b) { return (b > a) }));

show("substrings")
show(substrings("substrings"))
