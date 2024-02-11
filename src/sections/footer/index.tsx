import { component$ } from "@builder.io/qwik";
import FooterItem from "~/components/text/footer-item";

export default component$(() => {
  return (
    <ul class="fixed bottom-0 left-0 hidden w-full gap-16 border border-slate-300 bg-white px-16 py-8 lg:flex">
      <FooterItem title="Zeptolab" value="Marketing Performance" />
      <FooterItem title="Location" value="Bangkok" />
      <FooterItem title="Duration" value="1 Year Full-Time" />
      <FooterItem title="Start date" value="3 Aug 2020" />
      <FooterItem title="Application deadline" value="30 June 2020" />
      <FooterItem
        title="Application closes in"
        value="6 Day : 22 Hrs : 56 Min"
      />
    </ul>
  );
});
