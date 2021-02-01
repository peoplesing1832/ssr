export const isClient = () => {
  let r;
  try {
    window;
    r = true;
  } catch (error) {
    r = false;
  }
  return r;
}
