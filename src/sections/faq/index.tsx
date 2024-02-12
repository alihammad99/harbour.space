import { $, component$, useSignal } from "@builder.io/qwik";
import Question from "~/components/cards/faq/question";

export default component$(({ data }: { data: any }) => {
  const initalType = data.categories[0];
  const questions = useSignal(
    data.items.filter((item: any) => item.type === initalType),
  );
  const handleFilter = $((filterValue: string) => {
    questions.value = data.items.filter(
      (item: any) => item.type === filterValue,
    );
  });

  return (
    <section class={styles.container}>
      {/* Title & Filters */}
      <div class={styles.title.box}>
        <h2 class={styles.title.text}>
          Frequently Asked
          <br />
          Questions
        </h2>
        <div class={styles.filter.box}>
          <p class={styles.filter.text}>Filter by:</p>
          <div class={styles.questions.box}>
            <select
              onChange$={(e: any) => handleFilter(e.target.value)}
              class={styles.filter.list}
            >
              {data.categories.map((category: string) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Questions List */}
      <ul>
        {questions.value.map((item: any, i: number) => (
          <Question key={`${i}-${item.answer}`} {...item} />
        ))}
      </ul>
    </section>
  );
});

const styles = {
  container: "container pb-16 pt-24",
  title: {
    box: "flex w-full flex-col justify-between pb-4 md:flex-row lg:border-b",
    text: "text-primary text-3xl font-bold",
  },
  filter: {
    box: "my-4 flex flex-col justify-center gap-4 md:flex-row md:items-center",
    text: "m-0 text-sm text-slate-500",
    list: "text-primary h-full w-full font-semibold outline-none border-0",
  },
  questions: {
    box: "rounded-full border border-slate-300 px-4 py-2",
  },
};
