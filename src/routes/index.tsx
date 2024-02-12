import { server$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../sections/hero";
import About from "~/sections/about";
import Testimonials from "~/sections/testimonials";
import FAQ from "~/sections/faq";
import { getData } from "~/api/get-data";

const data = await getData();
const { meta } = data;

export default server$(async () => {
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
  title: meta.title,
  meta: [
    {
      name: "description",
      content: meta.description,
    },
    { name: "abstract", content: meta.abstract },
  ],
};
