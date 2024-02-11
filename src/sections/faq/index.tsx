import { component$ } from "@builder.io/qwik";
import Question from "~/components/cards/faq/question";

export default component$(() => {
  return (
    <section class="container pb-16 pt-24">
      {/* Title & Filters */}
      <div class="flex w-full flex-col pb-4 justify-between md:flex-row lg:border-b">
        <h2 class="text-3xl font-bold text-primary">
          Frequently Asked
          <br />
          Questions
        </h2>
        <div class="my-4 flex flex-col justify-center gap-4 md:flex-row md:items-center">
          <p class="m-0 text-sm text-slate-500">Filter by:</p>
          <div class="rounded-full border border-slate-300 px-4 py-2">
            <select
              disabled
              class="h-full w-full font-semibold text-primary outline-none"
            >
              <option class="mt-8 bg-white text-primary">
                Program Conditions
              </option>
            </select>
          </div>
        </div>
      </div>
      {/* Questions List */}
      <ul>
        <Question />
        <Question />
        <Question />
      </ul>
    </section>
  );
});
