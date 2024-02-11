import { component$ } from "@builder.io/qwik";
import LabelValue from "~/components/text/label-value";

interface Props {
  label: string;
  duration: string;
}

export default component$(({ label, duration }: Props) => {
  return (
    <div class={styles.container}>
      <LabelValue
        textStyle="text-2xl mt-4 text-slate-600"
        label={label}
        value={`${duration} Year / Full-Time`}
      />
      <div class={styles.line}></div>
      <p class={styles.text}>
        You’ll be guaranteed a {duration} year contract with SCG upon
        graduation.
      </p>
    </div>
  );
});

const styles = {
  container: "h-2/4 w-full  rounded-md border border-slate-300 p-8",
  line: "mb-3 mt-4 h-[1px] w-8 bg-slate-300",
  text: "text-xs font-light leading-5 text-slate-500",
};
