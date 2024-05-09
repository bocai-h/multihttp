// worker.js

// 监听从主线程传递过来的 URL 列表
// self.onmessage = function(event) {
//   // const urls = event.data;

//   // // 循环遍历 URL 列表，发起 HTTP 请求
//   // urls.forEach(url => {
//   //   fetch(url)
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       // 请求成功，将结果发送回主线程
//   //       self.postMessage(data);
//   //     })
//   //     .catch(error => {
//   //       // 请求失败，将错误信息发送回主线程
//   //       self.postMessage({ error: error.message });
//   //     });
//   // });
//   console.log("Receive msg:", event.data);
//   dosomething(event.data);
// };

// importScripts('console.js');

self.addEventListener(
  "message",
  function (e) {
    console.log("Receive msg:", e.data);
  },
  false
);

// function dosomething(event_data) {
//   self.postMessage('Work done! ' + event_data.toString());
// }
// Worker 线程
// self.onmessage = function (e) {
//   var uInt8Array = e.data;
//   postMessage('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());
//   postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);
// };
