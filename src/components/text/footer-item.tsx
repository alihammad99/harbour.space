import { component$ } from "@builder.io/qwik";

export default component$(
  ({ title, value }: { title: string; value: string }) => {
    return (
      <li>
        <p class={styles.title}>{title}</p>
        <p class={styles.value}>{value}</p>
      </li>
    );
  },
);
const styles = {
  title: "m-0 text-sm font-medium text-slate-700",
  value: "m-0 text-sm font-light text-slate-700",
};
