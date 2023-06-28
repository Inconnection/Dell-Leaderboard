// Get the modal element
// var addRowModal = document.getElementById("add-row-modal");

// Get the button that opens the modal
// var addRowBtn = document.getElementById("add-row-btn");

// Get the <span> element that closes the modal
// var closeBtn = document.getElementsByClassName("close")[0];

// Get the form and input elements
// var form = document.querySelector("#add-row-modal form");
// var nameInput = document.querySelector("#name-input");
// var phoneInput = document.querySelector("#phone-input");
// var lapTimeInput = document.querySelector("#lap-time-input");

// Get the submit and cancel buttons
// var submitBtn = document.getElementById("submit-btn");
// var cancelBtn = document.getElementById("cancel-btn");

// When the user clicks on the button, open the modal
// addRowBtn.onclick = function() {
//   addRowModal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
// closeBtn.onclick = function() {
//   addRowModal.style.display = "none";
// };

// When the user clicks outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == addRowModal) {
//     addRowModal.style.display = "none";
//   }
// };


// When the user submits the form, create a new row and hide the modal
// submitBtn.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
//   event.preventDefault();

  // Get the values from the input fields
//   var name = nameInput.value;
//   var lapTime = lapTimeInput.value;

  // Create a new table row and cells
//   var newRow = document.createElement("tr");
//   var nameCell = document.createElement("td");
//   var lapTimeCell = document.createElement("td");

  // Add the input values to the cells
//   nameCell.innerText = name;
//   lapTimeCell.innerText = lapTime;

  // Add the cells to the new row
//   newRow.appendChild(nameCell);
//   newRow.appendChild(lapTimeCell);

  // Add the new row to the table
//   var tableBody = document.querySelector("table tbody");
//   tableBody.appendChild(newRow);

  // Clear the input fields
//   nameInput.value = "";
//   lapTimeInput.value = "";

  // Hide the modal
//   addRowModal.style.display = "none";

  // Save the data to local storage
//   var data = JSON.parse(localStorage.getItem("leaderboard")) || [];
//   data.push({ name: name, lapTime: lapTime });
//   localStorage.setItem("leaderboard", JSON.stringify(data));

  // Sort the table by lap time column
//   sortTableByLapTime(1);
// });


// Sort the table by lap time and name
// function sortTableByLapTime() {
//   var table = document.querySelector("table");
//   var rows = Array.from(table.querySelectorAll("tr")).slice(1);
//   var sortedRows = rows.sort(function(row1, row2) {
//     var lapTime1 = parseInt(row1.querySelector("td:last-child").innerText.split(":").reduce((acc, time) => (60 * acc) + +time));
//     var lapTime2 = parseInt(row2.querySelector("td:last-child").innerText.split(":").reduce((acc, time) => (60 * acc) + +time));
//     if (lapTime1 === lapTime2) {
//       var name1 = row1.querySelector("td:first-child").innerText;
//       var name2 = row2.querySelector("td:first-child").innerText;
//       return name1.localeCompare(name2);
//     }
//     return lapTime1 - lapTime2;
//   });
//   sortedRows.forEach(function(row) {
//     table.querySelector("tbody").appendChild(row);
//   });

//   const lapTimeCells = table.querySelectorAll("tbody td:last-child");

  // Check if lap time cells were found
//   if (lapTimeCells.length === 0) {
//     console.log("No lap time cells found");
//     return;
//   }

  // Convert lap times to seconds
//   const lapTimesInSeconds = [...lapTimeCells].map(cell => {
//     const timeParts = cell.textContent.split(":");
//     const minutes = parseInt(timeParts[0]);
//     const seconds = parseInt(timeParts[1]);
//     return (minutes * 60) + seconds;
//   });

  // Sort lap times in ascending order
//   const sortedLapTimesInSeconds = lapTimesInSeconds.slice().sort((a, b) => a - b);

  // Handle tie cases
//   const lapTimeCounts = {};
//   lapTimesInSeconds.forEach(lapTime => {
//     lapTimeCounts[lapTime] = (lapTimeCounts[lapTime] || 0) + 1;
//   });

// }

// Call the sortTableByLapTime function to sort the table on page load
// sortTableByLapTime();


// Load the data from local storage when the page is loaded
// window.onload = function() {
//   var data = JSON.parse(localStorage.getItem("leaderboard")) || [];

  // Create a new table row for each item in the data array
//   data.forEach(function(item) {
    // var newRow = document.createElement("tr");
    // var nameCell = document.createElement("td");
    // var phoneCell = document.createElement("td");
    // var lapTimeCell = document.createElement("td");

    // nameCell.innerText = item.name;
    // phoneCell.innerText = item.phone;
    // lapTimeCell
    // lapTimeCell.innerText = item.lapTime;
    // newRow.appendChild(nameCell);
    // newRow.appendChild(phoneCell);
//     newRow.appendChild(lapTimeCell);
//     var tableBody = document.querySelector("table tbody");
//     tableBody.appendChild(newRow);
//   });
    // Sort the table by lap time
//     sortTableByLapTime(1);
// };


// Add an event listener to the form to save the data to local storage
// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var name = nameInput.value;
  // var phone = phoneInput.value;
//   var lapTime = lapTimeInput.value;

  // Create a new object to represent the row data
//   var row = { name: name, lapTime: lapTime };

  // Add the new row object to the data array
//   data.push(row);

  // Save the data to local storage
//   localStorage.setItem("leaderboard", JSON.stringify(data));

  // Create a new table row for the new data and add it to the table
//   var newRow = document.createElement("tr");
//   var nameCell = document.createElement("td");
  // var phoneCell = document.createElement("td");
//   var lapTimeCell = document.createElement("td");

//   nameCell.innerText = name;
  // phoneCell.innerText = phone;
//   lapTimeCell.innerText = lapTime;
//   newRow.appendChild(nameCell);
  // newRow.appendChild(phoneCell);
//   newRow.appendChild(lapTimeCell);
//   var tableBody = document.querySelector("table tbody");
//   tableBody.appendChild(newRow);

  // Sort the table by lap time
//   sortTableByLapTime();
// });


// EXPORT TO EXCEL BUTTON //

// const exportBtn = document.getElementById("export-btn");
// exportBtn.addEventListener("click", exportData);

// function exportData() {
//   console.log("Export button clicked!");
  // Get the data from local storage
//   const data = JSON.parse(localStorage.getItem("leaderboard")) || [];

  // Create a new workbook and worksheet
//   const workbook = XLSX.utils.book_new();
//   const worksheet = XLSX.utils.json_to_sheet(data);

  // Add the worksheet to the workbook
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Leaderboard");

  // Save the workbook as a file
//   const date = new Date().toISOString().slice(0, 10);
//   const filename = `Leaderboard-${date}.xlsx`;
//   XLSX.writeFile(workbook, filename);
// }



// RESETTING THE TABLE ====================== //

// select the table body element
// const tableBody = document.querySelector('tbody');

// function to reset the table
// function resetTable() {
  // remove all rows from the table body
//   while (tableBody.firstChild) {
//     tableBody.removeChild(tableBody.firstChild);
//   }
// }

// add an event listener to the reset button
// const resetBtn = document.querySelector('#reset-btn');
// resetBtn.addEventListener('click', resetTable);


// function resetTable() {
  // Reset the table body
//   const tbody = document.querySelector('tbody');
//   tbody.innerHTML = '';

  // Update the leaderboard array and save it in localStorage
//   leaderboard = [];
//   localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
// }

// let leaderboard = [];

// Check if there's a saved leaderboard in localStorage
// const storedLeaderboard = localStorage.getItem('leaderboard');
// if (storedLeaderboard) {
//   leaderboard = JSON.parse(storedLeaderboard);
// }






window.addEventListener('DOMContentLoaded', function () {
  // Get the modal element
  var modal = document.getElementById('popup-modal');

  // Get the top team element
  var topTeamElement = document.getElementById('top-team');

  // Set the top team name
  var topTeamName = 'Medium Business'; // Replace with the actual top team name from the leaderboard

  // Clear the content of the top team element
  topTeamElement.textContent = '';

  // Delay before typing animation starts
  var initialDelay = 500; // Adjust the initial delay duration (in milliseconds)
  setTimeout(function () {
    // Typing animation
    var currentIndex = 0;
    var typingInterval = setInterval(function () {
      // Check if all characters have been typed
      if (currentIndex >= topTeamName.length) {
        clearInterval(typingInterval);
        return;
      }

      // Append the next character to the top team element
      topTeamElement.textContent += topTeamName[currentIndex];

      // Move to the next character
      currentIndex++;
    }, 200); // Adjust the interval duration (in milliseconds) for a slower animation
  }, initialDelay);

  // Show the modal with an easing transition
  modal.style.opacity = '0';
  modal.style.transform = 'translateY(-50px)';
  modal.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
  modal.style.display = 'block';
  setTimeout(function () {
    modal.style.opacity = '1';
    modal.style.transform = 'translateY(0)';
  }, 100);

  // Add confetti effect with an easing transition
  var canvas = document.getElementById('confetti-canvas');
  var ctx = canvas.getContext('2d');

  // Resize the canvas to fill the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Confetti colors
  var colors = [
    [6, 114, 203],   // RGB color code for '#0672cb'
    [128, 199, 251], // RGB color code for '#80c7fb'
    [27, 87, 68]     // RGB color code for '#1b5744'
  ];

  // Create confetti particles
  var particles = [];
  for (var i = 0; i < 100; i++) {
    particles.push(createParticle());
  }

  // Animation loop
  var startTime = Date.now();
  function animate() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
      var particle = particles[i];
      particle.y += particle.speed;

      // If the particle reaches the bottom of the screen, reset its position
      if (particle.y > canvas.height) {
        particle.y = 0;
      }

      // Calculate opacity based on time elapsed
      var fadeTime = 6000; // Duration for the confetti to fade out (in milliseconds)
      var opacity = 1 - (elapsedTime / fadeTime);
      opacity = Math.max(opacity, 0); // Ensure opacity doesn't go below 0

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, ${opacity})`;
      ctx.fill();
    }

    // Slide the modal down and hide it after 5 seconds
    if (elapsedTime < 6000) {
      requestAnimationFrame(animate);
    } else {
      modal.style.transition = 'transform 0.7s ease';
      modal.style.transform = 'translateY(100%)';
      setTimeout(function () {
        modal.style.display = 'none';
      }, 500);
    }
  }

  animate();

  // Function to create a confetti particle
  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }
});




