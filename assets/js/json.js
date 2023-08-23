
function loadMnMleft() {
    fetch("assets/data/menumoreleft.json").then(res => res.json()).then(data =>{
        let h = "";
        for(let c of data)
            h+= `
                <li>
                    <a href="${c.href}" >
                        <span class=${c.class}>
                            <i class="${c.i}"></i>
                        </span>
                        ${c.span}
                    </a>
                <li>
            `;
        var e = document.querySelector(".menu-more");
        e.innerHTML = h; // Thay đổi dòng này để thay thế nội dung bên trong phần tử 
    })
}
function loadMNleft() {
    fetch("assets/data/menuleft.json")
        .then(res => res.json())
        .then(data => {
            let h = "";
            for (let c of data) {
                h += `
                    <a href="${c.href}" class="${c.class}">
                        <span class="icon hover2">
                            <i class="${c.i}"></i>
                        </span>
                        ${c.span}
                    </a>
                `;
            }
            var e = document.querySelector(".menu2__json");
            e.innerHTML = h; // Thay đổi dòng này để thay thế nội dung bên trong phần tử
            const hover2Elements = document.querySelectorAll(".hover2");

            hover2Elements.forEach(function(element) {
                element.addEventListener("mouseenter", function() {
                    element.classList.add("hovered2");
                });
        
                element.addEventListener("mouseleave", function() {
                    element.classList.remove("hovered2"); 
                });
            })
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
}

function loadhdRight() {
    fetch("assets/data/menuhdR.json")
        .then(res => res.json())
        .then(data => {
            let h = "";
            for (let c of data) {
                h += `
                <li>
                    <a href="${c.href}" >
                        <div>
                            ${c.text}
                        </div>
                    </a>
                <li>
                `;
            }
            var e = document.querySelector(".menu");
            e.innerHTML = h; // Thay đổi dòng này để thay thế nội dung bên trong phần tử
        });
}
function loaduser() {
    fetch("assets/data/user.json")
        .then(res => res.json())
        .then(data => {
            let h = "";
            for (let c of data) {
                h += ` 
                <div class="sectin">
            <div class="section1 flex">
                <div class="section__left flex">
                    <img src="${c.imgA}" alt="avatar" class="hover3">
                    <span class="name">
                    <div class="name-date flex">
                    <div class="namee">${c.name}</div>
                    <div class="date">${c.time}</div>
                    </div>
                    <div class="section__Show">
                            <div class="section__ShowUesr flex">
                                <img class="section__Show__img" src="${c.imgA}" alt="avatar">
                                <div class="section__showName">
                                    <p>${c.name}</p>
                                    <p style="opacity: .7;">${c.fName}</p>
                                </div>
                            </div>
                            <div class="section__info flex">
                                <p>
                                    <table>
                                        <tr>
                                            <td>Bài viết</td>
                                        </tr>
                                        <tr>
                                            <td>${c.post}</td>
                                        </tr>
                                    </table>
                                </p>
                                <p>
                                    <table>
                                        <tr>
                                            <td>Followers</td>
                                        </tr>
                                        <tr>
                                            <td>${c.flR}</td>
                                        </tr>
                                    </table>
                                </p>
                                <p>
                                    <table>
                                        <tr>
                                            <td>Following</td>
                                        </tr>
                                        <tr>
                                            <td>${c.flNg}</td>
                                        </tr>
                                    </table>
                                </p>
                            </div>
                            <div class="section__pic flex">
                                <img src="${c.img1}" alt="">
                                <img src="${c.img2}" alt="">
                                <img src="${c.img3}" alt="">
                            </div>
                            <div class="section__fl">
                                <div onclick="changeFollow3(this)">
                                    Following
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
                <div class="section__options"  id="showMenuButton${c.num}">
                    <i class="fa-solid fa-ellipsis skip__ops" style="color: #EEEDF0;" id="skip${c.num}"></i>
                    <div class="options__show" id="menuu${c.num}">
                        <a href="#">
                            <div>
                                Báo cáo
                            </div>
                        </a>
                        <ul class="menu__options">
                            <li>
                                <div class="huy " id="${c.huy}">
                                    ${c.text1}
                                </div>
                            <li>
                            <li>
                                <div>
                                ${c.text2}
                                </div>
                            <li>
                            <li>
                                <div>
                                ${c.text3}
                                </div>
                            <li>
                            <li>
                                <div>
                                ${c.text4}
                                </div>
                            <li>
                            <li>
                                <div>
                                ${c.text5}
                                </div>
                            <li>
                            <li>
                                <div>
                                ${c.text6}
                                </div>
                            <li>
                            <li>
                                <div>
                                ${c.text7}
                                </div>
                            <li>
                        </ul>
                        </div>
                        <div class="cover" id="cover"></div>
                </div>
            </div>
            <div class="picture hover1">
                <img src="${c.Pic}" alt="Pic1" class="imgs">
                <i class="fa-solid fa-heart hearts" ></i>
            </div>
            <div class="action flex">
                <ul class="action__left flex">
                    <li>
                        <i class="fa-regular fa-heart act__heart" style="color: #EEEDF0;" onclick="toggleHeartIcon(this)"></i>
                    </li>
                    <li>
                        <i class="fa-regular fa-comment" style="color: #EEEDF0;" ></i>
                    </li>
                    <li>
                        <i class="fa-regular fa-share-from-square" style="color: #EEEDF0;"></i>
                    </li>
                </ul>
                <p class="action__right">
                    <i class="fa-regular fa-bookmark" style="color: #EEEDF0;" onclick="toggleSaveIcon(this)"></i>
                </p>
            </div>
            <div class="action2">
                <div>
                    ${c.like} lượt thích
                </div>
                <div class="status">
                    ${c.status}
                </div>
                <div>
                    Xem ${c.cmt} bình luận
                </div>
                <div>
                    Thêm bình luận...
                </div>
            </div>
        </div>
            `;
            }
            var e = document.querySelector(".content");
            e.innerHTML = h; // Thay đổi dòng này để thay thế nội dung bên trong phần tử
        const heart = document.querySelectorAll('.hearts');
        const pictures = document.querySelectorAll('.picture');
        const hearts = document.querySelectorAll(".act__heart");
        pictures.forEach((picture, index) => {
            picture.addEventListener('dblclick', () => {
                heart[index].style.visibility = 'visible';
                heart[index].style.transform = 'scale(2)';
                heart[index].style.opacity = '1';

                setTimeout(() => {
                    heart[index].style.transform = 'scale(0.5)';
                    heart[index].style.opacity = '0';
                }, 900);
                "fa-regular", "fa-heart", "act__heart"
                hearts[index].classList.remove("fa-regular", "fa-heart", "act__heart");
                hearts[index].classList.add("fa-solid", "fa-heart", "heart__ed");
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
        const hover3 = document.querySelectorAll('.hover3');
        hover3.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('hovered3');
            });

            element.addEventListener('mouseleave', () => {
                element.classList.remove('hovered3');
            });
        });
        const options = document.querySelectorAll('.section__options');
        const show = document.querySelectorAll('.options__show');
        const icon = document.querySelectorAll('.skip__ops');
        const cv = document.querySelectorAll(".cover");
        const huy = document.querySelectorAll(".huy");
        const section = document.querySelectorAll(".sectin");

        options.forEach((option, index) => {
            option.addEventListener('click', () => {
                if (show[index].style.visibility === "visible") {
                    show[index].style.visibility = "hidden";
                    cv[index].style.visibility = "hidden";
                } else {
                    show[index].style.visibility = "visible";
                    cv[index].style.visibility = "visible";
                    huy[index].addEventListener('click', () => {
                        section[index].remove();
                        data.splice(index, 1);
                    })
                }
            });
        });
        });
        
}
function loadSG() {
    fetch("assets/data/suggest.json")
        .then(res => res.json())
        .then(data => {
            let h = "";
            for (let c of data) {
                h += `
                <div class="sgUser flex">
            <div class="sgUser__left flex">
                <div class="Imgs hover3 ${c.id}">
                </div>
                <div class="sgName">
                    <p>${c.name}</p>
                    <div class="sgShow">
                            <div class="sgShowUesr flex">
                                <img src="${c.imgA}" alt="avatar">
                                <div class="showName">
                                    <p>${c.name}</p>
                                    <p style="opacity: .7;">${c.fName}</p>
                                </div>
                            </div>
                            <div class="sgS__info flex">
                                <p>
                                    <table>
                                        <tr>
                                            <td>Bài viết</td>
                                        </tr>
                                        <tr>
                                            <td>${c.post}</td>
                                        </tr>
                                    </table>
                                </p>
                                <p>
                                    <table>
                                        <tr>
                                            <td>Followers</td>
                                        </tr>
                                        <tr>
                                            <td>${c.flR}</td>
                                        </tr>
                                    </table>
                                </p>
                                <p>
                                    <table>
                                        <tr>
                                            <td>Following</td>
                                        </tr>
                                        <tr>
                                            <td>${c.flNg}</td>
                                        </tr>
                                    </table>
                                </p>
                            </div>
                            <div class="sgS__pic flex">
                                <div class="Img1">
                                    <img src="${c.img1}" alt="">
                                </div>
                                <div class="Img2">
                                    <img src="${c.img2}" alt="">
                                </div>
                                <div class="Img3">
                                    <img src="${c.img3}" alt="">
                                </div>
                            </div>
                            <div class="sgS__fl">
                                <div id="${c.id2}" onclick="changeFollow2(this)">
                                    Follow
                                </div>
                            </div>
                    </div>
                    <p>Đề xuất cho bạn</p>
                </div>
            </div>
            <p id="${c.id}" onclick="changeFollow(this)">Follow</p>
        </div>
                `;
            }
            var e = document.querySelector(".sg__Json");
            e.innerHTML = h; // Thay đổi dòng này để thay thế nội dung bên trong phần tử
            const hoverAside = document.querySelectorAll(".hover3");

            hoverAside.forEach(function(element) {
                element.addEventListener("mouseenter", function() {
                    element.classList.add("hovered3");
                });

                element.addEventListener("mouseleave", function() {
                    element.classList.remove("hovered3"); 
                });
            });
            const cards = document.querySelectorAll(".Imgs");
    let currentIndex = 0;

    function scaleAndRotate() {
      if (currentIndex < cards.length) {
        // cards[currentIndex].style.transform = "scale(1.5)";
        cards[currentIndex].classList.add("f5");
        setTimeout(resetTransform, 200);
      }
    }

    function resetTransform() {
    //   cards[currentIndex].style.transform = "scale(1)";
    cards[currentIndex].classList.remove("f5");
      currentIndex++;
      if (currentIndex < cards.length) {
        setTimeout(scaleAndRotate, 200);
      }
    }

    setTimeout(scaleAndRotate, 1400);
        });
}
window.onload = function (){
    loadMNleft();
    loadMnMleft();
    loadhdRight();
    loaduser();
    loadSG();
}