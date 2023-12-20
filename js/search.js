const searchInput = document.getElementById("search");
const textList = document
  .getElementById("posts")
  .getElementsByClassName("post");

function qidirish() {
  const searchch = searchInput.value.toLowerCase();

  for (let i = 0; i < textList.length; i++) {
    const malumot = textList[i].textContent.toLowerCase();

    if (malumot.indexOf(searchch) > -1) {
      textList[i].style.display = "";
    } else {
      textList[i].style.display = "none";
    }
  }
}

searchInput.addEventListener("input", qidirish);
