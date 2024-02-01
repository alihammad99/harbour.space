import { component$ } from "@builder.io/qwik";
import LabelValue from "../text/label-value";

export default component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.box.left}>
        <LabelValue label={"Location"} value={"Bangkok"} />
        <LabelValue label={"Application deadline"} value={"30 June 2020"} />
      </div>
      <div class={styles.box.right}>
        <LabelValue label={"Duration"} value={"1 Year Full-Time"} />
        <LabelValue label={"Start date"} value={"3 Aug 2020"} />
      </div>
    </div>
  );
});

const styles = {
  container: "rounded-md border border-slate-300 p-5 flex flex-row w-full ",
  box: {
    left: "w-3/5 flex flex-col gap-4",
    right: "w-2/5 flex flex-col gap-4",
  },
};
