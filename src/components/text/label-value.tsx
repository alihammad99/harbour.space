import { component$ } from "@builder.io/qwik";

export default component$(
  ({ label, value }: { label: string; value: string }) => {
    return (
      <div>
        <p class={styles.label}>{label}</p>
        <h4 class={styles.value}>{value}</h4>
      </div>
    );
  },
);

const styles = {
  label: "m-0 text-violet-800 text-md font-medium",
  value: "overflow-clip text-md text-clip text-slate-900",
};
