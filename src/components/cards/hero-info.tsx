import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.box.left}>
        <div>
          <p class={styles.label}>Location</p>
          <h4 class={styles.text}>Bangkok</h4>
        </div>
        <div>
          <p class={styles.label}>Application deadline</p>
          <h4 class={styles.text}>30 June 2020</h4>
        </div>
      </div>
      <div class={styles.box.right}>
        <div>
          <p class={styles.label}>Duration</p>
          <h4 class={styles.text}>1 Year Full-Time</h4>
        </div>
        <div>
          <p class={styles.label}>Start date</p>
          <h4 class={styles.text}>3 Aug 2020</h4>
        </div>
      </div>
    </div>
  );
});

const styles = {
  container: "rounded-md border border-slate-300 p-5 flex flex-row w-full ",
  label: "m-0 text-violet-800 text-md font-medium",
  text: "overflow-clip text-md text-clip text-slate-900",
  box: {
    left: "w-3/5 flex flex-col gap-4",
    right: "w-2/5 flex flex-col gap-4",
  },
};
