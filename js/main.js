let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleNextClick = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
};

const handlePreviousClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
};

function jumpTo(digit, n){
    digit.setAttribute('data-num', n);
    digit.querySelector('.base').textContent = n;
}

function updateGroup(group, n, flip){
    var digit1 = document.querySelector('.ten'+group);
    var digit2 = document.querySelector('.'+group);
    n = String(n);
    if(n.length == 1) n = '0'+n;
    var num1 = n.substr(0, 1);
    var num2 = n.substr(1, 1);
    if(digit1.getAttribute('data-num') != num1){
        if(flip) flipTo(digit1, num1);
        else jumpTo(digit1, num1);
    }
    if(digit2.getAttribute('data-num') != num2){
        if(flip) flipTo(digit2, num2);
        else jumpTo(digit2, num2);
    }
}

function setTime(flip){
    var t = new Date();
    updateGroup('hour', t.getHours(), flip);
    updateGroup('min', t.getMinutes(), flip);
    updateGroup('sec', t.getSeconds(), flip);
}

document.addEventListener("DOMContentLoaded", function() {
    setTime(false);
    setInterval(function(){
        setTime(true);
    }, 1000);
});
let main = document.getElementById("main")

setTimeout(() => main.style.display="block", 2000);