export const snps_ka = {
  1: {
    name: "RFC",
    matchWith: ['rfc'],
    type: 'rfc',
    cell: 'B',
  },
  2: {
    name: "Folio mercantil",
    cell: 'C'
  },
  3: {
    name: "Objeto social",
    cell: 'D'
  },
  4: {
    name: "Número de empleados",
    cell: 'E',
  },
  5: {
    name: "Fecha de creación",
    matchWith: ['date'],
    cell: 'F'
  },
  6: {
    name: "Capital social mínimo",
    cell: 'G'
  },
  7: {
    name: "Dirección fiscal",
    matchWith: ['address'],
    type: 'address',
    cell: 'H'
  },
  8: {
    bypass: true,
    cell: 'I'
  },
  9: {
    bypass: true,
    cell: 'J'
  },
  10: {
    name: "Teléfono",
    matchWith: ['phone'],
    type: 'phone',
    cell: 'K'
  },
  11: {
    name: "Sitio web",
    matchWith: ['website'],
    type: 'website',
    cell: 'L'
  },
  12: {
    name: "Correo electrónico",
    matchWith: ['email'],
    type: 'email',
    cell: 'M'
  },
  /* R */
  13: {
    name: "Nombre completo",
    category: "name",
    type: "person",
    matchWith: ['person'],
    bigGroup: 'representante',
    cell: 'N'
  },
  14: {
    name: "RFC",
    category: "rfc",
    type: "rfc",
    matchWith: ['rfc'],
    bigGroup: 'representante',
    cell: 'O'
  },
  15: {
    name: "Dirección",
    category: "address",
    type: "address",
    matchWith: ['address'],
    bigGroup: 'representante',
    cell: 'P'
  },
  16: {
    bypass: true,
  },
  17: {
    bypass: true
  },
  18: {
    bypass: true,
  },
  19: {
    bypass: true
  },
  /* A */
  20: {
    name: "Nombre completo",
    category: "name",
    type: "person",
    matchWith: ['person'],
    bigGroup: 'accionista'
  },
  21: {
    name: "RFC",
    category: "rfc",
    type: "rfc",
    matchWith: ['rfc'],
    bigGroup: 'accionista'
  },
  22: {
    name: "Dirección",
    category: "address",
    type: "address",
    matchWith: ['address'],
    bigGroup: 'accionista'
  },
  23: {
    bypass: true
  },
  24: {
    bypass: true
  },
  25: {
    bypass: true
  },
  26: {
    bypass: true
  },
  27: {
    name: "Capital aportado",
    sumWith: ["inner_capital_aportado"]
  },
  /* Admin */
  28: {
    name: "Nombre completo",
    category: "name",
    type: "person",
    matchWith: ['person'],
    bigGroup: 'administrador'
  },
  29: {
    name: "RFC",
    category: "rfc",
    type: "rfc",
    matchWith: ['rfc'],
    bigGroup: 'administrador'
  },
  30: {
    name: "Dirección",
    category: "address",
    type: "address",
    matchWith: ['address'],
    bigGroup: 'administrador'
  },
  31: {
    bypass: true
  },
  32: {
    bypass: true
  },
  33: {
    bypass: true
  },
  34: {
    bypass: true
  },
  /* Comisario */
  35: {
    name: "Nombre completo",
    category: "name",
    type: "person",
    matchWith: ['person'],
    bigGroup: 'consejero'
  },
  36: {
    name: "RFC",
    category: "rfc",
    type: "rfc",
    matchWith: ['rfc'],
    bigGroup: 'consejero'
  },
  37: {
    name: "Dirección",
    category: "address",
    type: "address",
    matchWith: ['address'],
    bigGroup: 'consejero'
  },
  38: {
    bypass: true
  },
  39: {
    bypass: true
  },
  40: {
    bypass: true
  },
  41: {
    bypass: true
  },
  /* Revisar en primera función */
  42: {
    name: "Nombre del notario",
    matchWith: ['person'],
    type: 'notario',
    group: 'Notaría'
  },
  43: {
    name: "Número de notaría",
    matchWith: ['no_notaria'],
    type: 'no_notaria',
    group: 'Notaría'
  },
  44: {
    name: "Dirección de notaría",
    matchWith: ['address'],
    type: 'addresss',
    group: 'Notaría'
  },
  45: {
    bypass: true
  },
  46: {
    bypass: true
  },
  /* Termina revisar en primera función */
  /* BANDERAS ROJAS */
  47: {
    bypass: true
  },
  48: {
    bypass: true
  },
  /* Contrato */
  49: {
    name: "¿Quién otorga los recursos?",
    group: 'contrato',
    bigGroup: 'contrato',
    category: "emisor",
    matchWith: ['empresa', 'instancia']
  },
  50: {
    name: "Número de contrato",
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['convenio']
  },
  51: {
    name: "Fecha de inicio",
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['date'],
    type: 'date',
  },
  52: {
    name: "Fecha de término",
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['date'],
    type: 'date'
  },
  53: {
    name: "Servicio realizado",
    group: 'contrato',
    bigGroup: 'contrato',
  },
  54: {
    name: "Persona que firma",
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'person',
    matchWith: ['person']
  },
  55: {
    name: "Cargo de quien firma",
    group: 'contrato',
    bigGroup: 'contrato',
  },
  56: {
    name: "Monto del contrato",
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'currency',
    category: 'monto',
    sumWith: ['montos_contrato', 'montos_totales']
  },
  57: {
    name: "Número de licitación",
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['convenio'],
  },
  58: {
    name: "Fecha de fallo",
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['date'],
    type: 'date'
  },
  59: {
    name: "Monto total de licitación",
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'currency'
  },
  /* Convenio */
  60: {
    name: "¿Quién otorga los recursos?",
    group: 'convenio',
    bigGroup: 'convenio',
    category: "emisor",
    matchWith: ['instancia']
  },
  61: {
    name: "¿Quién recibe los recursos?",
    group: 'convenio',
    bigGroup: 'convenio',
    category: "receptor",
    matchWith: ['instancia']
  },
  62: {
    name: "Número de convenio",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['convenio']
  },
  63: {
    name: "Fecha de inicio",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['date'],
    type: 'date'
  },
  64: {
    name: "Fecha de término",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['date'],
    type: 'date'
  },
  65: {
    name: "Objeto del convenio",
    group: 'convenio',
    bigGroup: 'convenio',
  },
  66: {
    name: "Persona que firma (otorga)",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person']
  },
  67: {
    name: "Cargo de quien firma (otorga)",
    group: 'convenio',
    bigGroup: 'convenio',
  },
  68: {
    name: "Persona que firma (recibe)",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person']
  },
  69: {
    name: "Cargo de quien firma (recibe)",
    group: 'convenio',
    bigGroup: 'convenio',
  },
  70: {
    name: "Monto del convenio",
    type: 'currency',
    category: 'monto',
    group: 'convenio',
    bigGroup: 'convenio',
    sumWith: ['montos_convenio']
  },
  71: {
    name: "Titular de instancia que otorga al momento de firmar el convenio",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person', 'titular']
  },
  72: {
    name: "Titular de instancia que recibe al momento de firmar el convenio",
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person', 'titular']
  },
  /* Transferencias */
  73: {
    name: "¿Quién otorgó los recursos?",
    realName: 'recursos',
    category: 'emisor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['instancia'],
    type: 'empresa'
  },
  74: {
    name: "Monto de la transferencia",
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales']
  },
  75: {
    name: "Número de convenio relacionado",
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['convenio']
  },
  76: {
    name: "recursos",
    category: 'emisor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['empresa']
  },
  77: {
    name: "Monto de la transferencia",
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales']
  },
  78: {
    name: "recursos",
    category: 'receptor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['empresa', 'instancia', 'person']
  },
  79: {
    name: "Monto de la transferencia",
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales']
  },
  /* Otros */
  80: {
    name: "Nombre de la empresa",
    category: 'empresa',
  },
  81: {
    name: "Nombre de persona",
    category: 'person',
  },
  82: {
    name: "Dirección",
    category: 'address',
  },
  83: {
    name: "RFC",
    category: 'rfc',
  },
  84: {
    name: "Fecha",
    category: 'date',
  },
  85: {
    name: "Correo electrónico",
    category: 'email',
  },
  86: {
    name: "Sitio web",
    category: 'website',
  },
  87: {
    name: "Teléfono",
    category: 'phone',
  },
  88: {
    name: "Número de contrato o convenio",
    category: 'convenio',
  },
  89: {
    name: "Dependencia / Instancia",
    category: 'instancia',
  },
  90: {
    name: "Monto recibido",
    category: 'monto_recibido',
  },
  91: {
    name: "Titulares de instancia",
    category: 'titular',
  },
  92: {
    name: "Monto otorgado",
    category: 'monto_otorgado',
  },
  95: {
    name: "Comentarios"
  },
}
