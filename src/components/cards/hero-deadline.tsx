import { component$ } from "@builder.io/qwik";
import { formatDate } from "~/utils/format-date";

export default component$(({ deadline }: { deadline: string }) => {
  return (
    <div class={styles.box}>
      <p class={styles.title}>Application closes in</p>
      <h4 class={styles.text}>{formatDate(deadline)}</h4>
    </div>
  );
});

const styles = {
  box: "rounded-md border border-slate-300 p-5",
  title: "text-md text-primary font-medium",
  text: "overflow-clip mt-2 font-light text-clip text-2xl text-slate-900",
};
