export const currencyFormatter = (value: number): string => 
  `$${new Intl.NumberFormat().format(value)}`;