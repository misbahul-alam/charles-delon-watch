const BANGLA_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export const toBanglaNumber = (val: number | string | null | undefined): string => {
  if (val === null || val === undefined) return '';
  return String(val).replace(/[0-9]/g, (digit) => BANGLA_DIGITS[parseInt(digit, 10)]);
};
