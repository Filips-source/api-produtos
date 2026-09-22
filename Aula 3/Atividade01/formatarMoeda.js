export function formatarMoeda(valor) {
  // TODO: valide o valor e devolva a formatação monetária em pt-BR.
  if(!Number.isFinite(valor)) {
    throw new TypeError('Valor monetário deve ser um número finito')
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}
