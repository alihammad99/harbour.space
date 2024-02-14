import { component$ } from "@builder.io/qwik";
import LabelValue from "~/components/text/label-value";

interface Props {
  label: string;
  title: string;
  text: string;
}

export default component$(({ label, title, text }: Props) => {
  return (
    <div class={styles.container}>
      <LabelValue
        textStyle="text-2xl mt-4 text-slate-600"
        label={label}
        value={title}
      />
      <div class={styles.line}></div>
      <p class={styles.text}>{text}</p>
    </div>
  );
});

const styles = {
  container: "h-full w-full md:w-2/4 rounded-md border border-slate-300 p-8",
  line: "mb-3 mt-4 h-[1px] w-8 bg-slate-300",
  text: "text-sm font-light leading-5 text-slate-600",
};
