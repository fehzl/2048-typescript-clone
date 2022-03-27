async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function mounted(callback: Function) {
  await sleep(500);
  callback();
}
