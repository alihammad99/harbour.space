import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import Button from "~/components/button/primary";
import DeadlineCard from "~/components/cards/hero-deadline";
import InfoCard from "~/components/cards/hero-info";
import Description from "~/components/hero/description";

export default component$(() => {
  const mobile = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    const width = window.innerWidth;
    mobile.value = width < 450;
    window.addEventListener("resize", () => {
      mobile.value = width < 450;
    });

    cleanup(() => window.removeEventListener);
  });

  return (
    <header class="container flex flex-wrap justify-between md:flex-row">
      <div class="md:w-2/5">
        <h1 class="text-3xl font-bold text-violet-800">
          Interaction Design Apprenticeship
        </h1>
        {!mobile.value && (
          <>
            <Description />
            <Button />
          </>
        )}
      </div>
      <div class="flex flex-col gap-4 md:w-2/5 md:gap-6">
        <p class="text-slate-500">
          Powered by: <span class="font-bold">Zeptolab</span>
        </p>
        {/* icon */}
        <img class="h-16 w-16" />
        <DeadlineCard />
        <InfoCard />
      </div>
      {mobile.value && (
        <>
          <Description />
          <Button />
        </>
      )}
    </header>
  );
});
