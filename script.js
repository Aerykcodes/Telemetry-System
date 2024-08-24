// Function to calculate the current speed based on the stroke-dashoffset
function calculateSpeed() {
    // Get the element
    let meterBar = document.getElementById("meter-bg-bar");
    // Get the current stroke-dashoffset
    let strokeDashoffset = parseFloat(
      window.getComputedStyle(meterBar).getPropertyValue("stroke-dashoffset")
    );
    // Calculate the current speed based on the stroke-dashoffset
    // The maximum stroke-dashoffset is 615, which corresponds to a speed of 0 km/h
    // The minimum stroke-dashoffset is 0, which corresponds to a speed of 180 km/h
    let speed = ((615 - strokeDashoffset) / 615) * 180;
    // Round the speed to the nearest integer
    speed = Math.round(speed);
    return speed;
  }
  // Function to update the speed display
  function updateSpeedDisplay() {
    // Calculate the current speed
    let speed = calculateSpeed();
    // Get the speed display element
    let speedDisplay = document.getElementById("speed");
    // Update the text content of the speed display element
    speedDisplay.textContent = speed;
    // speedDisplay.textContent = speed + ' km/h';
  }
  // Call the updateSpeedDisplay function every 100 milliseconds
  setInterval(updateSpeedDisplay, 10);




  <span id="element"></span>





  <div class="breaks">

  <div class="vid">
  <video width="100" height="240">
    <source src="Gauge.mp4" type="video/mp4"> 
  </video>

</div>

<div class="video">
  <video width="100" height="240">
    <source src="Gauge.mp4" type="video/mp4"> 
  </video>
</div>
</div>