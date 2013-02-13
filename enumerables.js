var show = console.log;

var multiples = function(array) {
  new_array = [];

  array.forEach(function(element) {
    new_array.push(element*2)
  });

  return new_array;
};

var myEach = function(funky, array) {
  for (var i = 0; i < array.length; i++) {
    show(funky(array[i]));
  }
  return array;
};

var inject = function(initial, fun, array) {
  total = initial;

  for (var i = 0; i < array.length; i++) {
    total += fun(array[i])
  }

  return total;
};

array = [1,2,3];
show("multiples");
show(multiples(array));

show("myeach")
show(myEach(function(par) {return (par + "ly")}, array))

show("inject")
show(inject("babby", function(i) {
  return i + 100;
}, array));