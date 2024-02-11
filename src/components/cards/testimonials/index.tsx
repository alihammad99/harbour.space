import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="relative h-full min-w-[100%] select-none rounded-md border border-slate-300 bg-white lg:min-w-[50%]">
      <div class="mx-auto flex h-2/5 w-full items-center gap-3 px-8 py-8">
        <div class="flex h-full w-full items-center gap-5">
          <div class="h-16 w-16 rounded-full bg-slate-200"></div>
          <div class="">
            <p class="m-0 p-0 font-bold text-slate-800">Irene Pereyra</p>
            <p class="m-0 p-0 text-slate-500">Interaction Design Fellow ‘19</p>
          </div>
        </div>
        <span class="text-lg font-bold text-gray-400">in</span>
      </div>
      <div class="h-3/5 w-full items-center justify-center bg-slate-100 px-16 py-12">
        <p class="text-xl opacity-70">
          This Fellowship was a turning point in my career. I wouldn’t be where
          I am today without the financial support and experienced offered
          through the program.
        </p>
        <p class="mt-6 text-sm opacity-80">Education · B.A. Visual Design</p>
      </div>
    </div>
  );
});
