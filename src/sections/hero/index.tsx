import {
  $,
  component$,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import Button from "~/components/button/primary";
import DeadlineCard from "~/components/cards/hero-deadline";
import InfoCard from "~/components/cards/hero-info";
import Description from "~/components/hero/description";

export default component$(() => {
  const mobile = useSignal(false);

  useVisibleTask$(
    () => {
      const width = window.innerWidth;
      mobile.value = width < 450;
    },
    { strategy: "document-ready" },
  );

  useOnWindow(
    "resize",
    $(() => {
      const width = window.innerWidth;
      mobile.value = width < 450;
    }),
  );

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
          <img
            alt="Partner icon"
            width="300"
            height="300"
            class={styles.icon}
          />

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
  container: "container pt-32 flex flex-wrap justify-between md:flex-row",
  box: {
    left: "md:w-2/5",
    right: "flex flex-col gap-4 md:w-2/5 md:gap-6",
    partner:
      "flex w-full flex-col-reverse gap-6  md:flex md:flex-row md:items-center",
  },
  title: "text-3xl font-bold text-primary",
  icon: "h-16 w-16",
};
