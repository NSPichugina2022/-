const DeleteElement = () => {
    const button3 = document.querySelector('.btn-delete');
    button3.addEventListener('click', function() {
        const inputThird = document.getElementById('delImg');
        while(inputThird.value > 0) {
            const delElem = document.querySelector('.img1');
            delElem.remove();
            inputThird.value--};
        })
        }

        DeleteElement();

    