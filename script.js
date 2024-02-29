let printButton = document.querySelector(".print")
let personList = document.querySelector(".person")

let firstName = "Maya";
let lastName = "Angelou";
let knownFor = [" poet", " singer", " memoirist", " civil rights activist"]
let birthYear = 1928;

let person = [firstName, lastName, knownFor, birthYear];

printButton.addEventListener('click', () => {
// 1. Use a forEach loop to append the items in the `person` array to the "person" unordered list.
//  - Select the array.
//  - Add your forEach loop.
//  - Create a list item.
//  - Update the created list item element to the array info.
//  - Append to the person list.
  person.forEach(printEl => {
    let li = document.createElement("li");
          li.textContent = printEl;
    personList.appendChild(li);
  })

})
