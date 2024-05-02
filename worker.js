// worker.js

// 监听从主线程传递过来的 URL 列表
self.onmessage = function(event) {
  const urls = event.data;
  
  // 循环遍历 URL 列表，发起 HTTP 请求
  urls.forEach(url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // 请求成功，将结果发送回主线程
        self.postMessage(data);
      })
      .catch(error => {
        // 请求失败，将错误信息发送回主线程
        self.postMessage({ error: error.message });
      });
  });
};
