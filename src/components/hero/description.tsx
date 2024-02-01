import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class={styles.container}>
      <h3 class={styles.content}>
        <span class={`${styles.bold} mb-4 block`}>
          A fully funded work-study program to launch your tech career.
        </span>
        {`Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship. 
Scholarship candidates will receive full financial support to complete their Masters program at Harbour.Space while gaining invaluable work experience through an internship with SCG, a leading company in the industry. `}
      </h3>
      <p>
        <span class={`${styles.bold} mt-4`}>Position:</span> Marketing
        Performance
      </p>
    </div>
  );
});

const styles = {
  container: "container flex-wrap py-8",
  content: "text-base text-slate-600",
  bold: "font-bold text-slate-800",
};
