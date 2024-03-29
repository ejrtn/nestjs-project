
document.querySelector("#ok").addEventListener("click", async function () {

    let el = document.querySelectorAll("form span")
    for (let i = 0; i < el.length; i++) {
        if (el[i].classList.contains("color-red")) {
            alert("잘못된 부분 확인해주세요")
            return false
        }
        if (el[i].previousElementSibling.value === '') {
            alert('빈칸이 있습니다')
        }
    }

    if(document.querySelector(".codeCheck").title === ''){return false}

    let userDto = {
        id: document.querySelector("#id").value,
        pw: document.querySelector("#pw").value,
        name: document.querySelector("#name").value,
        gender: document.querySelector("#gender").value,
        birthday: document.querySelector("#birthday").value,
        email: document.querySelector("#email").value,
    }

    axios({
        method: 'post', //통신 방식
        url: '/user/joinInsert', //통신할 페이지
        data: userDto //인자로 보낼 데이터
    }).then(response => {
        if (response === 'joinInsert') { location.href = '/' }
    }).catch(error => {
        console.log(error);
    })
})

document.querySelector("#id").addEventListener("focusout", function () {
    if (this.value === "") {
        document.querySelector(".id-comment").classList.add('color-red')
        document.querySelector(".id-comment").textContent = '아이디 입력해주세요.'
    } else {
        axios({
            method: 'post', //통신 방식
            url: '/user/idCheck', //통신할 페이지
            data: { 'id': document.querySelector("#id").value } //인자로 보낼 데이터
        }).then(response => {
            if (response.data === '') {
                document.querySelector(".id-comment").classList.remove('color-red')
                document.querySelector(".id-comment").textContent = '사용 가능합니다.'
            } else {
                document.querySelector(".id-comment").classList.add('color-red')
                document.querySelector(".id-comment").textContent = '중복아이디가 있습니다.'
            }
        }).catch(error => {
            console.log(error);
        })
    }
})


document.querySelector("#pw").addEventListener("focusout", function () {
    if (this.value === "") {
        document.querySelector(".pw-comment").classList.add('color-red')
        document.querySelector(".pw-comment").textContent = '패스워드 입력해주세요.'
    } else {
        document.querySelector(".pw-comment").classList.remove('color-red')
        document.querySelector(".pw-comment").textContent = '사용 가능합니다.'
    }
})

document.querySelector("#pwc").addEventListener("focusout", function () {
    console.log(this.value)
    console.log(document.querySelector("#pw").value)
    if (this.value === "") {
        document.querySelector(".pwc-comment").classList.add('color-red')
        document.querySelector(".pwc-comment").textContent = '패스워드 확인 입력해주세요.'
    } else if (this.value != document.querySelector("#pw").value) {
        document.querySelector(".pwc-comment").classList.add('color-red')
        document.querySelector(".pwc-comment").textContent = '패스워드가 일치하지 않습니다.'
    } else {
        document.querySelector(".pwc-comment").classList.remove('color-red')
        document.querySelector(".pwc-comment").textContent = '사용 가능합니다.'
    }
})

document.querySelector("#name").addEventListener("focusout", function () {
    if (this.value === "") {
        document.querySelector(".name-comment").classList.add('color-red')
        document.querySelector(".name-comment").textContent = '이름 입력해주세요.'
    } else {
        document.querySelector(".name-comment").classList.remove('color-red')
        document.querySelector(".name-comment").textContent = '사용 가능합니다.'
    }
})



document.querySelector("#email_push").addEventListener("click", function () {
    if (this.value === "") {
        document.querySelector(".email-comment").classList.add('color-red')
        document.querySelector(".email-comment").textContent = '이메일 입력해주세요.'
    } else {
        axios({
            method: 'post', //통신 방식
            url: '/user/emailPush', //통신할 페이지
            data: { 'email': document.querySelector("#email").value,
                    'name': document.querySelector("#name").value, } //인자로 보낼 데이터
        }).then(response => {
           document.querySelector("#pushCode").value = response.data
        }).catch(error => {
            console.log(error)
        })
    }
})

document.querySelector(".codeCheck").addEventListener("click",function(){
    if(document.querySelector("#pushCode").value === document.querySelector("#code").value){
        document.querySelector(".codeCheck").title = 'ok'
    }
})