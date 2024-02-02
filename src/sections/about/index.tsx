import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

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
    <section class={styles.container}>
      <div class="relative z-30 m-auto h-80 w-full translate-y-4 sm:translate-y-0   bg-white">
        <div class={`${styles.absolute} z-50 w-4/5 p-2`}>
          <img
            class=" rounded-full"
            width="400"
            height="400"
            alt="about"
            src="/about.png"
          />
        </div>

        <div class="absolute bottom-0 z-10 border border-b-0 border-slate-200 h-2/4 w-full bg-white"></div>
        <div class={`${styles.absolute} w-full`}>
          <img width="600" height="600" alt="pattern" src="/pattern.svg" />
        </div>
      </div>
      <div class="z-30 bg-white p-8 border border-t-0 border-slate-200 rounded-md">
        <h3 class="font-semibold text-3xl text-violet-700 mb-8 max-w-[90%] overflow-clip">
          About the
          <br /> apprenticeship
        </h3>
        <p class="text-slate-500">
          Our scholarships are designed to give talented and driven young people
          from any background access to top-class education, experience and
          network. We offer a fully-funded master’s degree alongside an
          apprenticeship and a guaranteed job upon graduation.{" "}
        </p>
      </div>

      <div
        class={`${styles.absolute} mt-8 z-[-10] h-2/4 w-screen bg-violet-600`}
      ></div>
    </section>
  );
});

const styles = {
  container:
    "container px-4 relative mx-4 flex flex-wrap justify-between md:flex-row",

  absolute:
    "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]",
};
