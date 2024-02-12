import { component$ } from "@builder.io/qwik";
import LabelValue from "~/components/text/label-value";

export default component$(({ data }: { data: any }) => {
  return (
    <div class={styles.container}>
      <div class={styles.box.top}>
        <LabelValue
          textStyle="md:text-5xl mt-4"
          label="Scholarship value"
          value={`€${data.total_value.toLocaleString()}`}
        />
      </div>
      <div class={styles.box.bottom}>
        <LabelValue
          label="Tuition covered"
          value={`€${data.tuition.toLocaleString()}`}
        />
        <LabelValue
          label="Remaining"
          value={`€${data.remaining.toLocaleString()}`}
        />
        <LabelValue
          label="Living stipend"
          value={`€${data.stipend_per_year.toLocaleString()} (€${data.stipend_per_month.toLocaleString()}/month)`}
        />
      </div>
    </div>
  );
});

const styles = {
  container:
    "h-full w-full md:w-1/3 gap-8 rounded-md md:border border-slate-300 p-8",
  box: {
    top: "mb-4 h-2/4 w-full",
    bottom:
      "border-t-1 content-center justify-between gap-8 h-2/4 translate-y-3 xl:translate-y-4 flex flex-wrap place-items-end md:border-t border-t-slate-300 md:p-4",
  },
};
