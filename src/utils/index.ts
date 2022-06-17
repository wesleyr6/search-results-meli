export function convertPriceToCurrency(currency: string, amount: number) {
  const format = new Intl.NumberFormat('es', {
    style: 'currency',
    currency,
  }).format(amount);

  return format.replace(currency, '').trim();
}

export default { convertPriceToCurrency };
