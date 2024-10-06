/**
 * the frequency histogram
 *
 * @param {string} selector
 * @constructor
 */
const FrequencyBars = function (selector) {
  this.$canvas = document.querySelector(selector);
  this.$canvas.width = document.body.clientWidth;
  this.$canvas.height = document.body.clientHeight / 2;
  this.canvasContext = this.$canvas.getContext("2d");
};

/**
 * @param {Uint8Array} data
 */
FrequencyBars.prototype.update = function (data) {
  // This function updates the frequency bars visualization on the canvas
  
  const length = 64; // Only display the first 64 frequency bins (low frequency range)
  const width = this.$canvas.width / length - 0.5; // Calculate width of each bar
  
  // Clear the entire canvas
  this.canvasContext.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  
  // Draw bars for each frequency bin
  for (var i = 0; i < length; i += 1) {
    this.canvasContext.fillStyle = "#393a3b"; // Set color of bars
    
    // Draw a rectangle for each frequency bin
    this.canvasContext.fillRect(
      i * (width + 0.5), // X position of the bar
      this.$canvas.height - data[i], // Y position (start from bottom)
      width, // Width of the bar
      data[i] // Height of the bar (amplitude of the frequency)
    );
  }
};
