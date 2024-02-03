import {
  component$,
  $,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import AboutCards from "~/components/cards/about";

export default component$(() => {
  const mobile = useSignal(false);

  useVisibleTask$(
    () => {
      const width = window.innerWidth;
      mobile.value = width < 450;
    },
    { strategy: "document-ready" },
  );

  // Getting window's width
  useOnWindow(
    "resize",
    $(() => {
      const width = window.innerWidth;
      mobile.value = width < 450;
    }),
  );

  return (
    <section class="container">
      <div class={styles.container}>
        <div class="relative z-30 h-80 w-full translate-y-4 bg-white sm:translate-y-0 md:w-auto">
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
        <div class="z-30 w-full rounded-md border border-t-0 border-slate-200 bg-white p-8 md:w-2/4 md:border-0">
          <h3 class="mb-8 max-w-[90%] overflow-clip text-2xl font-semibold text-violet-700 md:text-3xl">
            About the
            <br /> apprenticeship
          </h3>
          <p class="text-slate-500">
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.{" "}
          </p>
        </div>

        <div
          class={`${styles.absolute} z-[-10] mt-8 h-2/4 w-screen bg-violet-600 md:invisible`}
        ></div>
      </div>
      <AboutCards />
    </section>
  );
});

const styles = {
  container: "pt-16 relative mx-4 flex flex-wrap justify-between md:flex-row",

  absolute:
    "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]",
};
