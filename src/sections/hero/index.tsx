import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { QwikLottie } from "qwik-lottie-web";
import Button from "~/components/button/primary";
import DeadlineCard from "~/components/cards/hero-deadline";
import InfoCard from "~/components/cards/hero-info";
import Description from "~/components/hero/description";
import { Image } from "@unpic/qwik";

export default component$(({ data }: { data: any }) => {
  const mobile = useSignal(false);
  const container = useSignal<HTMLElement>();

  useOnWindow(
    ["load", "resize"],
    $(() => {
      const width = window.innerWidth;
      mobile.value = width < 450;
    }),
  );

  const animation = JSON.parse(data.program.json_logo);

  return (
    <header class={styles.container}>
      <div class={styles.box.left}>
        <div class={styles.animation}>
          <QwikLottie container={container.value} animationData={animation} />
        </div>
        <h1 class={styles.title}>{data.name}</h1>
        {!mobile.value && (
          <>
            <Description
              position={data.position}
              details={data.description[0].data}
            />
            <Button link={data.program.link} />
          </>
        )}
      </div>
      <div class={styles.box.right}>
        <Image
          alt="pattern"
          src="/square-pattern.svg"
          width={600}
          class="absolute bottom-0 right-0 z-[-1] w-[100rem] translate-x-[20%] translate-y-[20%]"
        />

        <div class={styles.box.partner}>
          <Image
            alt="Partner icon"
            src={data.company.color_logo.src}
            width={70}
            height={70}
            class={styles.icon}
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
    left: "md:w-2/5 relative",
    right: "flex flex-col relative gap-4 md:w-2/5 md:gap-6",
    partner:
      "flex w-full flex-col-reverse gap-6  md:flex md:flex-row md:items-center",
  },
  title: "text-3xl font-bold text-primary",
  icon: "h-16 w-16 object-cover",
  animation: "absolute right-1 top-[-2em] h-32 w-32",
};
