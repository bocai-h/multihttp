setInterval(function () {
  fetch("http://httpbin.org/ip")
    .then((response) => response.json())
    .then(function (data) {
      console.log("I am in worker2");
      self.postMessage(data);
    });
}, 5000);


