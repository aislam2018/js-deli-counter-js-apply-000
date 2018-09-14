function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    var position = i + 1;
    var greeting = 'Welcome, ' + person + '.'
    + ' You are number ' + position + ' in line.';
  }
  return greeting;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    var personServed = katzDeliLine[0];
    return 'Currently serving ' + personServed;
  }
}

function currentLine(katzDeliLine) {
  var newLine = katzDeliLine.splice(1);
  console.log('The Line is currently:')
  for (var i = 0; i < newLine.length; i++) {
    var person = newLine[i];
    var position = i + 1;
    var onLine = position + '. ' + person;
    console.log(onLine);
  }
}
