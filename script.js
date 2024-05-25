window.onload = function() {
    // Get the div element
    var myDiv = document.getElementById('myDiv');

    // Show the div
    myDiv.style.display = 'none';

    // Set a timer to hide the div after 20 seconds (20000 milliseconds)
    setTimeout(function() {
        myDiv.style.display = 'block';
    }, 9000);
};