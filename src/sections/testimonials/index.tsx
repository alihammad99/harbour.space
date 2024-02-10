import { component$, useSignal, $, Slot, useStore } from "@builder.io/qwik";
import { GoChevronLeft24, GoChevronRight24 } from "@qwikest/icons/octicons";
import Testimonials from "~/components/cards/testimonials";

const styles = {
  container:
    "w-full flex flex-col cursor-none overflow-x-hidden z-50 mt-10 relative",
  arrow: "rounded-full border border-slate-200 px-6 py-6",
};

export default component$(() => {
  const hover = useSignal(false);
  const mouse = useStore({ x: 0, y: 0 });

  return (
    <div
      onMouseOver$={() => (hover.value = true)}
      onMouseLeave$={() => (hover.value = false)}
      onMouseMove$={(e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }}
      class={styles.container}
    >
      <div
        style={{ top: mouse.y, left: mouse.x }}
        class={[
          "pointer-events-none z-[100] hidden translate-x-[-50%] translate-y-[-50%] rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition-all duration-75 ease-linear lg:visible lg:visible lg:fixed lg:flex ",
          hover.value ? "opacity-100" : "scale-75 opacity-0",
        ]}
      >
        Drag
      </div>
      <Slider>
        <Testimonials />
        <Testimonials />
        <Testimonials />
      </Slider>
    </div>
  );
});

const Slider = component$(({ gap = 16 }: { gap: number }) => {
  const position = useSignal(0);
  const startDrag = useSignal(0);
  const offsetX = useSignal(0);
  const direction = useSignal("");

  const slideRight = $(() => {
    const { box, childrenCount, cardWidth } = getElements();
    const totalSlide = (cardWidth + gap) * childrenCount;
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
    <div onMouseDown$={onMouseDown} class={styles.container}>
      <div
        id="slider-container"
        class="slider-inner-box z-20 flex h-full gap-4 overflow-x-visible transition-all duration-500 lg:flex lg:translate-x-[-25%]"
      >
        <Slot />
      </div>
      <div class="mt-8 flex w-full place-content-end gap-4">
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
  const box = document.querySelector(".slider-inner-box");
  const container = document.getElementById("slider-container");
  const cardWidth = container?.firstElementChild.offsetWidth;
  const childrenCount = container?.childElementCount;

  return { box, childrenCount, container, cardWidth };
};
