import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.header}>
        <div class={styles.avatarContainer}>
          <div class={styles.avatar}>
            <Image alt="avatar" src="/avatar.png" width={80} />{" "}
          </div>
          <div>
            <p class={styles.name}>Irene Pereyra</p>
            <p class={styles.subtitle}>Interaction Design Fellow ‘19</p>
          </div>
        </div>
        <span class={styles.inText}>in</span>
      </div>

      <div class={styles.content}>
        <p class={styles.contentText}>
          This Fellowship was a turning point in my career. I wouldn’t be where
          I am today without the financial support and experienced offered
          through the program.
        </p>
        <p class={styles.education}>Education · B.A. Visual Design</p>
      </div>
    </div>
  );
});

const styles = {
  container:
    "relative h-full min-w-[100%] select-none rounded-md border border-slate-300 bg-white md:min-w-[50%]",
  header: "flex w-full items-center justify-between px-8",
  avatarContainer: "mx-auto flex w-full items-center gap-3 py-8",
  avatar: "h-16 w-16 rounded-full", // Adjusted avatar size
  name: "translate-y-1 font-medium text-slate-800",
  subtitle: "font-light text-slate-600",
  inText: "text-lg font-bold text-gray-400",
  content: "h-3/5 w-full items-center justify-center bg-slate-50 px-16 py-12",
  contentText: "text-xl font-light text-slate-600",
  education: "mt-6 text-sm font-light text-slate-700",
};
