var inputIndex = 9

function fibonacci(desiredIndex) {
  fibonacciSequnce = [0,1];

  for (var i = 0; i < desiredIndex; i++) {
    fibonacciSequnce[i+2] = fibonacciSequnce[i]+fibonacciSequnce[i+1]
  }
  return fibonacciSequnce[desiredIndex]
};

console.log(fibonacci(inputIndex));
