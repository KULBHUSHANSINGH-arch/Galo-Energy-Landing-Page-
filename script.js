    function submitForm() {
        // You can add logic here to handle form submission, such as sending data to a server.
        alert('Form submitted!');
    }


    function addDateToEmail() {
        // Get the current date
        var currentDate = new Date();
    
        // Format the date as you prefer
        var formattedDate = currentDate.toISOString().slice(0, 10);
    
        // Get the email input element
        var emailInput = document.getElementById("email");
    
        // Add the date to the email content
        emailInput.value += "\n\nDate: " + formattedDate;
    
        // You can also update the displayed date if needed
        var currentDateElement = document.getElementById("currentDate");
        currentDateElement.innerText = formattedDate;
    
        return true; // Continue with form submission
    }
    

    // <!-- ********************* Uploaded Video by Coder*********************** -->

    function uploadVideo() {
        var fileInput = document.getElementById('videoFile');
        var uploadStatus = document.getElementById('uploadStatus');
        
        if (fileInput.files.length > 0) {
            var videoFile = fileInput.files[0];
            
            // You can perform additional checks or send the video file to the server for processing.
            // For this example, let's just display a message indicating successful upload.
            
            uploadStatus.innerText = 'Video uploaded successfully!';
            uploadStatus.style.color = '#4caf50';
        } else {
            uploadStatus.innerText = 'Please choose a video before uploading.';
            uploadStatus.style.color = '#f44336';
        }
    }
    