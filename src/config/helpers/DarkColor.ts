export const darkenColor = (hex: string, amount: number = 0.4): string => {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  if (luminance > 200) {
    const darkR = Math.floor(r * (1 - amount));
    const darkG = Math.floor(g * (1 - amount));
    const darkB = Math.floor(b * (1 - amount));
    const darkened = (darkR << 16) + (darkG << 8) + darkB;
    return `#${darkened.toString(16).padStart(6, '0')}`;
  }

  return hex;
};
