import {
  component$,
  $,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import LabelValue from "~/components/text/label-value";

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
            class={`${styles.absolute} z-50 w-4/5 p-2 md:left-0 md:w-64 md:translate-x-0`}
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
        <div class="z-30 rounded-md border border-t-0 border-slate-200 bg-white p-8 md:w-2/4 md:border-0">
          <h3 class="mb-8 max-w-[90%] overflow-clip text-3xl font-semibold text-violet-700">
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
      <div class="flex flex-row gap-7 md:h-[90vh]">
        <div class="h-full w-1/3 gap-8 rounded-md border border-slate-300 p-8">
          <div class="mb-4 h-2/4 w-full">
            <LabelValue
              textStyle="text-5xl mt-4"
              label="Scholarship value"
              value="€31,300"
            />
          </div>
          <div class="border-t-1 flex flex-wrap justify-between gap-6 border border-t-slate-300 p-4">
            <LabelValue label="Tuition covered" value="€31,300" />
            <LabelValue label="Remaining" value="€31,300" />
            <LabelValue label="Living stipend" value="€31,300" />
          </div>
        </div>
        <div class="flex h-full w-2/3 flex-col justify-between">
          <div class="flex h-2/3 flex-col justify-between gap-8 md:flex-row">
            <div class="h-full w-2/4 rounded-md border border-slate-300 p-8">
              <LabelValue
                textStyle="text-2xl mt-4 text-slate-600"
                label="Scholarship value"
                value="€31,300"
              />
              <div class="mb-3 mt-4 h-[1px] w-8 bg-slate-300"></div>
              <p class=" text-xs font-light leading-5 text-slate-500">
                You will complete 15 modules to graduate. Daily classes are 3
                hours, plus coursework to complete in your own time.
              </p>
            </div>
            <div class="h-full w-2/4  rounded-md border border-slate-300 p-8">
              <LabelValue
                textStyle="text-2xl mt-4 text-slate-600"
                label="Scholarship value"
                value="€31,300"
              />
              <div class="mb-3 mt-4 h-[1px] w-8 bg-slate-300"></div>
              <p class=" text-xs font-light leading-5 text-slate-500">
                You will complete 15 modules to graduate. Daily classes are 3
                hours, plus coursework to complete in your own time.
              </p>
            </div>
          </div>
          <div class="flex w-full flex-row items-center justify-center py-2 text-center">
            <span class="h-[0.7px] w-full bg-slate-300"></span>
            <p class="m-2 text-center text-xs">GRADUATION</p>
            <span class="h-[0.7px] w-full bg-slate-300"></span>
          </div>
          <div class="h-2/4 w-full  rounded-md border border-slate-300 p-8">
            <LabelValue
              textStyle="text-2xl mt-4 text-slate-600"
              label="Scholarship value"
              value="€31,300"
            />
            <div class="mb-3 mt-4 h-[1px] w-8 bg-slate-300"></div>
            <p class=" text-xs font-light leading-5 text-slate-500">
              You’ll be guaranteed a 1 year contract with SCG upon graduation.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
});

const styles = {
  container:
    "pt-16 px-4 relative mx-4 flex flex-wrap justify-between md:flex-row",

  absolute:
    "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]",
};
