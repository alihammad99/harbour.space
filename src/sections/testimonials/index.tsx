import { component$, useSignal, useStore } from "@builder.io/qwik";
import Testimonials from "~/components/cards/testimonials";
import Slider from "~/components/slider";

const styles = {
  container:
    "w-full flex lg:pt-28 flex-col cursor-none overflow-x-hidden overflow-y-visible z-50 mt-10 relative",
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
          "pointer-events-none z-[100] hidden translate-x-[-50%] translate-y-[-50%] rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-75 ease-linear lg:visible lg:fixed lg:flex ",
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
