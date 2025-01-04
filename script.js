// Select all draggable items and the left and right drop zones
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

// Loop through each draggable item and add drag-and-drop events
for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target; // Store the selected item for dragging

        // Allow the right box to accept dragged items
        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault(); // Prevent default to allow drop
        });

        // Drop the item in the right box
        rightBox.addEventListener("drop", function (e) {
            rightBox.appendChild(selected); // Append item to right box
            selected = null; // Clear the selection
        });

        // Allow the left box to accept dragged items
        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault(); // Prevent default to allow drop
        });

        // Drop the item back into the left box
        leftBox.addEventListener("drop", function (e) {
            leftBox.appendChild(selected); // Append item to left box
            selected = null; // Clear the selection
        });
    });
}
