export const cancellable = (callback: (...args: unknown[]) => Promise<unknown>, args: unknown[], sleepTime: number = 0) => {
  let timer: NodeJS.Timeout | null = null;

  const cancelFn = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  timer = setTimeout(async () => {
    await callback(...args);
  }, sleepTime);

  return cancelFn;
}
