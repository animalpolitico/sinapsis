export const snps_kav2 = {
  1: {
    name: 'RFC',
    matchWith: ['rfc'],
    type: 'rfc',
    cell: 'B',
  },
  2: {
    name: 'Folio mercantil',
    cell: 'C',
  },
  3: {
    name: 'Objeto social',
    cell: 'D',
  },
  4: {
    name: 'Número de empleados',
    cell: 'E',
  },
  5: {
    name: 'Fecha de creación',
    matchWith: ['date'],
    cell: 'F',
  },
  6: {
    name: 'Capital social mínimo',
    cell: 'G',
  },
  7: {
    name: 'Dirección fiscal',
    matchWith: ['address'],
    type: 'address',
    cell: 'H',
  },
  8: {
    bypass: true,
    cell: 'I',
  },
  9: {
    name: 'Entidad Federativa',
    type: 'address',
    trygeocode: true,
    cell: 'J',
  },
  10: {
    name: 'Teléfono',
    matchWith: ['phone'],
    type: 'phone',
    cell: 'K',
  },
  11: {
    name: 'Sitio web',
    matchWith: ['website'],
    type: 'website',
    cell: 'L',
  },
  12: {
    name: 'Correo electrónico',
    matchWith: ['email'],
    type: 'email',
    cell: 'M',
  },
  /* R */
  13: {
    name: 'Nombre completo',
    category: 'name',
    type: 'person',
    matchWith: ['person'],
    bigGroup: 'representante',
    cell: 'N',
  },
  14: {
    name: 'RFC',
    category: 'rfc',
    type: 'rfc',
    matchWith: ['rfc'],
    bigGroup: 'representante',
    cell: 'O',
  },
  15: {
    name: 'Dirección',
    category: 'address',
    type: 'address',
    matchWith: ['address'],
    bigGroup: 'representante',
    cell: 'P',
  },
  16: {
    bypass: true,
  },
  17: {
    bypass: true,
  },
  18: {
    bypass: true,
  },
  19: {
    bypass: true,
  },
  /* APO */
  20: {
    name: 'Nombre completo',
    category: 'name',
    type: 'person',
    matchWith: ['person'],
    bigGroup: 'apoderado',
    cell: 'N',
  },
  21: {
    name: 'RFC',
    category: 'rfc',
    type: 'rfc',
    matchWith: ['rfc'],
    bigGroup: 'apoderado',
    cell: 'O',
  },
  22: {
    name: 'Dirección',
    category: 'address',
    type: 'address',
    matchWith: ['address'],
    bigGroup: 'apoderado',
    cell: 'P',
  },
  23: {
    bypass: true,
  },
  24: {
    bypass: true,
  },
  25: {
    bypass: true,
  },
  26: {
    bypass: true,
  },
  /* A */
  27: {
    name: 'Nombre completo',
    category: 'name',
    type: 'person',
    matchWith: ['person'],
    bigGroup: 'accionista',
  },
  28: {
    name: 'RFC',
    category: 'rfc',
    type: 'rfc',
    matchWith: ['rfc'],
    bigGroup: 'accionista',
  },
  29: {
    name: 'Dirección',
    category: 'address',
    type: 'address',
    matchWith: ['address'],
    bigGroup: 'accionista',
  },
  30: {
    bypass: true,
  },
  31: {
    bypass: true,
  },
  32: {
    bypass: true,
  },
  33: {
    bypass: true,
  },
  34: {
    name: 'Capital aportado',
    sumWith: ['inner_capital_aportado'],
  },
  /* Admin */
  35: {
    name: 'Nombre completo',
    category: 'name',
    type: 'person',
    matchWith: ['person'],
    bigGroup: 'administrador',
  },
  36: {
    name: 'RFC',
    category: 'rfc',
    type: 'rfc',
    matchWith: ['rfc'],
    bigGroup: 'administrador',
  },
  37: {
    name: 'Dirección',
    category: 'address',
    type: 'address',
    matchWith: ['address'],
    bigGroup: 'administrador',
  },
  38: {
    bypass: true,
  },
  39: {
    bypass: true,
  },
  40: {
    bypass: true,
  },
  41: {
    bypass: true,
  },
  /* Comisario */
  42: {
    name: 'Nombre completo',
    category: 'name',
    type: 'person',
    matchWith: ['person'],
    bigGroup: 'consejero',
  },
  43: {
    name: 'RFC',
    category: 'rfc',
    type: 'rfc',
    matchWith: ['rfc'],
    bigGroup: 'consejero',
  },
  44: {
    name: 'Dirección',
    category: 'address',
    type: 'address',
    matchWith: ['address'],
    bigGroup: 'consejero',
  },
  45: {
    bypass: true,
  },
  46: {
    bypass: true,
  },
  47: {
    bypass: true,
  },
  48: {
    bypass: true,
  },
  /* Revisar en primera función */
  49: {
    name: 'Nombre del notario',
    matchWith: ['person'],
    type: 'notario',
    group: 'Notaría',
  },
  50: {
    name: 'Número de notaría',
    matchWith: ['no_notaria'],
    type: 'no_notaria',
    group: 'Notaría',
  },
  51: {
    name: 'Dirección de notaría',
    matchWith: ['address'],
    type: 'addresss',
    group: 'Notaría',
  },
  52: {
    bypass: true,
  },
  53: {
    bypass: true,
  },
  /* Termina revisar en primera función */
  /* BANDERAS ROJAS */
  54: {
    bypass: true,
  },
  55: {
    bypass: true,
  },
  /* Contrato */
  56: {
    name: '¿Quién otorga los recursos?',
    group: 'contrato',
    bigGroup: 'contrato',
    category: 'emisor',
    matchWith: ['empresa', 'instancia'],
  },
  57: {
    name: 'Número de contrato',
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['convenio'],
  },
  58: {
    name: 'Fecha de inicio',
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['date'],
    type: 'date',
  },
  59: {
    name: 'Fecha de término',
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['date'],
    type: 'date',
  },
  60: {
    name: 'Servicio realizado',
    group: 'contrato',
    bigGroup: 'contrato',
  },
  61: {
    name: 'Persona que firma',
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'person',
    matchWith: ['person'],
  },
  62: {
    name: 'Cargo de quien firma',
    group: 'contrato',
    bigGroup: 'contrato',
  },
  63: {
    name: 'Monto del contrato',
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'currency',
    category: 'monto',
    sumWith: ['montos_contrato', 'montos_totales'],
  },
  64: {
    name: 'Número de licitación',
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['convenio'],
  },
  65: {
    name: 'Fecha de fallo',
    group: 'contrato',
    bigGroup: 'contrato',
    matchWith: ['date'],
    type: 'date',
  },
  66: {
    name: 'Monto total de licitación',
    group: 'contrato',
    bigGroup: 'contrato',
    type: 'currency',
  },
  /* Convenio */
  67: {
    name: '¿Quién otorga los recursos?',
    group: 'convenio',
    bigGroup: 'convenio',
    category: 'emisor',
    matchWith: ['instancia'],
  },
  68: {
    name: '¿Quién recibe los recursos?',
    group: 'convenio',
    bigGroup: 'convenio',
    category: 'receptor',
    matchWith: ['instancia'],
  },
  69: {
    name: 'Número de convenio',
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['convenio'],
  },
  70: {
    name: 'Fecha de inicio',
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['date'],
    type: 'date',
  },
  71: {
    name: 'Fecha de término',
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['date'],
    type: 'date',
  },
  72: {
    name: 'Objeto del convenio',
    group: 'convenio',
    bigGroup: 'convenio',
  },
  73: {
    name: 'Persona que firma (otorga)',
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person'],
  },
  74: {
    name: 'Cargo de quien firma (otorga)',
    group: 'convenio',
    bigGroup: 'convenio',
  },
  75: {
    name: 'Persona que firma (recibe)',
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person'],
  },
  76: {
    name: 'Cargo de quien firma (recibe)',
    group: 'convenio',
    bigGroup: 'convenio',
  },
  77: {
    name: 'Monto del convenio',
    type: 'currency',
    category: 'monto',
    group: 'convenio',
    bigGroup: 'convenio',
    sumWith: ['montos_convenio'],
  },
  78: {
    name: 'Titular de instancia que otorga al momento de firmar el convenio',
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person', 'titular'],
  },
  79: {
    name: 'Titular de instancia que recibe al momento de firmar el convenio',
    group: 'convenio',
    bigGroup: 'convenio',
    matchWith: ['person', 'titular'],
  },
  /* Transferencias */
  80: {
    name: '¿Quién otorgó los recursos?',
    realName: 'recursos',
    category: 'emisor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['instancia'],
    type: 'empresa',
  },
  81: {
    name: 'Monto de la transferencia',
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales'],
  },
  82: {
    name: 'Número de convenio relacionado',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['convenio'],
  },
  83: {
    name: 'recursos',
    category: 'emisor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['empresa'],
  },
  84: {
    name: 'Monto de la transferencia',
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales'],
  },
  85: {
    name: 'recursos',
    category: 'receptor',
    group: 'transferencia',
    bigGroup: 'transferencia',
    matchWith: ['empresa', 'instancia', 'person'],
  },
  86: {
    name: 'Monto de la transferencia',
    type: 'currency',
    category: 'monto',
    group: 'transferencia',
    bigGroup: 'transferencia',
    sumWith: ['montos_transferencia', 'montos_totales'],
  },
  /* Otros */
  87: {
    name: 'Nombre de la empresa',
    category: 'empresa',
  },
  88: {
    name: 'Nombre de persona',
    category: 'person',
  },
  89: {
    name: 'Dirección',
    category: 'address',
  },
  90: {
    name: 'RFC',
    category: 'rfc',
  },
  91: {
    name: 'Fecha',
    category: 'date',
  },
  92: {
    name: 'Correo electrónico',
    category: 'email',
  },
  93: {
    name: 'Sitio web',
    category: 'website',
  },
  94: {
    name: 'Teléfono',
    category: 'phone',
  },
  95: {
    name: 'Número de contrato o convenio',
    category: 'convenio',
  },
  96: {
    name: 'Dependencia / Instancia',
    category: 'instancia',
  },
  97: {
    name: 'Monto recibido',
    category: 'monto_recibido',
  },
  98: {
    name: 'Titulares de instancia',
    category: 'titular',
  },
  99: {
    name: 'Monto otorgado',
    category: 'monto_otorgado',
  },
  102: {
    name: 'Comentarios',
  },
};
