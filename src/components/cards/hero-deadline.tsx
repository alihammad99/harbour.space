import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class={styles.box}>
      <p class={styles.title}>Application closes in</p>
      <h4 class={styles.text}>6 Day : 22 Hrs : 56 Min : 13 Seg</h4>
    </div>
  );
});

const styles = {
  box: "rounded-md border border-slate-300 p-5",
  title: "m-0 text-md text-violet-800 font-medium",
  text: "overflow-clip text-clip text-xl text-slate-900",
};
