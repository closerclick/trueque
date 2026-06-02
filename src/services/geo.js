// Cliente del índice geo (geo.closer.click) — usa el paquete del ecosistema,
// no reimplementa el protocolo. Identidad inyectada desde el vault.

import { createGeoClient } from '@closerclick/closer-click-geo'
import { signData, getPublicKeyJwk } from './identity'

let geo = null

export function getGeo () {
  if (!geo) {
    geo = createGeoClient({ signData, getPublicKeyJwk })
    // baseUrl default = https://geo.closer.click
  }
  return geo
}
