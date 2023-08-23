document.addEventListener("DOMContentLoaded", function() {
	const divElement = document.querySelector(".black");
	
	// Sau khi trang tải xong, đợi 1 giây và sau đó thay đổi opacity của thẻ div.
	setTimeout(function() {
	  divElement.style.opacity = "0";
	  divElement.style.visibility = "hidden";
	}, 1000);
  });
const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
	small.innerText = ''
}

// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email không đúng')
	}
}

// Check required fields
function checkRequired(inputArr) {
	let isRequired = false
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} bắt buộc`)
			isRequired = true
		} else {
			showSuccess(input)
		}
	})

	return isRequired
}

// Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} phải có ít nhất ${min} ký tự`
		)
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} phải ít hơn ${max} ký tự`
		)
	} else {
		showSuccess(input)
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Mật khẩu yếu')
	}
}

// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([username, email, password, password2])) {
		checkLength(username, 3, 15)
		checkLength(password, 6, 25)
		checkEmail(email)
		checkPasswordsMatch(password, password2)
	}
})


// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15)
        checkLength(password, 6, 25)
        checkEmail(email)
        checkPasswordsMatch(password, password2)

        // Kiểm tra nếu không có lỗi
        if (!document.querySelectorAll('.error').length) {
            // Chuyển hướng đến trang index.html
            window.location.href = 'index.html';
        }
    }
})

