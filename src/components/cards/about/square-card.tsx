import { component$ } from "@builder.io/qwik";
import LabelValue from "~/components/text/label-value";

export default component$(() => {
  return (
    <div class={styles.container}>
      <LabelValue
        textStyle="text-2xl mt-4 text-slate-600"
        label="Scholarship value"
        value="€31,300"
      />
      <div class={styles.line}></div>
      <p class={styles.text}>
        You will complete 15 modules to graduate. Daily classes are 3 hours,
        plus coursework to complete in your own time.
      </p>
    </div>
  );
});

const styles = {
  container: "h-full w-full md:w-2/4 rounded-md border border-slate-300 p-8",
  line: "mb-3 mt-4 h-[1px] w-8 bg-slate-300",
  text: "text-xs font-light leading-5 text-slate-500",
};
