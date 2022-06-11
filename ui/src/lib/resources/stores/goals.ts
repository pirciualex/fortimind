import { writable, type Writable } from "svelte/store";
import type { Goal } from "../interfaces/goal";

export const goalsData: Writable<Array<Goal>> = writable([
  // {
  //   id: Math.floor(Math.random() * 10000),
  //   description: "Do 10 pushps",
  //   done: false,
  //   isPrimary: false,
  // },
  // {
  //   id: Math.floor(Math.random() * 10000),
  //   description: "Read 20 pages",
  //   done: true,
  //   isPrimary: false,
  // },
  // {
  //   id: Math.floor(Math.random() * 10000),
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maiores.",
  //   done: false,
  //   isPrimary: false,
  // },
  // {
  //   id: Math.floor(Math.random() * 10000),
  //   description:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus dolor minima animi explicabo asperiores, eaque soluta quas deserunt obcaecati!",
  //   done: true,
  //   isPrimary: false,
  // },
]);

// export const primaryGoal = writable(
//   goalsData.subscribe((g) => g.find((x) => x.isPrimary))
// );
