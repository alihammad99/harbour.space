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
      if (data) {
        return data;
      } else {
        console.log("Failed to fetch data");
      }
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
    });
  console.log(data.scholarship);
  return (
    <>
      <Hero data={data.scholarship} />
      <About />
      <Testimonials />
      <FAQ />
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
