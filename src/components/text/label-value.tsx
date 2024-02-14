import { component$ } from "@builder.io/qwik";

export default component$(
  ({
    label,
    value,
    textStyle = "text-slate-700",
  }: {
    label: string;
    value: string;
    textStyle?: string;
  }) => {
    return (
      <div>
        <p class={styles.label}>{label}</p>
        <h4 class={`${styles.value} ${textStyle}`}>{value}</h4>
      </div>
    );
  },
);

const styles = {
  label: "text-primary text-md font-medium",
  value: "overflow-clip text-md text-clip font-light not-italic",
};
