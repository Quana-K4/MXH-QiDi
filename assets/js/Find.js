//GỢI Ý TÌM KIẾM
$(document).ready(function () {
	let keywords = ["Zoro", "Messi", "Isagi", "Chopper", "Doflamingo", "Law"];
	$("#TKiem").on("keyup focus", function () {
	  let t = $(this).val();
  
	  let h = "";
	  for (let c of keywords) {
		if (c.indexOf(t) >= 0)
		  h += `<li><a href="javascript:;">${c}</a></li>`;
	  }
	  $("#de-xuat").html(h);
	});
  
	$("#de-xuat").on("click", "a", function () {
	  let t = $(this).text();
	  $("#TKiem").val(t);
	  $("#de-xuat").html("");
	});
  
  });
  //TÌM KIẾM
  document.getElementById("btnSearch").addEventListener("click", function () {
	  var searchValue = document.getElementById("TKiem").value;
	  var titleDivs = document.getElementsByClassName("sectin");
	  // Xóa màu nền highlight của các kết quả tìm kiếm cũ
	  for (var i = 0; i < titleDivs.length; i++) {
		var links = titleDivs[i].getElementsByClassName("section1");
		if (links.length > 0) {
		  links[0].style.backgroundColor = ""; // Đặt màu nền về trắng để xóa highlight
		}
	  }
  
	// Tìm kiếm trong danh sách các tiêu đề
	var foundIndex = -1;
	for (var i = 0; i < titleDivs.length; i++) {
	  if (titleDivs[i].textContent.includes(searchValue)) {
		foundIndex = i;
		break;
	  }
	}
  
	if (foundIndex !== -1) {
	  var links = titleDivs[foundIndex].getElementsByClassName("section1");
	  if (links.length > 0) {
		links[0].style.backgroundColor = "red"; // Thay đổi màu nền để làm nổi bật
	  }
	}
  });