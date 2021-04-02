// // //SELECTORS
// // const hikeExp = document.querySelector(".hike-exp"); //1


// // //EVENTS
// // window.addEventListener('scroll', scrollReveal); //1


// // //FUNCTIONS
// // function scrollReveal() { //1
// //     // console.log(hikeExp);
// //     const hikePos = hikeExp.getBoundingClientRect().top; //1
// //     const windowHeight = window.innerHeight/1.5;  //2
// //     if (hikePos < windowHeight) { //2
// //         hikeExp.style.color = "red"; //2
// //     } //2
// //     console.log("Position:" + hikePos); //1
// //     console.log("Height:"+windowHeight); //2
// //     // if (hikePos < 1) { //1
// //     //     hikeExp.style.color = "red"; //1
// //     // } //1
// // } //1

// //3
// const slide = document.querySelector(".slide");

// let options = {
//     threshold: 0.5
// };


// let observer = new IntersectionObserver(slideAnim, options);

// function slideAnim(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             slide.style.background = 'white';
//         }
//     });
// }

// observer.observe(slide);