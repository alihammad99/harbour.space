import { component$, useSignal, $, useOnWindow } from "@builder.io/qwik";

const modifyItems = (arr: any[], show: number = 1): any[][] => {
  const result = [];
  for (let i = 0; i < arr.length; i += Math.ceil(show)) {
    result.push(arr.slice(i, i + Math.ceil(show)));
  }

  return result;
};

const styles = {
  container:
    "container overflow-hidden w-full z-50 py-24 relative  h-screen bg-blue-100",
  card: "w-[400px] h-64 hover:bg-pink-400 bg-pink-300 rounded-lg flex items-center justify-center",
};

const cards = [
  <div class={styles.card}>1</div>,
  <div class={styles.card}>2</div>,
  <div class={styles.card}>3</div>,
  <div class={styles.card}>4</div>,
  <div class={styles.card}>5</div>,
  <div class={styles.card}>6</div>,
];
export default () => {
  return (
    <div class={styles.container}>
      <Slider render={cards} />
    </div>
  );
};

const Wrapper = component$(({ cards, key }: { cards: any[]; key: number }) => {
  return (
    <div
      key={key}
      class="flex h-full min-w-full flex-grow items-center justify-center gap-3 bg-yellow-200"
    >
      {cards}
    </div>
  );
});

const Slider = component$(
  ({
    render,
    show = { sm: 1, md: 2, lg: 3 },
  }: {
    render: any[];
    show?: { sm: number; md: number; lg: number } | undefined;
  }) => {
    const steps = useSignal(100);
    const position = useSignal(0);

    const mobileList = modifyItems(render, show.sm || 1).map((cards, i) => (
      <Wrapper cards={cards} key={i} />
    ));
    const tabletList = modifyItems(render, show.md || 2).map((cards, i) => (
      <Wrapper cards={cards} key={i} />
    ));
    const desktopList = modifyItems(render, show.lg || 3).map((cards, i) => (
      <Wrapper cards={cards} key={i} />
    ));

    useOnWindow(
      ["load", "resize"],
      $(() => {
        const width = window.innerWidth;
        if (width < 640) {
          steps.value = 100 * Math.ceil(render.length / show.sm || 1);
        } else if (width < 1024 && width >= 640) {
          steps.value = 100 * Math.ceil(render.length / show.md || 2);
        } else {
          steps.value = 100 * Math.ceil(render.length / show.lg || 3);
        }
      }),
    );

    const slideRight = $(() => {
      const boxes = document.querySelectorAll(".slider-inner-box");
      position.value += 100;
      Array.prototype.map.call(
        boxes,
        (box) => (box.style.transform = `translateX(-${position.value}%)`),
      );
    });
    const slideLeft = $(() => {
      const boxes = document.querySelectorAll(".slider-inner-box");
      position.value -= 100;
      Array.prototype.map.call(
        boxes,
        (box) => (box.style.transform = `translateX(-${position.value}%)`),
      );
    });

    return (
      <div class={styles.container}>
        <div class="flex w-full gap-4">
          <button
            class="rounded border border-blue-500 px-8 py-4"
            disabled={position.value === 0}
            onClick$={slideLeft}
          >
            Left
          </button>
          <button
            class="rounded border border-pink-500 px-8 py-4"
            disabled={position.value === steps.value - 100}
            onClick$={slideRight}
          >
            Right
          </button>
        </div>

        <div class="slider-inner-box z-20 flex h-full w-full bg-yellow-300 transition-all sm:hidden">
          {mobileList}
        </div>
        <div class="slider-inner-box z-20 hidden h-full w-full bg-green-300 transition-all sm:flex lg:hidden">
          {tabletList}
        </div>
        <div class="slider-inner-box z-20 hidden h-full w-full bg-red-300 transition-all lg:flex">
          {desktopList}
        </div>
      </div>
    );
  },
);
