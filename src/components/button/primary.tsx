import { component$ } from "@builder.io/qwik";

interface Props {
  value?: string | undefined;
  link?: string;
}

export default component$(({ value = "Apply now", link = "#" }: Props) => {
  return (
    <button class="rounded-full duration-300 bg-primary px-10 py-4 self-start font-semibold text-white transition-all hover:bg-primary/95">
      <a target="_blank" class="text-white hover:no-underline" href={link}>
        {value}
      </a>
    </button>
  );
});
