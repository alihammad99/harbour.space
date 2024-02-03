import { component$ } from "@builder.io/qwik";
import VerticalCard from "./vertical-card";
import SquareCard from "./square-card";
import WideCard from "./wide-card";

export default component$(() => {
  return (
    <div class="flex flex-col gap-7 md:h-[90vh] md:flex-row">
      <VerticalCard />
      <div class="flex h-full w-full flex-col justify-between md:w-2/3">
        <div class="flex h-2/3 w-full flex-col justify-between gap-8 md:flex-row">
          <SquareCard />
          <SquareCard />
        </div>
        <div class="flex w-full flex-row items-center justify-center py-2 text-center">
          <span class="h-[0.7px] w-full bg-slate-300"></span>
          <p class="m-2 text-center text-xs">GRADUATION</p>
          <span class="h-[0.7px] w-full bg-slate-300"></span>
        </div>
        <WideCard />
      </div>
    </div>
  );
});
