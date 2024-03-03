import post from './post-schema'
import nutricionADomicilioPrices from './tarifas/nutricion-a-domicilio-prices-schema'
import NutricionDeColectividadesPrices from './tarifas/nutricion-de-colectividades-prices-schema'
import NutricionDeAlteracionesMetabolicasPrices from './tarifas/nutricion-y-alteraciones-metabolicas-prices-schema'
import NutricionDeEtapasDeLaVidaPrices from './tarifas/nutricion-etapas-de-la-vida-prices-schema'

const schemas = [
  post,
  nutricionADomicilioPrices,
  NutricionDeColectividadesPrices,
  NutricionDeAlteracionesMetabolicasPrices,
  NutricionDeEtapasDeLaVidaPrices,
]

export default schemas
