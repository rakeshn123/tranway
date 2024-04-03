document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var resume = document.getElementById("resume").files[0];
    
    
    var subject = "Job Application from " + fullName;
    var body = "Please find attached my resume for the job application.";
    
    
    var emailAddress = "careers@tranwayinc.com";
    
    
    var mailtoLink = "mailto:" + encodeURIComponent(emailAddress) +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);
    
    // Trigger the link to open default email client
    window.location.href = mailtoLink;
  });
  