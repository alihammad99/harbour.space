import { component$ } from "@builder.io/qwik";

export default component$(
  ({ value = "Apply now" }: { value?: string | undefined }) => {
    return (
      <button class="rounded-full bg-primary px-10 py-4 font-semibold text-white transition-all hover:primary/90">
        {value}
      </button>
    );
  },
);
