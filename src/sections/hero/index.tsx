import { component$, useSignal } from "@builder.io/qwik";
import { QwikLottie } from "qwik-lottie-web";
import Button from "~/components/button/primary";
import DeadlineCard from "~/components/cards/hero-deadline";
import InfoCard from "~/components/cards/hero-info";
import Description from "~/components/hero/description";
import { Image } from "@unpic/qwik";

export default component$(({ data }: { data: any }) => {
  const container = useSignal<HTMLElement>();
  const animation = JSON.parse(data.program.json_logo);

  return (
    <header class={styles.container}>
      <div class={styles.leftBox}>
        <div class={styles.animation}>
          <QwikLottie container={container.value} animationData={animation} />
        </div>
        <h1 class={styles.title}>{data.name}</h1>
        <div class="hidden w-full flex-col lg:flex">
          <Description
            position={data.position}
            details={data.description[0].data}
          />
          <Button link={data.program.link} />
        </div>
      </div>
      <div class={styles.rightBox}>
        <Image
          alt="pattern"
          src="/square-pattern.svg"
          width={600}
          class={styles.patternImage}
        />

        <div class={styles.partnerBox}>
          <Image
            alt="Partner icon"
            src={data.company.color_logo.src}
            width={70}
            height={70}
            class={styles.partnerIcon}
          />

          <p class={styles.partnerText}>
            Powered by:
            <span class={styles.partnerName}>{data.company.name}</span>
          </p>
        </div>

        <DeadlineCard deadline={data.application_end_date} />
        <InfoCard
          location={data.location.name}
          duration={data.duration}
          deadline={data.application_end_date}
          start={data.scholarship_start_date}
        />
      </div>
      <div class="flex flex-col lg:hidden">
        <Description
          position={data.position}
          details={data.description[0].data}
        />
        <Button />
      </div>
    </header>
  );
});

const styles = {
  container:
    "container max-w-screen overflow-hidden pt-32 flex flex-wrap justify-between md:flex-row",
  leftBox: "md:w-2/5 relative",
  rightBox: "flex flex-col relative gap-4 w-full md:w-2/5 md:gap-6",
  partnerBox:
    "flex w-full flex-col-reverse gap-6 mt-8 mb-2 lg:m-0 md:flex md:flex-row md:items-center",
  title: "text-4xl font-medium text-primary z-10",
  partnerIcon: "h-16 w-16 object-cover",
  animation: "absolute right-1 top-[-2em] h-32 w-32 z-[-1]",
  patternImage:
    "invisible absolute bottom-0 right-0 z-[-1] w-[100rem] translate-x-[20%] translate-y-[20%] lg:visible",
  partnerText: "flex font-light text-slate-500 lg:flex-col",
  partnerName: "text-lg pl-1 lg:p-0 text-slate-600",
};
