document.addEventListener("DOMContentLoaded", function() {
    const divElement = document.querySelector(".black");
    
    // Sau khi trang tải xong, đợi 1 giây và sau đó thay đổi opacity của thẻ div.
    setTimeout(function() {
      divElement.style.opacity = "0";
      divElement.style.visibility = "hidden";
    }, 1000);
  });
const images = document.querySelectorAll('.content .image .overlay')
const demo = document.querySelectorAll('.content .image img')
const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.gallery-inner img')
const close = document.querySelector('.close')

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let currentIndex = 0

images.forEach((img, index) => {
	img.addEventListener('click', () => {
		currentIndex = index
		showGallery()
	})
})

function showGallery() {
	currentIndex == images.length - 1
		? next.classList.add('hide')
		: next.classList.remove('hide')

	currentIndex == 0 
    ? prev.classList.add('hide') 
    : prev.classList.remove('hide')

	gallery.classList.add('show')
	galleryImg.src = demo[currentIndex].src
}

close.addEventListener('click', () => {
	gallery.classList.remove('show')
})

next.addEventListener('click', () => {
	currentIndex != images.length - 1 ? currentIndex++ : undefined
	showGallery()
})
prev.addEventListener('click', () => {
	currentIndex != 0 ? currentIndex-- : undefined
	showGallery()
})

// esc click
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27) gallery.classList.remove('show')
})
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
const hearts = document.querySelectorAll('.hearts');
const pictures = document.querySelectorAll('.picture');
const originalIcon = document.querySelector(".act__heart");
pictures.forEach((picture, index) => {
    picture.addEventListener('dblclick', () => {
        hearts[index].style.visibility = 'visible';
        hearts[index].style.transform = 'scale(2)';
        hearts[index].style.opacity = '1';

        setTimeout(() => {
        hearts[index].style.transform = 'scale(0.5)';
        hearts[index].style.opacity = '0';
        }, 900); 
        "fa-regular", "fa-heart", "act__heart"
        originalIcon.classList.remove("fa-regular", "fa-heart", "act__heart");
        originalIcon.classList.add("fa-solid", "fa-heart", "heart__ed");

    });
});
const hover1 = document.querySelectorAll('.hover1');
hover1.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hovered1');
    });

    element.addEventListener('mouseleave', () => {
        element.classList.remove('hovered1');
    });
});
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
            "class": "active",
            "span": "Khám phá",
            "i": "ri-compass-3-line"
        },
        {
            "href" : "/chat.html",
            "class": "",
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
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".hover2");
    let currentIndex = 0;

    function scaleAndRotate() {
      if (currentIndex < cards.length) {
        cards[currentIndex].classList.add("f52");
        setTimeout(resetTransform, 200);
      }
    }

    function resetTransform() {
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
