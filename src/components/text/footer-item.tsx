import { component$ } from "@builder.io/qwik";

export default component$(
  ({ title, value }: { title: string; value: string }) => {
    return (
      <li>
        <p class="m-0 text-sm font-semibold text-slate-700">{title}</p>
        <p class="m-0 text-sm font-thin text-slate-700">{value}</p>
      </li>
    );
  },
);
