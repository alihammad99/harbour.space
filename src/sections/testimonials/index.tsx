import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import TestimonialCard from "~/components/cards/testimonials";
import Slider from "~/components/slider";
import { handleDrag } from "~/utils/handle-drag";

const styles = {
  container:
    "max-w-screen w-screen flex pt-28 flex-col cursor-none overflow-x-hidden overflow-y-visible z-50 lg:mt-10 relative",
  arrow: "rounded-full border border-slate-200 px-6 py-6",
};

export default component$(() => {
  const hover = useSignal(false);
  const laptop = useSignal(false);

  const check = $(() => {
    const { innerWidth, innerHeight } = window;
    return (laptop.value = innerWidth > innerHeight);
  });
  useOnWindow(["load", "resize"], check);

  return (
    <div
      onMouseOver$={() => {
        if (laptop.value) {
          hover.value = true;
          handleDrag("over");
        }
      }}
      onMouseLeave$={() => {
        if (laptop.value) {
          hover.value = false;
          handleDrag("leave");
        }
      }}
      onMouseMove$={(e) => {
        if (laptop.value) {
          handleDrag("move", e);
        }
      }}
      class={styles.container}
    >
      {laptop.value && (
        <div
          id="drag"
          class={[
            "pointer-events-none z-[100] translate-x-[-50%] translate-y-[-50%] rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-75 ease-linear lg:visible lg:fixed lg:flex ",
            hover.value
              ? `scale-100 opacity-100`
              : "invisible scale-75 opacity-0",
          ]}
        >
          Drag
        </div>
      )}
      <Slider>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Slider>
    </div>
  );
});
