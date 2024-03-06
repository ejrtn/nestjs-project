
document.querySelector("#ok").addEventListener("click", async function () {
    let userDto = {
        id: document.querySelector("#id").value,
        pw: document.querySelector("#pw").value,
        name: document.querySelector("#name").value,
        gender: document.querySelector("#gender").value,
        birthday: document.querySelector("#birthday").value,
        email: document.querySelector("#email").value,
        phon: document.querySelector("#phon").value,
    }
    await axios({
        method: 'post', //통신 방식
        url: '/user/joinInsert', //통신할 페이지
        data: userDto //인자로 보낼 데이터
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
})