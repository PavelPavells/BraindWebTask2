function showModalWindow() {
    const modalWindow = document.getElementById("popup-window"); //Find Pop-up window
    if (modalWindow.style.display === 'block') {   // Checking for the existence of only one window and dimming
        return;
    }
    const substrate = document.createElement("div"); // Substrate layer
    substrate.id = "shadow"; // Id to intercept the style
    document.body.appendChild(substrate); //Add block "div" to tree
    modalWindow.style.display = "block"; //Show Modal Window
    const noneScrollX = window.pageXOffset;  // Delete scroll X
    const noneScrollY = window.pageYOffset;  // Delete scroll Y
    window.onscroll = () => { 
        window.scrollTo(noneScrollX, noneScrollY); // Function to prevent scrolling
    };
    const closeButton = document.getElementById("close-button"); // Button for close Modal Window
    substrate.onclick = () => {  //Function for delete Pop-up Window
        substrate.parentNode.removeChild(substrate);
        modalWindow.style.display = 'none';
        window.onscroll = '';
        return false;
    };
    closeButton.onclick = substrate.onclick;
}

