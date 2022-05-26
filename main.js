const search = document.querySelector(".search-bar");
const list = document.querySelector(".list");

let array = ["apple", "banana", "orange",];
display(array);
function display(array) {
    list.innerHTML = "";
    if(array.length=== 0){
    newLi = document.createElement("li");
    newLi.textContent = "no result found!";
    list.append(newLi);
    newLi.classList.add("no-result-found")
    }
  for (const item of array) {
    newLi = document.createElement("li");
    newLi.textContent = item;
    list.append(newLi);
  }
}

search.oninput = function () {
    const filterArr = array.filter(function (v) {
        return v.includes(search.value);
    });
    display(filterArr);
}
