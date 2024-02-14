import { component$ } from "@builder.io/qwik";
import VerticalCard from "./vertical-card";
import SquareCard from "./square-card";
import WideCard from "./wide-card";

export default component$(({ data }: { data: any }) => {
  return (
    <div class={styles.container}>
      <VerticalCard data={data} />
      <div class={styles.flexContainer}>
        <div class={styles.flexColumn}>
          <SquareCard
            label={"Study commitment"}
            title={`${data.study_commitment} hours / day`}
            text={data.study_commitment_text}
          />
          <SquareCard
            label={"Internship commitment"}
            title={`${data.internship_commitment} hours / day`}
            text={data.internship_commitment_text}
          />
        </div>
        <div class={styles.flexCenter}>
          <span class={styles.divider}></span>
          <p class={styles.graduationText}>GRADUATION</p>
          <span class={styles.divider}></span>
        </div>
        <WideCard label={"A full-time contract"} duration={data.duration} />
      </div>
    </div>
  );
});

const styles = {
  container: "flex flex-col gap-7 md:h-[65vh] md:flex-row lg:h-[103vh]",
  flexContainer: "flex h-full w-full flex-col justify-between md:w-2/3",
  flexColumn: "flex h-2/3 w-full flex-col justify-between gap-8 md:flex-row",
  flexCenter:
    "flex w-full flex-row items-center justify-center py-2 text-center",
  divider: "h-[0.7px] w-full bg-slate-300",
  graduationText: "m-2 text-center text-xs",
};
