document.querySelector("label").addEventListener("click",function(){
    axios({
        method: 'post', //통신 방식
        url: '/user/loginCheck', //통신할 페이지
        data: { id: document.querySelector("#id").value,
                pw: document.querySelector("#pw").value } //인자로 보낼 데이터
    }).then(response => {
        location.href='/programmerInfo'
    }).catch(error => {
        alert("아이디, 패스워드가 올바르지 않습니다")
    })
})