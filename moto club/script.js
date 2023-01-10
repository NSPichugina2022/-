const CloneItem1 = () => {
    const item = document.getElementById('firstSection');
    const cloneElement = item.cloneNode(true);
    const elems = document.querySelector('.item1');
    elems.after(cloneElement);
}

const CloneItem2 = () => {
    const item = document.getElementById('secondSection');
    const cloneElement = item.cloneNode(true);
    const elems = document.querySelector('.item2');
    elems.after(cloneElement);
}

const CloneItem3 = () => {
    const item = document.getElementById('thirdSection');
    const cloneElement = item.cloneNode(true);
    const elems = document.querySelector('.item3');
    elems.after(cloneElement);
}







   





