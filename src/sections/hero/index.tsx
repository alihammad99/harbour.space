import { component$ } from "@builder.io/qwik";
import Button from "~/components/button/primary";
import DeadlineCard from "~/components/cards/hero-deadline";
import InfoCard from "~/components/cards/hero-info";
import Description from "~/components/hero/description";

export default component$(() => {
  return (
    <header class="container flex-wrap">
      <div>
        <h1 class="text-3xl font-bold text-violet-800">
          Interaction Design Apprenticeship
        </h1>
        <p class="text-slate-500">
          Powered by: <span class="font-bold">Zeptolab</span>
        </p>
        {/* icon */}
        <img class="h-16 w-16" />
      </div>
      <div>
        <DeadlineCard />
        <InfoCard />
      </div>
      <Description />
      <Button />
    </header>
  );
});
