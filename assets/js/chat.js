document.addEventListener("DOMContentLoaded", function() {
    const divElement = document.querySelector(".black");
    
    // Sau khi trang tải xong, đợi 1 giây và sau đó thay đổi opacity của thẻ div.
    setTimeout(function() {
      divElement.style.opacity = "0";
      divElement.style.visibility = "hidden";
    }, 1000);
  });
//MENU MORE LEFT
//MENU MORE LEFT
//MENU MORE LEFT
document.addEventListener("DOMContentLoaded", function() {
    var jsonDataArray = [
        {
            "href" : "#",
            "class": "icon",
            "span" : "Cài đặt",           
            "i": "ri-settings-3-fill"
        },
        {
            "href" : "#",
            "class": "icon",
            "span" : "Hoạt động của bạn",           
            "i": "ri-time-line"
        },
        {
            "href" : "#",
            "class": "icon",
            "span" : "Đã lưu",
            "i": "ri-bookmark-fill"
        },
        {
            "href" : "#",
            "class": "icon",
            "span" : "Đổi giao diện",           
            "i": "ri-moon-fill"
        },
        {
            "href" : "#",
            "class": "icon",
            "span" : "Báo cáo vấn đề",           
            "i": "ri-error-warning-fill"
        },
        {
            "href" : "/login.html",
            "class": "icon",
            "span" : "Đăng xuất",           
            "i": "ri-logout-box-line"
        }
    ];

    var menuInfoA = document.querySelector(".menu-more");

    var htmlContent = "";
    jsonDataArray.forEach(function(menuData) {
        htmlContent += `
            <li>
                <a href="${menuData.href}" >
                    <span class=${menuData.class}>
                        <i class="${menuData.i}"></i>
                    </span>
                    ${menuData.span}
                </a>
            <li>
        `;
    });

    menuInfoA.innerHTML = htmlContent;
});

//MENU LEFT
//MENU LEFT
//MENU LEFT
document.addEventListener("DOMContentLoaded", function() {
    // Dữ liệu JSON giả định với nhiều đối tượng
    var json = [
        {
            "href" : "/index.html",
            "class": "",
            "span": "Trang chủ",
            "i": "ri-home-fill"
        },
        
        {
            "href" : "/explore.html",
            "class": "",
            "span": "Khám phá",
            "i": "ri-compass-3-line"
        },
        {
            "href" : "/chat.html",
            "class": "active",
            "span": "Tin nhắn",
            "i": "ri-message-2-fill"
        },
        {
            "href" : "#",
            "class": "",
            "span": "Gaming",
            "i": "ri-gamepad-fill"
        },
        {
            "href" : "#",
            "class": "",
            "span": "Reels",
            "i": "ri-film-fill"
        },
        
        {
            "href" : "#",
            "class": "",
            "span": "Thông báo",
            "i": "ri-heart-fill"
        },
        {
            "href" : "#",
            "class": "",
            "span": "Tạo bài viết",
            "i": "ri-add-box-fill"
        }
    ];
    var menuInfoA = document.querySelector(".menu2__json");
    var htmlContent = "";
    json.forEach(function(menuData) {
        htmlContent += `
            <a href="${menuData.href}" class="${menuData.class}">
                <span class="icon hover2">
                    <i class="${menuData.i}"></i>
                </span>
                ${menuData.span}
            </a>
        `;
    });

    menuInfoA.innerHTML = htmlContent;

    const hover2Elements = document.querySelectorAll(".hover2");

    hover2Elements.forEach(function(element) {
        element.addEventListener("mouseenter", function() {
            element.classList.add("hovered2");
        });

        element.addEventListener("mouseleave", function() {
            element.classList.remove("hovered2"); 
        });
    });
});

        document.addEventListener("DOMContentLoaded", function () {
            const messageList = document.getElementById("message-list");
            const inputMessage = document.getElementById("input-message");
    
            function addMessage(message, isUserMessage = false) {
                const messageContainer = document.createElement("div");
                messageContainer.classList.add("border__mes2");
    
                const messageElement = document.createElement("div");
                messageElement.textContent = message;
                messageElement.classList.add("user-message");
    
                messageContainer.appendChild(messageElement);
                messageList.appendChild(messageContainer);
                messageList.scrollTop = messageList.scrollHeight;
            }
    
            inputMessage.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    const message = inputMessage.value;
                    addMessage("You: " + message, true);
                    inputMessage.value = "";
                }
            });
        });
    const friendDivs = document.querySelectorAll('.fr.flex');
    const avtC = document.querySelector('.avt_c.flex');
    const avtCImage = avtC.querySelector('img');

    friendDivs.forEach((friendDiv) => {
        friendDiv.addEventListener('click', () => {
            friendDivs.forEach((div) => {
        div.classList.remove('active');
        });

        // Thêm class "active" vào thẻ được click
        friendDiv.classList.add('active');
        const friendName = friendDiv.querySelector('p:nth-child(1)').textContent;
        const activity = friendDiv.querySelector('p:nth-child(2)').textContent;
        const friendImage = friendDiv.querySelector('img').src;

        avtC.querySelector('p:nth-child(1)').textContent = friendName;
        avtC.querySelector('p:nth-child(2)').textContent = activity;
        avtCImage.src = friendImage;
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".hover2");
    let currentIndex = 0;

    function scaleAndRotate() {
      if (currentIndex < cards.length) {
        // cards[currentIndex].style.transform = "scale(1.5)";
        cards[currentIndex].classList.add("f52");
        setTimeout(resetTransform, 200);
      }
    }

    function resetTransform() {
    //   cards[currentIndex].style.transform = "scale(1)";
    cards[currentIndex].classList.remove("f52");
      currentIndex++;
      if (currentIndex < cards.length) {
        setTimeout(scaleAndRotate, 200);
      }
    }

    setTimeout(scaleAndRotate, 1400);
});
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

//Phần sidebar mobile
// Get the show-sidebar button and sidebar elements
const showSidebarButton = document.querySelector('.show-sidebar-button');
const sidebar = document.querySelector('.sidebar');

// Event listener for the show-sidebar button
showSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

// Lấy thẻ h1 "Chat" bằng id
var chatToggle = document.getElementById('chatToggle');
// Lấy phần tử .frs
var frsElement = document.querySelector('.frs');

// Thêm sự kiện nhấn vào thẻ h1 "Chat"
chatToggle.addEventListener('click', function() {
    // Toggle lớp active để hiển thị/ẩn phần .frs
    frsElement.classList.toggle('active');
});

