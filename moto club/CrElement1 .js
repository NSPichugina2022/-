const CrElement1 = () => {
    const button1 = document.querySelector('.btn-add1');
    button1.addEventListener('click', function () {
        const inputFirst = document.getElementById('quantity');
        while (inputFirst.value > 0) {
            const crEl = document.querySelector('.img-el1');
            const el = document.createElement('img'); 
            el.setAttribute('src', 'img/Ural.jpg');
            el.classList.add('image');
            crEl.append(el);
            inputFirst.value--};
        })
    }

