export const snps_ka = {
  1: {
    name: "RFC",
    matchWith: ['rfc'],
    type: 'rfc'
  },
  2: {
    name: "Folio mercantil"
  },
  3: {
    name: "Objeto social"
  },
  4: {
    name: "Fecha de creación"
  },
  5: {
    name: "Capital social mínimo"
  },
  6: {
    name: "Dirección fiscal",
    matchWith: ['address'],
    type: 'address'
  },
  8: {
    name: "Teléfono",
    matchWith: ['phone'],
    type: 'phone'
  },
  9: {
    name: "Sitio web",
    matchWith: ['website'],
    type: 'website'
  },
  10: {
    name: "Correo electrónico",
    matchWith: ['email'],
    type: 'email'
  },
  11: {
    name: "Nombre completo",
    category: "name",
    type: "person",
    matchWith: ['person'],
    bigGroup: 'representante'
  },
  12: {
    name: "RFC",
    category: "rfc",
    type: "rfc",
    matchWith: ['rfc'],
    bigGroup: 'representante'
  },
  13: {
    name: "Dirección",
    category: "address",
    type: "address",
    matchWith: ['address'],
    bigGroup: 'representante'
  },
  16: {
    name: "Nombre completo",
    category: "name",
    type: "person",
    matchWith: ['person'],
    bigGroup: 'accionista'
  },
  17: {
    name: "RFC",
    category: "rfc",
    type: "rfc",
    matchWith: ['rfc'],
    bigGroup: 'accionista'
  },
  18: {
    name: "Dirección",
    category: "address",
    type: "address",
    matchWith: ['address'],
    bigGroup: 'accionista'
  },
  19: {
    bypass: true
  },
  20: {
    bypass: true
  },
  21: {
    name: "Capital aportado",
    sumWith: ["inner_capital_aportado"]
  },
  22: {
    name: "Nombre completo",
    category: "name",
    type: "person",
    matchWith: ['person'],
    bigGroup: 'administrador'
  },
  23: {
    name: "RFC",
    category: "rfc",
    type: "rfc",
    matchWith: ['rfc'],
    bigGroup: 'administrador'
  },
  24: {
    name: "Dirección",
    category: "address",
    type: "address",
    matchWith: ['address'],
    bigGroup: 'administrador'
  },
  27: {
    name: "Nombre completo",
    category: "name",
    type: "person",
    matchWith: ['person'],
    bigGroup: 'consejero'
  },
  28: {
    name: "RFC",
    category: "rfc",
    type: "rfc",
    matchWith: ['rfc'],
    bigGroup: 'consejero'
  },
  29: {
    name: "Dirección",
    category: "address",
    type: "address",
    matchWith: ['address'],
    bigGroup: 'consejero'
  },
  32: {
    name: "Nombre del notario",
    matchWith: ['notario', 'person'],
    type: 'notario',
    group: 'Notaría'
  },
  33: {
    name: "Número de notaría",
    matchWith: ['no_notaria'],
    type: 'no_notaria',
    group: 'Notaría'
  },
  34: {
    name: "Dirección de notaría",
    matchWith: ['address'],
    type: 'addresss',
    group: 'Notaría'
  },
  37: {
    name: "¿Quién otorga los recursos?",
    group: 'contrato',
    bigGroup: 'contrato',
    category: "emisor",
    matchWith: ['person', 'empresa', 'instancia']
  },
  38: {
    name: "Número de contrato",
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['contrato']
  },
  39: {
    name: "Fecha de inicio",
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'date',
  },
  40: {
    name: "Fecha de término",
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'date'
  },
  41: {
    name: "Servicio realizado",
    group: 'contrato',
    bigGroup: 'contrato',
  },
  42: {
    name: "Persona que firma",
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'person',
    matchWith: ['person']
  },
  42: {
    name: "Persona que firma",
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'person',
    matchWith: ['person']
  },
  43: {
    name: "Cargo de quien firma",
    group: 'contrato',
    bigGroup: 'contrato',
  },
  44: {
    bypass: true
  },
  45: {
    name: "Monto del contrato",
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'currency',
    category: 'monto',
    sumWith: ['montos_contrato', 'montos_totales']
  },
  53: {
    name: "¿Quién otorga los recursos?",
    group: 'convenio',
    bigGroup: 'convenio',
    category: "emisor",
    matchWith: ['instancia']
  },
  54: {
    name: "¿Quién recibe los recursos?",
    group: 'convenio',
    bigGroup: 'convenio',
    category: "receptor",
    matchWith: ['instancia']
  },
  55: {
    name: "Número de convenio",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['conveio']
  },
  56: {
    name: "Fecha de inicio",
    group: 'convenio',
    bigGroup: 'convenio',
    type: 'date'
  },
  57: {
    name: "Fecha de término",
    group: 'convenio',
    bigGroup: 'convenio',
    type: 'date'
  },
  58: {
    name: "Objeto del convenio",
    group: 'convenio',
    bigGroup: 'convenio',
  },
  59: {
    name: "Persona que firma (otorga)",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person']
  },
  60: {
    name: "Cargo de quien firma (otorga)",
    group: 'convenio',
    bigGroup: 'convenio',
  },
  61: {
    name: "Persona que firma (recibe)",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person']
  },
  62: {
    name: "Cargo de quien firma (recibe)",
    group: 'convenio',
    bigGroup: 'convenio',
  },
  63: {
    name: "Monto del convenio",
    type: 'currency',
    category: 'monto',
    group: 'convenio',
    bigGroup: 'convenio',
    sumWith: ['montos_convenio']
  },
  64: {
    name: "recursos",
    category: 'emisor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['empresa', 'instancia', 'person']
  },
  65: {
    name: "Monto de la transferencia",
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales']
  },
  66: {
    name: "recursos",
    category: 'emisor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['empresa', 'instancia', 'person']
  },
  67: {
    name: "Monto de la transferencia",
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales']
  },
  68: {
    name: "recursos",
    category: 'receptor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['empresa', 'instancia', 'person']
  },
  69: {
    name: "Monto de la transferencia",
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales']
  },
}
