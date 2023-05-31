
    function navigateToPage(pageId) {
      // Hide all pages
      const pages = document.getElementsByTagName("div");
      for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
      }

      // Show the selected page
      const selectedPage = document.getElementById(pageId);
      selectedPage.style.display = "block";
      
    }

    //toggleMenu for the menu button

    function toggleMenu() {
      const menuItems = document.getElementById("menu-items");
      menuItems.style.display = menuItems.style.display === "none" ? "block" : "none";
    }
    //Alert message when you press help to let you know that the message with through
    function confirmHelp() {
      alert("Help is on the way!");
    }