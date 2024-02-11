import { component$ } from "@builder.io/qwik";
import { GoSliders16 } from "@qwikest/icons/octicons";

export default component$(() => {
  return (
    <div class="fixed left-0 top-0 z-[100] flex w-full items-center justify-between bg-violet-600 px-8 py-4">
      <p class="m-0 flex gap-1 text-lg uppercase text-white">
        Harbour.space <span class="pt-1 text-xs">/interaction design</span>
      </p>
      <button class="invisible fixed right-32 top-4 h-24 w-24 rounded-full bg-green-500 text-sm font-semibold uppercase leading-4 text-white transition-all hover:bg-green-600 lg:visible">
        Apply
        <br />
        Now
      </button>
      <GoSliders16 color="#fff" />
    </div>
  );
});
