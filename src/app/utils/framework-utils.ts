export const frameworks = [
    "react",
    "chrome",
    "svelte",
    "vue",
    "tailwind",
    "mobile",
    "desktop",
    "safari",
    "qwik",
] as const;

export type Framework =(typeof frameworks)[number];
