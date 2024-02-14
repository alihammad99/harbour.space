/* eslint-disable @typescript-eslint/no-unnecessary-condition */
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
        if (navbar !== null) {
          navbar.style.top = "-80px";
        }
        btn && btn.style && (btn.style.top = "-150px");
      } else {
        if (navbar !== null) {
          navbar.style.top = "0";
        }
        btn && btn.style && (btn.style.top = "1rem");
      }
      currentScroll.value = scrollY;
    }),
  );
  return (
    <div
      id="nav"
      class="fixed left-0 top-0 z-[100] flex w-full items-center justify-between bg-primary px-8 py-4 transition-all duration-500 ease-in-out"
    >
      <p class="m-0 flex gap-1 font-medium uppercase text-white">
        Harbour.space <span class="pt-1 text-xs">/Data Science</span>
      </p>
      <button
        id="apply"
        class="bg-success invisible fixed right-32 top-4 h-24 w-24 rounded-full text-sm font-medium uppercase leading-tight tracking-wide text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-green-500 lg:visible"
      >
        <a
          target="_blank"
          class="text-white hover:no-underline"
          href={"https://harbour.space/data-science"}
        >
          Apply
          <br />
          Now
        </a>
      </button>
      <GoSliders16 color="#fff" />
    </div>
  );
});
