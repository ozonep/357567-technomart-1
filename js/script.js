let slides = document.getElementsByClassName("deliveryBtn");
let boxes = document.getElementsByClassName("boxes");
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function (e) {
        for (let j = 0; j < slides.length; j++) {
            slides[j].classList.remove('active');
            boxes[j].classList.remove('showing');
        }
        e.target.classList.add('active');
        switch (e.target.innerHTML) {
                        case 'Доставка':
                            boxes[0].classList.add('showing');
                            break;
                        case 'Гарантия':
                            boxes[1].classList.add('showing');
                            break;
                        case 'Кредит':
                            boxes[2].classList.add('showing');
                            break;
                        default:
                            console.log('Sorry');
        }
    });
}