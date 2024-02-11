import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import Button from "~/components/button/primary";
import DeadlineCard from "~/components/cards/hero-deadline";
import InfoCard from "~/components/cards/hero-info";
import Description from "~/components/hero/description";

export default component$(({ data }: { data: any }) => {
  const mobile = useSignal(false);

  useOnWindow(
    ["load", "resize"],
    $(() => {
      const width = window.innerWidth;
      mobile.value = width < 450;
    }),
  );

  return (
    <header class={styles.container}>
      <div class={styles.box.left}>
        <h1 class={styles.title}>{data.name}</h1>
        {!mobile.value && (
          <>
            <Description
              position={data.position}
              details={data.description[0].data}
            />
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
            src={data.company.color_logo.src}
          />

          <p class="text-slate-500 md:mt-4">
            Powered by: <span class="font-bold">{data.company.name}</span>
          </p>
          {/* icon */}
        </div>

        <DeadlineCard deadline={data.application_end_date} />
        <InfoCard
          location={data.location.name}
          duration={data.duration}
          deadline={data.application_end_date}
          start={data.scholarship_start_date}
        />
      </div>
      {mobile.value && (
        <>
          <Description
            position={data.position}
            details={data.description.data}
          />
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
  icon: "h-16 w-16 object-cover",
};
