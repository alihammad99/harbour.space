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
          Frequently asked
          <br />
          questions
        </h2>
        <div class={styles.filter.box}>
          <p class={styles.filter.text}>Filter by:</p>
          <div class="rounded-full border border-slate-300 px-5 py-4 lg:px-4 lg:py-3">
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
  container: "container lg:pb-20 pb-2 pt-24",
  title: {
    box: "flex w-full flex-col justify-between pb-4 lg:pb-10 md:flex-row lg:border-b",
    text: "text-primary text-4xl font-medium leading-tight",
  },
  filter: {
    box: "mt-12 lg:m-0 flex flex-col justify-center gap-4 border-none md:flex-row md:items-center outline-none",
    text: "m-0 text-sm font-light text-slate-500",
    list: "text-primary w-full rounded-full font-medium outline-none",
  },
};
