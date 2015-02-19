window.onload = function() {

  document.getElementById('close').addEventListener(
    'click',
    function() {
      window.close();
    }
  )

  // For making our app work with the library provided by LazarSoft
  // we need to do 2 steps:

  // 1) Add a callback. This will be called when the image will be
  // analyzed and the result will be ready.
  qrcode.callback = function(data) {
    if (data && data.length && data.length > 0) {
      var a = document.getElementById('text_read');
      a.textContent = data;
      a.href = data;
    } else {
      alert('Unable to read the QR Code');
    }
  }

  // 2) We need to get the "image" from the camera or given a file...
  // How to do this? This is your task :). Find a way to get image to analyze
  // and pass the data to "qrcode" library

  // As a tip, you could call qrcode library as...
  // qrcode.decode(window.URL.createObjectURL(blob));
  // Once the blob will be decoded, 'qrcode.callback' will be executed.

  // How can you retrieve the blow? Find an easy way and complete the exercise
  // alert('Not working yet! Now its your turn ;)');

  var activity = new MozActivity({
    // Ask for the "pick" activity
    name: "pick",

    // Provide the data required by the filters of the activity
    data: {
      type: "image/jpeg"
    }
  });

  activity.onsuccess = function() {
    console.log("A picture has been retrieved");

    var blob = this.result.blob;
    qrcode.decode(window.URL.createObjectURL(blob));
  };

  activity.onerror = function() {
    console.log(this.error);
  };
}