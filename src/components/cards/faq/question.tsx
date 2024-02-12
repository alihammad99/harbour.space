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
      ]}
    >
      <div class="flex w-full">
        <span class="hidden w-1/4 mr-4 text-lg text-primary lg:block">{type}</span>
        <div class="w-5/5 flex flex-col gap-3 lg:w-4/5">
          <h3 class="text-lg font-semibold text-slate-800">{question}</h3>
          <p
            class={[
              "text-slate-500 transition-all ease-in",
              active.value ? "max-h-auto opacity-100" : "max-h-0 opacity-0",
            ]}
          >
            {answer[0].data}
          </p>
        </div>
      </div>
      <button
        onClick$={() => {
          return (active.value = !active.value);
        }}
        class={[
          "rounded-full border p-2 transition-all ease-in duration-200",
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
