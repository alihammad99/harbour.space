import { component$, useSignal, $ } from "@builder.io/qwik";
import TestimonialCard from "~/components/cards/testimonials";
import Slider from "~/components/slider";

const styles = {
  container:
    "max-w-screen w-screen flex pt-28 flex-col cursor-none overflow-x-hidden overflow-y-visible z-50 lg:mt-10 relative",
  arrow: "rounded-full border border-slate-200 px-6 py-6",
};

export default component$(() => {
  const hover = useSignal(false);
  const handleDrag = $((mouse: string, e?: any) => {
    const drag = document.getElementById("drag") as HTMLElement;
    switch (mouse) {
      case "over":
        hover.value = true;
        drag.style.visibility = "visible";
        break;
      case "leave":
        hover.value = false;
        drag.style.visibility = "hidden";
        drag.style.top = "50%";
        drag.style.left = "50%";
        break;
      case "move":
        drag.style.visibility = `${e.clientY}px`;
        drag.style.top = `${e.clientY}px`;
        drag.style.left = `${e.clientX}px`;
        break;
    }
  });
  return (
    <div
      onMouseOver$={() => handleDrag("over")}
      onMouseLeave$={() => handleDrag("leave")}
      onMouseMove$={(e) => handleDrag("move", e)}
      class={styles.container}
    >
      <div
        id="drag"
        class={[
          "pointer-events-none invisible z-[100] translate-x-[-50%] translate-y-[-50%] rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-75 ease-linear lg:visible lg:fixed lg:flex ",
          hover.value ? `opacity-100` : "scale-75 opacity-0",
        ]}
      >
        Drag
      </div>
      <Slider>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Slider>
    </div>
  );
});
