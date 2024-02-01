import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import Button from "~/components/button/primary";
import DeadlineCard from "~/components/cards/hero-deadline";
import InfoCard from "~/components/cards/hero-info";
import Description from "~/components/hero/description";

export default component$(() => {
  const mobile = useSignal(false);

  // Getting window's width
  useVisibleTask$(({ cleanup }) => {
    const width = window.innerWidth;
    mobile.value = width < 450;
    window.addEventListener("resize", () => {
      mobile.value = width < 450;
    });

    cleanup(() => window.removeEventListener);
  });

  return (
    <header class={styles.container}>
      <div class={styles.box.left}>
        <h1 class={styles.title}>Interaction Design Apprenticeship</h1>
        {!mobile.value && (
          <>
            <Description />
            <Button />
          </>
        )}
      </div>
      <div class={styles.box.right}>
        <div class={styles.box.partner}>
          <img class={styles.icon} />

          <p class="text-slate-500 md:mt-4">
            Powered by: <span class="font-bold">Zeptolab</span>
          </p>
          {/* icon */}
        </div>

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

const styles = {
  container: "container flex flex-wrap justify-between md:flex-row",
  box: {
    left: "md:w-2/5",
    right: "flex flex-col gap-4 md:w-2/5 md:gap-6",
    partner: "flex w-full flex-col-reverse gap-6  md:flex md:flex-row md:items-center",
  },
  title: "text-3xl font-bold text-violet-800",
  icon: "h-16 w-16",
};
