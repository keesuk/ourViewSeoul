export default () => {
	self.onmessage = function(e) { // without self, onmessage is not defined
    console.log('Message received from main script');
    var workerResult = 'Received from main: ' + (e.data);
    console.log('Posting message back to main script');
    self.postMessage(workerResult); // here it's working without self 
  }
}
