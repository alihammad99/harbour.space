import { server$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../sections/hero";
import About from "~/sections/about";
import Testimonials from "~/sections/testimonials";
import FAQ from "~/sections/faq";
import { getData } from "~/api/get-data";

export default server$(async () => {
  const data = await getData()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
    });

  return (
    <>
      <Hero data={data.scholarship} />
      <About data={data.scholarship} />
      <Testimonials />
      <FAQ data={data.scholarship.faqs} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
