import { component$, useSignal } from "@builder.io/qwik";
import { GoDash24, GoPlus24 } from "@qwikest/icons/octicons";

export default component$(() => {
  const active = useSignal(false);
  return (
    <li
      class={[
        "my-8 flex items-start justify-between overflow-clip border-b transition-all duration-500",
        active.value ? "max-h-auto" : "max-h-12",
      ]}
    >
      <div class="flex w-full">
        <span class="mr-20 hidden text-xl text-primary lg:block">
          Program conditions
        </span>
        <div class="w-5/5 flex flex-col gap-3 lg:w-3/5">
          <h3 class="text-xl font-semibold text-slate-800">
            What are my obligations?
          </h3>
          <p class="text-slate-500">
            The majority of our students receive numerous job offers at the end
            of the second academic year of their Bachelor's programme and at the
            end of the first academic year of their Master's programme. The best
            applicants receive an offer from our industrial partners at the
            beginning of their programmes.
          </p>
        </div>
      </div>
      <button
        onClick$={() => {
          console.log(active.value);

          return (active.value = !active.value);
        }}
        class={[
          "rounded-full border p-2 transition-all",
          active.value
            ? "rotate-0 border-primary bg-primary"
            : "rotate-90 border-slate-300",
        ]}
      >
        {active.value ? <GoDash24 color="#fff" /> : <GoPlus24 />}
      </button>
    </li>
  );
});
