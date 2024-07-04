export const cancellable = (callback: (...args: any[]) => Promise<any>, args: any[], sleepTime: number = 0) => {
  let timer: NodeJS.Timeout | null = null;

  const cancelFn = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  timer = setTimeout(async () => {
    try {
      await callback(...args);
    } catch (e) {
      throw e;
    }
  }, sleepTime);

  return cancelFn;
}
