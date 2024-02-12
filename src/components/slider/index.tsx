import { component$, useSignal, $, Slot } from "@builder.io/qwik";
import { GoChevronLeft24, GoChevronRight24 } from "@qwikest/icons/octicons";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const position = useSignal(0);
  const startDrag = useSignal(0);
  const offsetX = useSignal(0);
  const direction = useSignal("");
  const gap = 32;

  const slideRight = $(() => {
    const { box, cardWidth, totalSlide } = getElements();
    if (position.value < totalSlide - cardWidth * 2) {
      cardWidth > 500
        ? (position.value += gap + cardWidth / 2)
        : (position.value += gap + cardWidth);
    }
    box.style.transform = `translateX(-${position.value}px)`;
  });
  const slideLeft = $(() => {
    const { box, cardWidth } = getElements();
    if (position.value > 0) {
      console.log(cardWidth);
      cardWidth > 500
        ? (position.value -= gap + cardWidth / 2)
        : (position.value -= gap + cardWidth);
    }
    box.style.transform = `translateX(-${position.value}px)`;
  });

  const onMouseMove = $((e: any) => {
    if (startDrag.value !== 0) {
      const newX = e.clientX + offsetX.value;
      direction.value = newX - startDrag.value < 0 ? "left" : "right";
      if (newX - startDrag.value / 2 < 0) {
        direction.value = "right";
        console.log(startDrag.value);
        console.log(newX);
      } else {
        direction.value = "left";
      }
    }
  });
  const onMouseUp = $(() => {
    startDrag.value = 0;
    if (direction.value === "right") {
      slideRight();
    } else {
      slideLeft();
    }
    console.log(direction.value);
    document.removeEventListener("mousemove", onMouseMove);
    // document.removeEventListener("mouseup", onMouseUp);
  });
  const onMouseDown = $((e: any) => {
    startDrag.value = e.clientX;
    offsetX.value = e.target.getBoundingClientRect().left - e.clientX;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  return (
    <div class="relative" onMouseDown$={onMouseDown}>
      <div class="absolute hidden w-full translate-y-[-38%] items-center justify-center lg:flex">
        <Image alt="pattern" width={500} src="square-pattern.svg" />
        <Image alt="pattern" width={500} src="square-pattern.svg" />
      </div>

      <div
        id="slider-container"
        class="slider-inner-box z-20 flex h-full gap-8 transition-all duration-500 lg:flex lg:translate-x-[-25%]"
      >
        <Slot />
      </div>
      <div class="mt-8 flex w-full place-content-end gap-8 lg:hidden">
        <button
          class={styles.arrow}
          // disabled={position.value === 0}
          onClick$={slideLeft}
        >
          <GoChevronLeft24 />
        </button>
        <button
          class={styles.arrow}
          // disabled={position.value === steps.value - 100}
          onClick$={slideRight}
        >
          <GoChevronRight24 />
        </button>
      </div>
    </div>
  );
});

const getElements = () => {
  const box = document.querySelector(".slider-inner-box") as HTMLElement;
  const container = document.getElementById("slider-container") as HTMLElement;
  const firstChild = container.firstElementChild as HTMLElement | null;
  const cardWidth = firstChild ? firstChild.offsetWidth : 0;
  const childrenCount = container.childElementCount;
  const totalSlide = (cardWidth + 32) * childrenCount;
  return { box, childrenCount, container, cardWidth, totalSlide };
};

const styles = {
  arrow: "rounded-full border border-slate-200 px-6 py-6",
};
