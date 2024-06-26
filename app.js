// Function to search users
const searchUsers = () => {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let x = document.querySelectorAll('.userList');

  x.forEach(item => {
    if (!item.innerHTML.toLowerCase().includes(input)) {
      item.style.display = "none";
    } else {
      item.style.display = "list-item";
    }
  });
}

// Adding event listener to search button
document.getElementById('searchButton').addEventListener('click', searchUsers);


// Adding close button to each list item
document.querySelectorAll("LI").forEach(item => {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);
});

// Click on a close button to hide the current list item
document.querySelectorAll(".close").forEach(item => {
  item.addEventListener("click", function() {
    let div = this.parentElement;
    div.style.display = "none";
  });
});

// Add a "checked" symbol when clicking on a list item
document.querySelector('ul').addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
const newElement = () => {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Click on a close button to hide the current list item for dynamically added items
  span.addEventListener("click", function() {
    let div = this.parentElement;
    div.style.display = "none";
  });
}
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}