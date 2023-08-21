import { add, sub } from "vite-dev-typescript-deps";


function setupAdd() {
  const addEl = document.getElementById("add");
  const [x, y] = [...addEl!.querySelectorAll("input")];

  function addAndUpdate() {
    const z = addEl!.querySelector("span");
    const result = add(parseInt(x.value), parseInt(y.value));
    z!.innerText = result.toString();
  }

  x.addEventListener("input", addAndUpdate)
  y.addEventListener("input", addAndUpdate)
}



function setupSub() {
  const subEl = document.getElementById("sub");
  const [x, y] = [...subEl!.querySelectorAll("input")];

  function subAndUpdate() {
    const z = subEl!.querySelector("span");
    const result = sub(parseInt(x.value), parseInt(y.value));
    z!.innerText = result.toString();
  }

  x.addEventListener("input", subAndUpdate)
  y.addEventListener("input", subAndUpdate)
}

setupAdd();
setupSub();
