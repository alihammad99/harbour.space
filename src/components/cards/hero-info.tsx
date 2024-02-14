import { component$ } from "@builder.io/qwik";
import LabelValue from "../text/label-value";
import { formatDate } from "~/utils/format-date";

interface Props {
  location: string;
  duration: string;
  deadline: string;
  start: string;
}

export default component$(({ location, duration, deadline, start }: Props) => {
  return (
    <div class={styles.container}>
      <div class={styles.box.left}>
        <LabelValue label={"Location"} value={location} />
        <LabelValue label={"Start date"} value={formatDate(start)} />
      </div>
      <div class={styles.box.right}>
        <LabelValue label={"Duration"} value={`${duration} Year Full-Time`} />
        <LabelValue label={"End date"} value={formatDate(deadline)} />
      </div>
    </div>
  );
});

const styles = {
  container:
    "rounded-md bg-white border border-slate-300 p-5 flex flex-row w-full ",
  box: {
    left: "w-3/5 flex flex-col gap-4",
    right: "w-2/5 flex flex-col gap-4",
  },
};
