import { component$ } from "@builder.io/qwik";

interface Props {
  value?: string | undefined;
  link?: string;
}

export default component$(({ value = "Apply now", link = "#" }: Props) => {
  return (
    <button class="rounded-full bg-primary px-10 py-4 font-semibold text-white transition-all hover:bg-primary/95">
      <a target="_blank" class="text-white hover:no-underline" href={link}>
        {value}
      </a>
    </button>
  );
});
