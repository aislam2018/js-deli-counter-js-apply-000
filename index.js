function nowServing(katzDeliLine) {
  var personServed = katzDeliLine[0];
  return 'Currently serving' + personServed;
  katzDeliLine.splice(0, 1);
  return katzDeliLine;
  
}