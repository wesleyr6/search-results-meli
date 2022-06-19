export function convertPriceToCurrency(currency: string, amount: number) {
  const format = new Intl.NumberFormat('es', {
    style: 'currency',
    currency,
  }).format(amount);

  return format.replace(currency, '').trim();
}

export function getNamefromCondition(
  conditional: 'new' | 'not_specified' | 'used'
) {
  switch (conditional) {
    case 'new':
      return 'Nuevo';

    case 'used':
      return 'Usado';

    default:
      return 'No especificado por el vendedor';
  }
}

export default { convertPriceToCurrency };
