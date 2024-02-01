import { component$ } from "@builder.io/qwik";

export default component$(
  ({ value = "Apply now" }: { value?: string | undefined }) => {
    return (
      <button class="rounded-full bg-violet-700 px-10 py-4 font-semibold text-white transition-all hover:bg-violet-600">
        {value}
      </button>
    );
  },
);
