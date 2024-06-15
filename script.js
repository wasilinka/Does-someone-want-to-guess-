const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*10)+1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener("click", play);

function play() {

    const userNumber = document.querySelector("#guess").value;

    if (userNumber < 1 || userNumber > 10) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 10!',
        })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',
        })
    }

    else {
        if(userNumber < answer) {
            Swal.fire('Попробуй число повыше!')
        }

        else if(userNumber > answer) {
            Swal.fire('Попробуй число пониже!')
        }

        else {
            Swal.fire({
                title: 'Победа!!!',
                imageUrl: 'https://plus.unsplash.com/premium_photo-1683121447942-a62eb0aef48e?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'УРАААА!!! ВЫ УГАДАЛИ!!!',
            })
        }
    }
    
}