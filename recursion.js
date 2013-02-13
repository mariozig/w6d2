var sh = console.log;

var sum_array = function(array, total) {
  var total = total || 0;

  if (array.length == 0) {
    return total;
  } else {
    total += array.pop();
    return sum_array(array, total);
  }
};

//--

var exponent = function(b, n) {
  if (n === 0) {
    return 1;
  } else {
    return (b * exponent(b, n-1));
  }
};

var other_exponent = function(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  } else {
    return (other_exponent(b, Math.floor(n/2)) *
            other_exponent(b, Math.ceil(n/2)));
  }
};

var fib = function(num) {
  if (num == 0) {
    return [0];
  } else if (num == 1) {
    return [0, 1];
  } else {
    temp = fib(num-1);
    return (temp.concat([temp[temp.length - 1] +
            temp[temp.length - 2]]));
  }
};


a = [1,2,3,4,5];
sh("array sum");
sh(sum_array(a));

sh("exponent");
sh(exponent(4, 3));

sh("other exponent");
sh(other_exponent(4,3));

sh("fib");
sh(fib(5));