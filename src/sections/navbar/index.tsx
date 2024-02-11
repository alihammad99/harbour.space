import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { GoSliders16 } from "@qwikest/icons/octicons";

export default component$(() => {
  const currentScroll = useSignal(0);
  useOnWindow(
    "scroll",
    $(() => {
      const scrollY = window.scrollY;
      const navbar = document.getElementById("nav");
      const btn = document.getElementById("apply");
      if (scrollY > currentScroll.value) {
        navbar?.style.top = "-80px";
        btn?.style.top = "-150px";
      } else {
        navbar?.style.top = 0;
        btn?.style.top = "1rem";
      }
      currentScroll.value = scrollY;
    }),
  );
  return (
    <div
      id="nav"
      class="fixed left-0 top-0 z-[100] flex w-full items-center justify-between bg-violet-600 px-8 py-4 transition-all duration-500 ease-in-out"
    >
      <p class="m-0 flex gap-1 text-lg uppercase text-white">
        Harbour.space <span class="pt-1 text-xs">/interaction design</span>
      </p>
      <button
        id="apply"
        class="invisible fixed right-32 top-4 h-24 w-24 rounded-full bg-green-500 text-sm font-semibold uppercase leading-4 text-white transition-all duration-500 ease-in-out hover:bg-green-600 lg:visible"
      >
        Apply
        <br />
        Now
      </button>
      <GoSliders16 color="#fff" />
    </div>
  );
});
