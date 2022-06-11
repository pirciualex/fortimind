import { writable } from "svelte/store";

export const goalsData = writable([
  {
    id: Math.floor(Math.random() * 10000),
    description: "Do 10 pushps",
    done: false,
    isPrimary: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    description: "Read 20 pages",
    done: true,
    isPrimary: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maiores.",
    done: false,
    isPrimary: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus dolor minima animi explicabo asperiores, eaque soluta quas deserunt obcaecati!",
    done: true,
    isPrimary: false,
  },
]);
