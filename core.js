var start;
onmessage = getStart;
function getStart(event) {
  console.log("core worker get start:", event.data);
  start = event.data;
  onmessage = getEnd;
}

var end;
function getEnd(event) {
  console.log("core worker get end:", event.data);
  end = event.data;
  onmessage = null;
  work();
}

function work() {
  var result = 0;
  for (var i = start; i < end; i += 1) {
    // perform some complex calculation here
    result += 1;
  }
  postMessage(result);
  close();
}