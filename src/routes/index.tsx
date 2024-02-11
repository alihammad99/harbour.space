import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../sections/hero";
import About from "~/sections/about";
import Testimonials from "~/sections/testimonials";
import FAQ from "~/sections/faq";

export default component$(() => {
  return (
    <>
      <Hero />
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
