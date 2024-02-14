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
    <li class={styles.container}>
      <div class={styles.flexContainer}>
        <span class={styles.type}>{type}</span>
        <div class={styles.textContainer}>
          <h3 class={styles.question}>{question}</h3>
          <p
            class={[
              styles.answer,
              active.value ? styles.activeAnswer : styles.inactiveAnswer,
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
          styles.button,
          active.value ? styles.activeButton : styles.inactiveButton,
        ]}
      >
        {active.value ? <GoDash24 color="#fff" /> : <GoPlus24 />}
      </button>
    </li>
  );
});

const styles = {
  container:
    "my-4 flex items-start justify-between overflow-clip border-b py-4 transition-all duration-500",
  flexContainer: "flex w-full",
  type: "mr-4 hidden w-1/4 text-lg font-medium text-primary lg:block",
  textContainer: "w-5/5 flex flex-col gap-3 lg:w-4/5",
  question: "text-lg font-medium  text-slate-800",
  answer: "font-light text-slate-600 transition-all ease-in",
  activeAnswer: "max-h-auto opacity-100",
  inactiveAnswer: "max-h-0 opacity-0",
  button: "rounded-full border p-2 transition-all duration-200 ease-in",
  activeButton: "rotate-0 border-primary bg-primary",
  inactiveButton: "rotate-90 border-slate-300",
};
