import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="relative h-full min-w-[100%] select-none rounded-md border border-slate-300 bg-white md:min-w-[50%]">
      <div class="mx-auto flex h-2/5 w-full items-center gap-3 px-8 py-8">
        <div class="flex h-full w-full items-center gap-5">
          <div class="h-16 w-16 rounded-full">
            <Image alt="avatar" src="/avatar.png" width={300} />
          </div>
          <div>
            <p class="translate-y-1 font-medium text-slate-800">
              Irene Pereyra
            </p>
            <p class="font-light text-slate-600 ">
              Interaction Design Fellow ‘19
            </p>
          </div>
        </div>
        <span class="text-lg font-bold text-gray-400">in</span>
      </div>
      <div class="h-3/5 w-full items-center justify-center bg-slate-50 px-16 py-12">
        <p class="text-xl font-light text-slate-600">
          This Fellowship was a turning point in my career. I wouldn’t be where
          I am today without the financial support and experienced offered
          through the program.
        </p>
        <p class="mt-6 text-sm font-light text-slate-700">Education · B.A. Visual Design</p>
      </div>
    </div>
  );
});
