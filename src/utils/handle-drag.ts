export const handleDrag = (mouse: string, e?: any) => {
  const drag = document.getElementById("drag") as HTMLElement;
  switch (mouse) {
    case "over":
      drag.style.visibility = "visible";
      break;
    case "leave":
      drag.style.visibility = "hidden";
      break;
    case "move":
      drag.style.visibility = `${e.clientY}px`;
      drag.style.top = `${e.clientY}px`;
      drag.style.left = `${e.clientX}px`;
      break;
  }
};
