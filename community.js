// Variable to track the currently opened dropdown
let currentDropdown = null;

function toggleDropdown(dropdownId, btnElement) {
    const dropdown = document.getElementById(dropdownId);

    // If a different dropdown is open, close it
    if (currentDropdown && currentDropdown !== dropdown) {
        currentDropdown.style.display = "none";
    }

    // Toggle the clicked dropdown
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        currentDropdown = null;
    } else {
        dropdown.style.display = "block";
        currentDropdown = dropdown;

        // Position the dropdown beside the text
        const btnRect = btnElement.getBoundingClientRect();
        dropdown.style.top = `${btnRect.top}px`;
        dropdown.style.left = `${btnRect.right + 10}px`; // 10px space between text and dropdown
    }
}

// Close dropdown if clicked anywhere else on the page
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        if (currentDropdown) {
            currentDropdown.style.display = "none";
            currentDropdown = null;
        }
    }
}

function compareProgress(friendName) {
    alert("Comparing your progress with " + friendName + "'s progress.");
}

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchName = document.getElementById("search-name").value;
    if (searchName) {
        alert("Searching for or adding " + searchName + " to your friends list.");
        // Implement search or add friend logic here.
    }
});

var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "today"){
			today.style.display = "block";
		}
		else if(currenttab == "month"){
			month.style.display = "block";
		}
		else{
			year.style.display = "block";
		}

	})
})