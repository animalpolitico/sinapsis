export const sinapsisFormObject = [
  {
    group: 'Empresa',
    name: 'Razón social',
    hint: 'Nombre de la empresa',
    main: true,
    format: [
      'slug'
    ],
    type: 'text',
    category: 'empresa_name',
    required: true,
    matchable: true,
    matchWith: [
      'empresa_name'
    ],
    mods: [
      {
        name: 'Tipo',
        type: 'radio',
        name: 'empresa_type',
        values: [
          {
            name: 'Empresa',
            value: 'moral'
          },
          {
            name: 'Persona física',
            value: 'fisica'
          }
        ]
      }
    ]
  },
  {
    group: 'Empresa',
    name: 'RFC',
    validation: [
      'rfc'
    ],
    type: 'text',
    category: 'rfc',
    matchable: true,
    matchWith: [
      'rfc'
    ]
  },
  {
    group: 'Empresa',
    name: 'Folio Mercantil',
    type: 'text'
  },
  {
    group: 'Empresa',
    name: 'Tipo de adjudicación',
    type: 'dropdown',
    values: [
      {
        type: 'directa',
        name: 'Directa'
      },
      {
        type: 'licitacion',
        name: 'Licitación'
      },
    ],
  },
  {
    group: 'Empresa',
    name: 'Ejercicio fiscal',
    type: 'year',
    startsAt: 2018
  },
  {
    group: 'Empresa',
    name: 'Objeto Social',
    hint: 'Descripción de actividades',
    type: 'bigtext'
  },
  {
    group: 'Empresa',
    name: 'Fecha de creación',
    type: 'date'
  },
  {
    group: 'Empresa',
    name: 'Capital social',
    type: 'currency'
  },
  {
    group: 'Empresa',
    name: 'Dirección fiscal',
    type: 'address',
    category: 'address',
    matchable: true,
    matchWith: [
      'address'
    ]
  },
  {
    group: 'Empresa',
    name: 'Teléfono',
    type: 'tel',
    category: 'phone',
    matchable: true,
    matchWith: [
      'phone'
    ]
  },
  {
    group: 'Empresa',
    name: 'Sitio web',
    type: 'website',
    category: 'website',
    matchable: true,
    matchWith: [
      'website'
    ]
  },
  {
    group: 'Empresa',
    name: 'Correo electrónico',
    type: 'email',
    category: 'email',
    matchable: true,
    matchWith: [
      'email'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Representante Legal',
    linkWith: 'subgroup',
    name: 'Nombre completo',
    multiple: true,
    type: 'text',
    category: 'person',
    matchable: true,
    matchWith: [
      'person'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Representante Legal',
    linkWith: 'subgroup',
    name: 'RFC',
    multiple: true,
    type: 'text',
    validation: [
      'rfc'
    ],
    category: 'rfc',
    matchable: true,
    matchWith: [
      'rfc'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Representante Legal',
    linkWith: 'subgroup',
    name: 'Dirección',
    multiple: true,
    type: 'address',
    category: 'address',
    matchable: true,
    matchWith: [
      'address'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Representante Legal',
    linkWith: 'subgroup',
    name: 'Nombre de la dependencia',
    multiple: true,
    type: 'text'
  },
  {
    group: 'Empresa',
    subgroup: 'Representante Legal',
    linkWith: 'subgroup',
    name: 'Último año en activo de la dependencia',
    multiple: true,
    type: 'year',
    startsAt: 2018
  },
  {
    group: 'Empresa',
    subgroup: 'Accionistas',
    linkWith: 'subgroup',
    name: 'Nombre completo',
    multiple: true,
    type: 'text',
    category: 'person',
    matchable: true,
    matchWith: [
      'person'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Accionistas',
    linkWith: 'subgroup',
    name: 'RFC',
    multiple: true,
    type: 'text',
    validation: [
      'rfc'
    ],
    category: 'rfc',
    matchable: true,
    matchWith: [
      'rfc'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Accionistas',
    linkWith: 'subgroup',
    name: 'Dirección',
    multiple: true,
    type: 'address',
    category: 'address',
    matchable: true,
    matchWith: [
      'address'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Accionistas',
    linkWith: 'subgroup',
    name: 'Nombre de la dependencia',
    multiple: true,
    type: 'text'
  },
  {
    group: 'Empresa',
    subgroup: 'Accionistas',
    linkWith: 'subgroup',
    name: 'Último año en activo de la dependencia',
    multiple: true,
    type: 'year',
    startsAt: 2018
  },
  {
    group: 'Empresa',
    subgroup: 'Accionistas',
    linkWith: 'subgroup',
    name: 'Capital aportado',
    multiple: true,
    type: 'currency',
  },
  {
    group: 'Empresa',
    subgroup: 'Admin.',
    linkWith: 'subgroup',
    name: 'Nombre completo',
    multiple: true,
    type: 'text',
    category: 'person',
    matchable: true,
    matchWith: [
      'person'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Admin.',
    linkWith: 'subgroup',
    name: 'RFC',
    multiple: true,
    type: 'text',
    validation: [
      'rfc'
    ],
    category: 'rfc',
    matchable: true,
    matchWith: [
      'rfc'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Admin.',
    linkWith: 'subgroup',
    name: 'Dirección',
    multiple: true,
    type: 'address',
    category: 'address',
    matchable: true,
    matchWith: [
      'address'
    ]
  },
  {
    group: 'Empresa',
    subgroup: 'Admin.',
    linkWith: 'subgroup',
    name: 'Nombre de la dependencia',
    multiple: true,
    type: 'text'
  },
  {
    group: 'Empresa',
    subgroup: 'Admin.',
    linkWith: 'subgroup',
    name: 'Último año en activo de la dependencia',
    multiple: true,
    type: 'year',
    startsAt: 2018
  },
]
