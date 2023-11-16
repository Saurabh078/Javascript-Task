// Sample array
var numbers = [5, 2, 8, 1, 4];

// Sorting in descending order
var descendingOrder = numbers.sort(function(a, b) {
  return b - a;
});

console.log(descendingOrder);
