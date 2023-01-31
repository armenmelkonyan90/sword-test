export function sleep(ms = 1200): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
