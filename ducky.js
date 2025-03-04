"use strict";
window.onload = function () {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  let duck = document.createElement("div");
  duck.classList.add("duck");

  function randomPosition(obj) {
    let posX = Math.floor(Math.random() * (innerWidth - 200));
    let posY = Math.floor(Math.random() * (innerHeight - 200));
    obj.style.left = posX + "px";
    obj.style.top = posY + "px";
    return obj;
  }
  randomPosition(duck);
  body.appendChild(duck);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
  setInterval(() => {
    duck.classList.toggle("flap");
  }, 250);

  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"
  function moveDuck(obj) {
    let posX = Math.floor(Math.random() * (window.innerWidth - 200));
    let posY = Math.floor(Math.random() * (window.innerHeight - 200));
    obj.style.left = posX + "px";
    obj.style.top = posY + "px";
    return obj;
  }

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)
  setInterval(() => {
    moveDuck(duck);
  }, 1000);
  //==>My answer - We ran the setInterval function to run every second and inside the setInterval function we would run the moveDuck function with duckDiv as its arguement.<===

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  function createDuck() {
    let newDuck = document.createElement("div");
    newDuck.classList.add("duck");
    randomPosition(newDuck);
    body.appendChild(newDuck);
    setInterval(() => {
      newDuck.classList.toggle("flap");
    }, 250);
    setInterval(() => {
      moveDuck(newDuck);
    }, 1000);
    return newDuck;
  }

  for (let i = 1; i <= 5; i++) {
    createDuck();
  }

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //  the duck when you click on it!

  let ducks = document.querySelectorAll("div");

  ducks.forEach(function (item) {
    item.addEventListener("click", () => {
      item.classList.add("shot");
      setTimeout(() => {
        // ducks.body.removeChild();
        item.remove();
      }, 1000);
      // console.log(ducks);
      // console.log(ducks.length);
    });
  });
  // console.log(body.children);
  // console.log(body.children.length);
  setTimeout(() => {
    if (body.children.length === 2) {
      checkForWinner();
    }
  }, 10000);

  function checkForWinner() {
    alert("Congrats you won!!!");
  }

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?
  //

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // Done, you have accomplish another level of skill
};
