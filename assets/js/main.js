document.addEventListener("DOMContentLoaded", function() {
  const divElement = document.querySelector(".black");
  
  // Sau khi trang tải xong, đợi 1 giây và sau đó thay đổi opacity của thẻ div.
  setTimeout(function() {
    divElement.style.opacity = "0";
    divElement.style.visibility = "hidden";
  }, 1000);
});

function showMenu() {
    var menu = document.getElementById("menuu");
    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
    } else {
        menu.style.visibility = "visible";
    }    
    document.addEventListener("click", function(event) {
        var a = document.getElementById("menuu");
        var b = document.getElementById("showMenuButton");
        var c = document.getElementById('skip');
        // Kiểm tra xem phần tử được click có nằm trong menu hoặc button hay không
        if (event.target !== a && event.target !== b&& event.target !== c) {
            // Nếu không, ẩn menu đi
            menu.style.visibility = "hidden";
        }
    });
}
function showMenu3() {
    var menu = document.getElementById("menuu3");
    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
    } else {
        menu.style.visibility = "visible";
    }    
    document.addEventListener("click", function(event) {
        var a = document.getElementById("menuu3");
        var b = document.getElementById("showMenuButton3");
        var c = document.getElementById('skip3');
        // Kiểm tra xem phần tử được click có nằm trong menu hoặc button hay không
        if (event.target !== a && event.target !== b&& event.target !== c) {
            // Nếu không, ẩn menu đi
            menu.style.visibility = "hidden";
        }
    });
}
function changeFollow(element) {
    var idValue = `${element.id}-2`;
    var y = document.getElementById(idValue);
    if (element.innerHTML === "Following") {
        element.innerHTML = "Follow";
        element.style.color = "cornflowerblue";
        y.innerHTML = "Follow";
        y.style.color = "white";
        y.style.backgroundColor = "cornflowerblue";
    } else {
        element.innerHTML = "Following";
        element.style.color = "grey";
        y.innerHTML = "Following";
        y.style.color = "white";
        y.style.backgroundColor = "dimgrey";

    }
}
function changeFollow2(element) {
    var str =element.id;
    var idValue = str.slice(0, 3);
    var y = document.getElementById(idValue);
    if (element.innerHTML === "Following") {
        y.innerHTML = "Follow";
        y.style.color = "cornflowerblue";
        element.innerHTML = "Follow";
        element.style.color = "white";
        element.style.backgroundColor = "cornflowerblue";
    } else {
        y.innerHTML = "Following";
        y.style.color = "grey";
        element.innerHTML = "Following";
        element.style.color = "white";
        element.style.backgroundColor = "dimgrey";

    }
}
function changeFollow3(element) {
    if (element.innerHTML === "Following") {
        element.innerHTML = "Follow";
        element.style.color = "white";
        element.style.backgroundColor = "cornflowerblue";
    } else {
        element.innerHTML = "Following";
        element.style.color = "white";
        element.style.backgroundColor = "dimgrey";
    }
}
function toggleHeartIcon(element) {
    if (element.classList.contains("fa-regular")) {
        element.classList.remove("fa-regular", "fa-heart", "act__heart");
        element.classList.add("fa-solid", "fa-heart","heart__ed");
    } else if (element.classList.contains("fa-solid", "fa-heart","heart__ed")) {
        element.classList.remove("fa-solid", "fa-heart","heart__ed");
        element.classList.add("fa-regular", "fa-heart", "act__heart");
    }
}
function toggleSaveIcon(element) {
    if (element.classList.contains("fa-regular")) {
        element.classList.remove("fa-regular", "fa-bookmark");
        element.classList.add("fa-solid", "fa-bookmark");
    } else if (element.classList.contains("fa-solid", "fa-bookmark")) {
        element.classList.remove("fa-solid", "fa-bookmark");
        element.classList.add("fa-regular", "fa-bookmark");
    }
}
//Phần sidebar mobile
// Get the show-sidebar button and sidebar elements
const showSidebarButton = document.querySelector('.show-sidebar-button');
const sidebar = document.querySelector('.sidebar');

// Event listener for the show-sidebar button
showSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    var button = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  document.getElementById("scrollTopButton").addEventListener("click", function() {
    scrollToTop();
  });

  function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
  }
