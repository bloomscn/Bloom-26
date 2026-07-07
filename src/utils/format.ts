export function formatCurrency(value: number, currency: string) {
  return `${currency} ${new Intl.NumberFormat("en-LK").format(value)}`;
}

export function getFundraisingPercentage(raised: number, goal: number) {
  if (goal <= 0) {
    return 0;
  }

  return Math.min(Math.round((raised / goal) * 100), 100);
}
