import { component$, $, useOnWindow, useSignal } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import AboutCards from "~/components/cards/about";

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
    <section class={styles.container}>
      <div class={styles.box}>
        <div class={styles.relative}>
          <div
            class={`${styles.absolute} z-50 w-4/5 p-2 md:left-0 md:w-72 md:translate-x-0 md:p-4`}
          >
            <Image
              alt="About section photo"
              src="/about.png"
              width={800}
              height={800}
              class="rounded-full"
            />
          </div>

          <div class="absolute bottom-0 z-10 h-2/4 w-full border border-b-0 border-slate-200 bg-white md:invisible"></div>
          <div
            class={`${styles.absolute} w-full md:left-0 md:w-72 md:translate-x-0`}
          >
            <Image
              alt="pattern"
              src="/pattern.svg"
              width={800}
              height={800}
              class="rounded-full"
            />
          </div>
        </div>
        <div
          class={`${styles.boxContent} w-full rounded-md border border-t-0 border-slate-200 bg-white p-8 md:w-2/4 md:border-0`}
        >
          <h3
            class={`${styles.title} mb-8 max-w-[90%] overflow-clip text-2xl font-medium text-primary md:text-4xl`}
          >
            About the
            <br /> apprenticeship
          </h3>
          <p class={`${styles.text} font-light text-slate-600`}>
            {data.about[0].data}
          </p>
        </div>

        <div
          class={`${styles.absolute} z-[-10] mt-8 h-2/4 w-screen bg-primary md:invisible`}
        ></div>
      </div>
      <AboutCards data={data} />
    </section>
  );
});

const styles = {
  container: "container pb-24",
  box: "pt-16 mt-16 lg:mt-12 relative flex flex-wrap justify-between md:flex-row",
  relative:
    "relative z-30 h-80 w-full translate-y-4 bg-white sm:translate-y-0 md:w-auto",
  absolute:
    "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]",
  boxContent:
    "z-30 w-full rounded-md border border-t-0 border-slate-200 bg-white p-8 md:w-2/4 md:border-0",
  title:
    "mb-8 max-w-[90%] overflow-clip text-2xl font-medium text-primary md:text-4xl",
  text: "font-light text-slate-600",
};
