document.addEventListener("DOMContentLoaded", function() {
    // Load details from localStorage on profile.html
    if (document.getElementById("profilePic")) {
        const profilePic = localStorage.getItem("profilePic") || "default-profile.png";
        const userName = localStorage.getItem("userName") || "John Doe";
        const userAge = localStorage.getItem("userAge") || "30";
        const userSex = localStorage.getItem("userSex") || "Male";
        const userPhone = localStorage.getItem("userPhone") || "+1234567890";
        const userHeight = localStorage.getItem("userHeight") || "5'9\"";
        const userWeight = localStorage.getItem("userWeight") || "70kg";
        const userEmail = localStorage.getItem("userEmail") || "johndoe@example.com";

        document.getElementById("profilePic").src = profilePic;
        document.getElementById("userName").textContent = userName;
        document.getElementById("userAge").textContent = userAge;
        document.getElementById("userSex").textContent = userSex;
        document.getElementById("userPhone").textContent = userPhone;
        document.getElementById("userHeight").textContent = userHeight;
        document.getElementById("userWeight").textContent = userWeight;
        document.getElementById("userEmail").textContent = userEmail;
    }

    // Save details to localStorage on update.html
    if (document.getElementById("saveDetailsButton")) {
        document.getElementById("saveDetailsButton").addEventListener("click", function() {
            const reader = new FileReader();
            const profilePicFile = document.getElementById("profilePicInput").files[0];
            if (profilePicFile) {
                reader.readAsDataURL(profilePicFile);
                reader.onloadend = function() {
                    localStorage.setItem("profilePic", reader.result);
                };
            }

            localStorage.setItem("userName", document.getElementById("name").value);
            localStorage.setItem("userAge", document.getElementById("age").value);
            localStorage.setItem("userSex", document.getElementById("sex").value);
            localStorage.setItem("userPhone", document.getElementById("phone").value);
            localStorage.setItem("userHeight", document.getElementById("height").value);
            localStorage.setItem("userWeight", document.getElementById("weight").value);
            localStorage.setItem("userEmail", document.getElementById("email").value);

            // Redirect to profile.html
            window.location.href = "profile.html";
        });
    }

    // Pre-fill update form with existing details
    if (document.getElementById("name")) {
        document.getElementById("name").value = localStorage.getItem("userName") || "";
        document.getElementById("age").value = localStorage.getItem("userAge") || "";
        document.getElementById("sex").value = localStorage.getItem("userSex") || "Male";
        document.getElementById("phone").value = localStorage.getItem("userPhone") || "";
        document.getElementById("height").value = localStorage.getItem("userHeight") || "";
        document.getElementById("weight").value = localStorage.getItem("userWeight") || "";
        document.getElementById("email").value = localStorage.getItem("userEmail") || "";
    }
});

// /=============== SHOW MENU ===============/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
})
}
