document.querySelector(".numberPush").addEventListener("click",function(){
    const id = document.querySelector("#id").value
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value

    if(id === '') {
        alert("아이디 입력해주세요")
    }else if(name === '') {
        alert("이름 입력해주세요")
    }else if(email === '') {
        alert('핸드폰 번호 입력해주세요')
    }else{

    }
})