export const checkIsEsc = (evt: KeyboardEvent) => {
  if (evt.key === "Escape" || evt.key === "Esc") {
    return true;
  }
};
