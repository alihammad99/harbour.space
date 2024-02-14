import { component$ } from "@builder.io/qwik";

export default component$(
  ({ title, value }: { title: string; value: string }) => {
    return (
      <li>
        <p class="m-0 text-sm font-medium text-slate-700">{title}</p>
        <p class="m-0 text-sm font-light text-slate-700">{value}</p>
      </li>
    );
  },
);
