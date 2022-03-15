let title = document.querySelector("#title");
let phone = document.querySelector("#phone");

function cutLetters(text, isMinus) {
  console.log(text.length);
  var newInner = "";
  var angle = 12;
  if (isMinus) {
    angle = -10;
  }
  for (i = 0; i < text.length; i++) {
    newInner += `<span class="letter letter${i}" style="transform: rotate(${
      i * angle
    }deg);">${text[i]}</span>`;
  }
  return newInner;
}

title.innerHTML = cutLetters(title.innerText, true);
phone.innerHTML = cutLetters(phone.innerText, false);
