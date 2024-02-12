import { component$ } from "@builder.io/qwik";
import FooterItem from "~/components/text/footer-item";

export default component$(() => {
  return (
    <ul class="fixed bottom-0 left-0 z-[100] hidden w-full justify-center gap-20 border-t border-slate-300 bg-white py-4 lg:flex">
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