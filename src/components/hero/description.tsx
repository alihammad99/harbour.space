import { component$ } from "@builder.io/qwik";

export default component$(
  ({ details, position }: { details: string; position: string }) => {
    return (
      <div class={styles.container}>
        <h3 class={styles.content}>
          <span class={`${styles.bold} mb-4 block`}>
            A fully funded work-study program to launch your tech career.
          </span>
          {details}
        </h3>
        <p>
          <span class={`${styles.bold} mt-4`}>Position:</span>
          {position || " -"}
        </p>
      </div>
    );
  },
);

const styles = {
  container: "flex-wrap py-8",
  content: "text-base text-slate-600",
  bold: "font-bold text-slate-800",
};
