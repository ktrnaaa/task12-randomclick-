const elDiv = document.querySelector(".elDiv")
const frame = document.querySelector(".elFrame")

console.log(frame.getBoundingClientRect())

elDiv.addEventListener('click', function() {


let randomX = (Math.floor(Math.random() * 500));      
 console.log(randomX);

let randomY = (Math.floor(Math.random() * 500));
console.log(randomY);
        



elDiv.style.transform = `translate(${randomX}px, ${randomY}px)`

})





