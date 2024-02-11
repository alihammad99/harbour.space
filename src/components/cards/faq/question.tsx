import { component$, useSignal } from "@builder.io/qwik";
import { GoDash24, GoPlus24 } from "@qwikest/icons/octicons";

interface Answer {
  type: string;
  data: string;
}
interface Props {
  question: string;
  answer: Answer[];
  type: string;
}

export default component$(({ question, answer, type }: Props) => {
  const active = useSignal(false);
  return (
    <li
      class={[
        "my-8 flex items-start justify-between overflow-clip border-b transition-all duration-500",
        active.value ? "max-h-auto" : "max-h-12",
      ]}
    >
      <div class="flex w-full">
        <span class="text-primary hidden w-1/4 text-lg lg:block">{type}</span>
        <div class="w-5/5 flex flex-col gap-3 lg:w-4/5">
          <h3 class="text-lg font-semibold text-slate-800">{question}</h3>
          <p class="text-slate-500">{answer[0].data}</p>
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
            ? "border-primary bg-primary rotate-0"
            : "rotate-90 border-slate-300",
        ]}
      >
        {active.value ? <GoDash24 color="#fff" /> : <GoPlus24 />}
      </button>
    </li>
  );
});
