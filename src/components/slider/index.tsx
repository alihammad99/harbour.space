import { component$, useSignal, $, Slot, useOnWindow } from "@builder.io/qwik";
import { GoChevronLeft24, GoChevronRight24 } from "@qwikest/icons/octicons";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const position = useSignal(0);
  const startDrag = useSignal(0);
  const laptop = useSignal(false);
  const offsetX = useSignal(0);
  const direction = useSignal("");
  const gap = 32;

  const sliding = {
    right: $(() => {
      const width = window.innerWidth;
      const { box, cardWidth, totalSlides } = elements();
      if (width >= 800 && position.value < totalSlides / 2 - cardWidth) {
        position.value += gap + cardWidth / 2;
      } else if (width < 800 && position.value < totalSlides - cardWidth * 2) {
        position.value += gap + cardWidth;
      }
      box.style.transform = `translateX(-${position.value}px)`;
    }),
    left: $(() => {
      const width = window.innerWidth;
      const { box, cardWidth } = elements();
      if (width >= 800 && position.value > 0) {
        position.value -= gap + cardWidth / 2;
      } else if (width < 800 && position.value > 0) {
        position.value -= gap + cardWidth;
      }
      box.style.transform = `translateX(-${position.value}px)`;
    }),
  };

  useOnWindow(
    "load",
    $(() => {
      const { cardWidth, totalSlides } = elements();
      const { innerWidth, innerHeight } = window;
      if (innerWidth > innerHeight) laptop.value = true;
      if (cardWidth >= 500 && position.value < totalSlides / 2 - cardWidth) {
        position.value += gap + cardWidth / 2;
      }
    }),
  );

  const onMouseMove = $((e: any) => {
    if (!laptop.value) return;
    if (startDrag.value !== 0) {
      const newX = e.clientX + offsetX.value;
      direction.value = newX - startDrag.value < 0 ? "left" : "right";
      if (newX - startDrag.value / 2 < 0) {
        direction.value = "right";
      } else {
        direction.value = "left";
      }
    }
  });
  const onMouseUp = $(() => {
    if (!laptop.value) return;
    startDrag.value = 0;
    if (direction.value === "right") {
      sliding.right();
    } else {
      sliding.left();
    }
    document.removeEventListener("mousemove", onMouseMove);
    // document.removeEventListener("mouseup", onMouseUp);
  });
  const onMouseDown = $((e: any) => {
    if (!laptop.value) return;
    startDrag.value = e.clientX;
    offsetX.value = e.target.getBoundingClientRect().left - e.clientX;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  return (
    <div class={styles.relativeContainer} onMouseDown$={onMouseDown}>
      <div class={styles.hiddenAbsoluteContainer}>
        <Image
          class={styles.translateImage}
          alt="pattern"
          width={500}
          src="square-pattern.svg"
        />
        <Image alt="pattern" width={500} src="square-pattern.svg" />
      </div>
      <div class={styles.absoluteContainer}>
        <Image alt="pattern" width={500} src="colored-pattern.svg" />
      </div>
      <div class={styles.sliderContainer} id="slider-container">
        <Slot />
      </div>
      {!laptop.value && (
        <div class={styles.mobileButtonContainer}>
          <button
            class={styles.arrow}
            disabled={!position.value}
            onClick$={sliding.left}
          >
            <GoChevronLeft24 />
          </button>
          <button class={styles.arrow} onClick$={sliding.right}>
            <GoChevronRight24 />
          </button>
        </div>
      )}
    </div>
  );
});

const elements = () => {
  const box = document.querySelector(".slider-inner-box") as HTMLElement;
  const container = document.getElementById("slider-container") as HTMLElement;
  const firstChild = container.firstElementChild as HTMLElement | null;
  const cardWidth = firstChild ? firstChild.offsetWidth : 0;
  const childrenCount = container.childElementCount;
  const totalSlides = (cardWidth + 32) * childrenCount;
  return { box, childrenCount, container, cardWidth, totalSlides };
};

const styles = {
  relativeContainer: "relative",
  hiddenAbsoluteContainer:
    "pointer-events-none absolute hidden w-full translate-y-[-38%] items-center justify-center lg:flex",
  translateImage: "translate-x-[1px]",
  absoluteContainer:
    "absolute flex w-screen translate-y-[-38%] items-center justify-center bg-primary  lg:hidden",
  sliderContainer:
    "slider-inner-box z-20 flex h-full gap-8 px-4 transition-all duration-500 lg:flex lg:translate-x-[-25%] lg:px-8",
  mobileButtonContainer:
    "mt-8 flex w-full place-content-end gap-4 pr-4 xl:hidden",
  arrow: "rounded-full border border-slate-200 p-5",
};
