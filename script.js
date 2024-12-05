const sun = document.querySelector(".img-sun");
const moon = document.querySelector(".img-moon");
const bgDarkDesktop = document.querySelector(".bg-desktop-dark");
// console.log(bgDarkDesktop);
const bgDarkMobile = document.querySelector(".bg-mobile-dark");
const bgLightDesktop = document.querySelector(".bg-desktop-light");
const bgLightMobile = document.querySelector(".bg-mobile-light");
const body = document.querySelector(".body");
const inputBox = document.querySelector(".input-box");
// console.log(inputBox.value);
const taskli = document.querySelector(".tasks");
// console.log(taskli);
const mobileLinks = document.querySelector(".mobile-links");
const desktopLinks = document.querySelector(".desktop-link");
// console.log(desktopLinks);
let taskAr = [];
let completedAr = [];
let Active = [];
const taskContainer = document.querySelector(".input-bar");
const itemsLeft = document.querySelector(".items-left");
const completed = document.querySelector(".completed");
const activeTask = document.querySelector(".Active-task");
const All = document.querySelector(".All-tasks");
const clearComplete = document.querySelector(".clear-completed");
let item = false;
let licounter = 0;
const itemLeftMobile = document.querySelector(".items-left-mobile");
const clearCompleteMobile = document.querySelector(".clear-completed-mobile");

// sun.addEventListener("click", (e) => {});
moon.addEventListener("click", (e) => {
  // sun nad moon toggle
  moon.classList.add("hidden");
  sun.classList.remove("hidden");

  //   backgrounds change
  bgLightDesktop.classList.remove("md:block");
  bgLightMobile.classList.add("hidden");
  bgDarkDesktop.classList.remove("hidden");
  bgDarkMobile.classList.remove("hidden");

  //   body and iinputs back ground change
  body.classList.add("darkBg");
  body.classList.remove("lightBg");
  inputBox.classList.add("darkInput");
  inputBox.classList.remove("lightInput");
  taskContainer.classList.add("darkInput");
  taskContainer.classList.remove("lightInput");
  taskli.classList.add("darkInput");
  taskli.classList.remove("lightInput");
  mobileLinks.classList.remove("lightInput");
  mobileLinks.classList.add("darkInput");
  desktopLinks.classList.remove("lightInput");
  desktopLinks.classList.add("darkInput");
});
sun.addEventListener("click", (e) => {
  // sun and moon change
  sun.classList.add("hidden");
  moon.classList.remove("hidden");
  // background change
  bgLightDesktop.classList.add("md:block");
  bgLightMobile.classList.remove("hidden");
  bgDarkDesktop.classList.add("hidden");
  bgDarkMobile.classList.add("hidden");
  //   body input and tasks color change
  body.classList.add("lightBg");
  body.classList.remove("darkBg");
  inputBox.classList.remove("darkInput");
  inputBox.classList.add("lightInput");
  taskContainer.classList.remove("darkInput");
  taskContainer.classList.add("lightInput");
  taskli.classList.remove("darkInput");
  taskli.classList.add("lightInput");
  mobileLinks.classList.remove("darkInput");
  mobileLinks.classList.add("lightInput");
  desktopLinks.classList.remove("darkInput");
  desktopLinks.classList.add("lightInput");
});
let taskCounter = 0;
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputBoxValue = inputBox.value;
    taskAr.push(inputBoxValue);
    // console.log(taskAr);
    taskBox(inputBoxValue, taskCounter);
    inputBox.value = "";
    taskCounter++;
  }
});

const taskBox = function (task, i) {
  taskli.insertAdjacentHTML(
    "beforeend",
    ` <li
          class="li-${i} w-full px-5 items-center py-3 ${item}  border-b border-x-veryDarkDesaturatedBlue text-darkGrayishBlue  flex">
        <div
          class="circle-${i} w-5 h-5 rounded-full mr-3 border  border-darkGrayishBlue  flex justify-center items-center">
          <img src="./images/icon-check.svg" alt="icon-check" class=" hidden tick-${i} w-4 h-4">
        </div>
        <span class="task-value-${i}">${task}</span>
        <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-${i} ml-auto opacity-10 group-hover:opacity-100">
    </li>`
  );
  // console.log(i);
  // itemsLeft.textContent = i;
  const circle = document.querySelector(`.circle-${i}`);
  const tick = document.querySelector(`.tick-${i}`);
  const li = document.querySelector(`.li-${i}`);
  const cross = document.querySelector(`.cross-${i}`);
  const taskValue = document.querySelector(`.task-value-${i}`);
  console.log(taskValue);
  circle.addEventListener("click", (e) => {
    item = true;
    circle.classList.toggle("circleBg");
    tick.classList.toggle("hidden");
    li.classList.toggle("line-through");
    li.classList.toggle("text-opacity-20");
    taskValue.classList.toggle("active");
    licounter++;
  });
  cross.addEventListener("click", (e) => {
    li.classList.add("hidden");
    taskAr.splice(li, 1);
    updateArray(taskAr);
  });
  completed.addEventListener("click", () => {
    if (!li.classList.contains("line-through")) {
      li.style.display = "none"; // Hide tasks that are not completed
    } else {
      li.style.display = "flex"; // Show completed tasks
    }
  });
  activeTask.addEventListener("click", () => {
    // allTasks.forEach((task) => {
    if (li.classList.contains("line-through")) {
      li.style.display = "none"; // Hide completed tasks
    } else {
      li.style.display = "flex"; // Show active tasks
    }
    // });
  });
  All.addEventListener("click", (e) => {
    // taskAr.push(li.value);
    li.style.display = "flex";
    cross.addEventListener("click", (e) => {
      console.log(li);
      li.remove();
      taskAr.splice(li, 1);
      updateArray(taskAr);
      console.log(taskAr);
    });
  });
  clearComplete.addEventListener("click", (e) => {
    if (li.classList.contains("line-through")) {
      // console.log(task, i);
      li.style.display = "none";
      li.remove();
      deleteArray(li);
    }
  });
  clearCompleteMobile.addEventListener("click", (e) => {
    if (li.classList.contains("line-through")) {
      // console.log(task, i);
      li.style.display = "none";
      li.remove();
      deleteArray(li);
      // delete tasks that are  completed
    }
  });
  // function Cross(li) {
  //   item = false;
  //   li.remove();
  //   deleteArray(li);
  // }
  const arrayLength = taskAr.length;
  updateArray(taskAr);
  // console.log(taskAr.length);
};
taskAr.forEach(taskBox);
// console.log(arrayLength);
function deleteArray(ele) {
  taskAr.splice(ele, 1);
  updateArray(taskAr);
  console.log(taskAr);
}

function updateArray(arrayLength) {
  //   // if (arrayLength === 0) {
  itemsLeft.textContent = arrayLength.length;
  //   // itemLeftMobile.textContent = arrayLength.length;
  //   // }
  //   // else if (arrayLength > 0) {
  //   //   itemsLeft.textContent = arrayLength.length + 1;
  //   // } else {
  //   //   itemsLeft.textContent = arrayLength.length;
  //   // }
}

//
