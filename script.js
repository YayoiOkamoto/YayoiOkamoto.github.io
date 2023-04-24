const target = document.getElementById("target");
const strawberry = document.getElementById("strawberry");
const vanilla = document.getElementById("vanilla");
const chocolate = document.getElementById("chocolate");
const matcha = document.getElementById("matcha");
const eat = document.getElementById("eat");
const new_element1 = document.createElement("img");
const new_element2 = document.createElement("img");
const new_element3 = document.createElement("img");
let clickcount = 1

strawberry.addEventListener("click", function() {
  if (clickcount === 1 ) {
    new_element1.src = "ストロベリー.PNG"
    new_element1.className = "first"
    target.appendChild(new_element1);
    clickcount += 1;
  } else if (clickcount === 2) {
    new_element2.src = "ストロベリー.PNG"
    new_element2.className = "second"
    target.appendChild(new_element2);
    clickcount += 1;
  } else if (clickcount === 3) {
    new_element3.src = "ストロベリー.PNG"
    new_element3.className = "third"
    target.appendChild(new_element3);
    clickcount += 1;
  } else {
    alert("食べ過ぎですよ！");
  }
})

vanilla.addEventListener("click", function() {
  if (clickcount === 1 ) {
    new_element1.src = "バニラ.PNG"
    new_element1.className = "first"
    target.appendChild(new_element1);
    clickcount += 1;
  } else if (clickcount === 2) {
    new_element2.src = "バニラ.PNG"
    new_element2.className = "second"
    target.appendChild(new_element2);
    clickcount += 1;
  } else if (clickcount === 3) {
    new_element3.src = "バニラ.PNG"
    new_element3.className = "third"
    target.appendChild(new_element3);
    clickcount += 1;
  } else {
    alert("食べ過ぎですよ！");
  }
})

chocolate.addEventListener("click", function() {
  if (clickcount === 1 ) {
    new_element1.src = "チョコレート.PNG"
    new_element1.className = "first"
    target.appendChild(new_element1);
    clickcount += 1;
  } else if (clickcount === 2) {
    new_element2.src = "チョコレート.PNG"
    new_element2.className = "second"
    target.appendChild(new_element2);
    clickcount += 1;
  } else if (clickcount === 3) {
    new_element3.src = "チョコレート.PNG"
    new_element3.className = "third"
    target.appendChild(new_element3);
    clickcount += 1;
  } else {
    alert("食べ過ぎですよ！");
  }
})

matcha.addEventListener("click", function() {
  if (clickcount === 1 ) {
    new_element1.src = "抹茶.PNG"
    new_element1.className = "first"
    target.appendChild(new_element1);
    clickcount += 1;
  } else if (clickcount === 2) {
    new_element2.src = "抹茶.PNG"
    new_element2.className = "second"
    target.appendChild(new_element2);
    clickcount += 1;
  } else if (clickcount === 3) {
    new_element3.src = "抹茶.PNG"
    new_element3.className = "third"
    target.appendChild(new_element3);
    clickcount += 1;
  } else {
    alert("食べ過ぎですよ！");
  }
})

eat.addEventListener("click", function() {
  location.reload();
})
