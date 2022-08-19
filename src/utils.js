export const currency = (money) => {
  if (!money) {
    money = 0;
  }
  return money.toLocaleString("en-US", { maximumFractionDigits: 2, style:'currency', currency:'USD' });
};
