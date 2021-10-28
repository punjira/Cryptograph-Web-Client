export function createTailwindGradient(sentiment: number | undefined): string {
  if (!sentiment) {
    return `bg-gray-300`;
  }
  const color = sentiment > 0 ? "green" : "red";
  const dark_den =
    Math.abs(sentiment) * 500 - ((Math.abs(sentiment) * 500) % 100);
  return `bg-gradient-to-r from-${color}-${dark_den} to-${color}-100`;
}
