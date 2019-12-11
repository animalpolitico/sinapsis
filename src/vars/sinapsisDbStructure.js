export const sinapsisDbObject = [
  {
    name: 'Empresa',
    ismain: true,
    groups: [
      {
        name: 'General',
        inputs: [
          {
            name: 'Razón social',
            hint: 'Nombre de la empresa',
            type: 'text',
            required: true,
            matchWith: ['empresa'],
          },
          {
            name: 'RFC',
            type: 'text',
            validate: ['rfc'],
            matchWith: ['rfc'],
          },
          {
            name: 'Folio mercantil',
            type: 'text',
            validate: ['folio_mercantil'],
            unique: true,
          },
          {
            name: 'Objeto social',
            type: 'text',
            multiline: true,
          },
          {
            name: 'Fecha de creación',
            type: 'date',
            matchWith: ['date'],
          },
          {
            name: 'Capital social mínimo',
            type: 'currency',
          },
          {
            name: 'Dirección fiscal',
            type: 'address',
            matchWith: ['address'],
            geocode: true,
          },
          {
            name: 'Teléfono',
            type: 'phone',
            matchWith: ['phone'],
          },
          {
            name: 'Sitio web',
            type: 'text',
            validate: ['website'],
            matchWith: ['website'],
          },
          {
            name: 'Correo electrónico',
            type: 'email',
            matchWith: ['email'],
          },
        ],
      },
      {
        name: 'Personas',
        groups: [
          {
            name: 'Representante legal',
            inputGroup: {
              inputs: [
                {
                  name: 'Nombre completo',
                  type: 'text',
                  mask: ['person'],
                  matchWith: ['person'],
                },
                {
                  name: 'RFC',
                  type: 'text',
                  validate: ['rfc'],
                  matchWith: ['rfc'],
                },
                {
                  name: 'Dirección',
                  type: 'address',
                  matchWith: ['address'],
                  geocode: true,
                },
                {
                  name: '¿Fue funcionario?',
                  type: 'radio',
                  defaultValue: 'no',
                  inputs: [
                    {
                      name: 'Sí',
                      value: 'si',
                      onselect: 'showchilds',
                      childs: [
                        {
                          name: 'Nombre de la dependencia',
                          type: 'text',
                          matchWith: ['dependencia'],
                        },
                        {
                          name: 'Último año activo',
                          type: 'year',
                        },
                      ],
                    },
                    {
                      name: 'No',
                      value: 'no',
                    },
                  ],
                },
              ],
            },
          },
          {
            name: 'Accionistas',
            inputGroup: {
              multiple: true,
              inputs: [
                {
                  name: 'Nombre completo',
                  type: 'text',
                  mask: ['person'],
                  matchWith: ['person'],
                },
                {
                  name: 'RFC',
                  type: 'text',
                  validate: ['rfc'],
                  matchWith: ['rfc'],
                },
                {
                  name: 'Dirección',
                  type: 'address',
                  matchWith: ['address'],
                  geocode: true,
                },
                {
                  name: '¿Fue funcionario?',
                  type: 'radio',
                  defaultValue: 'no',
                  inputs: [
                    {
                      name: 'Sí',
                      value: 'si',
                      onselect: 'showchilds',
                      childs: [
                        {
                          name: 'Nombre de la dependencia',
                          type: 'text',
                          matchWith: ['dependencia'],
                        },
                        {
                          name: 'Último año activo',
                          type: 'year',
                        },
                      ],
                    },
                    {
                      name: 'No',
                      value: 'no',
                    },
                  ],
                },
                {
                  name: 'Capital aportado',
                  type: 'currency',
                },
              ],
            },
          },
          {
            name: 'Administrador',
            inputGroup: {
              inputs: [
                {
                  name: 'Nombre completo',
                  type: 'text',
                  mask: ['person'],
                  matchWith: ['person'],
                },
                {
                  name: 'RFC',
                  type: 'text',
                  validate: ['rfc'],
                  matchWith: ['rfc'],
                },
                {
                  name: 'Dirección',
                  type: 'address',
                  matchWith: ['address'],
                  geocode: true,
                },
                {
                  name: '¿Fue funcionario?',
                  type: 'radio',
                  defaultValue: 'no',
                  inputs: [
                    {
                      name: 'Sí',
                      value: 'si',
                      onselect: 'showchilds',
                      childs: [
                        {
                          name: 'Nombre de la dependencia',
                          type: 'text',
                          matchWith: ['dependencia'],
                        },
                        {
                          name: 'Último año activo',
                          type: 'year',
                        },
                      ],
                    },
                    {
                      name: 'No',
                      value: 'no',
                    },
                  ],
                },
              ],
            },
          },
          {
            name: 'Comisario',
            inputGroup: {
              inputs: [
                {
                  name: 'Nombre completo',
                  type: 'text',
                  mask: ['person'],
                  matchWith: ['person'],
                },
                {
                  name: 'RFC',
                  type: 'text',
                  validate: ['rfc'],
                  matchWith: ['rfc'],
                },
                {
                  name: 'Dirección',
                  type: 'address',
                  matchWith: ['address'],
                  geocode: true,
                },
                {
                  name: '¿Fue funcionario?',
                  type: 'radio',
                  defaultValue: 'no',
                  inputs: [
                    {
                      name: 'Sí',
                      value: 'si',
                      onselect: 'showchilds',
                      childs: [
                        {
                          name: 'Nombre de la dependencia',
                          type: 'text',
                          matchWith: ['dependencia'],
                        },
                        {
                          name: 'Último año activo',
                          type: 'year',
                        },
                      ],
                    },
                    {
                      name: 'No',
                      value: 'no',
                    },
                  ],
                },
              ],
            },
          },
          {
            name: 'Consejero',
            inputGroup: {
              inputs: [
                {
                  name: 'Nombre completo',
                  type: 'text',
                  mask: ['person'],
                  matchWith: ['person'],
                },
                {
                  name: 'RFC',
                  type: 'text',
                  validate: ['rfc'],
                  matchWith: ['rfc'],
                },
                {
                  name: 'Dirección',
                  type: 'address',
                  matchWith: ['address'],
                  geocode: true,
                },
                {
                  name: '¿Fue funcionario?',
                  type: 'radio',
                  defaultValue: 'no',
                  inputs: [
                    {
                      name: 'Sí',
                      value: 'si',
                      onselect: 'showchilds',
                      childs: [
                        {
                          name: 'Nombre de la dependencia',
                          type: 'text',
                          matchWith: ['dependencia'],
                        },
                        {
                          name: 'Último año activo',
                          type: 'year',
                        },
                      ],
                    },
                    {
                      name: 'No',
                      value: 'no',
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        name: 'Notaría',
        inputs: [
          {
            name: 'Nombre del notario',
            type: 'text',
            mask: ['person'],
            matchWith: ['person'],
          },
          {
            name: 'Número de la notaría',
            type: 'text',
            matchWith: ['notaria_number'],
          },
          {
            name: 'Dirección',
            type: 'address',
            matchWith: ['address'],
            geocode: true,
          },
        ],
      },
      {
        name: 'Info. oficial',
        inputGroup: {
          inputs: [
            {
              name: '¿Está inscrito RUPC?',
              type: 'checkbox',
              value: 'si',
            },
            {
              name: '¿Está registrado en CompraNet?',
              type: 'checkbox',
              value: 'si',
            },
            {
              name: '¿Es SAT presunta?',
              type: 'checkbox',
              value: 'si',
            },
            {
              name: '¿Es SAT definitiva?',
              type: 'checkbox',
              value: 'si',
            },
            {
              name: 'No está localizado por la ASF',
              type: 'checkbox',
              value: 'si',
            },
            {
              name: 'No tiene antecedentes registrales',
              type: 'checkbox',
              value: 'si',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Contrato',
    multiple: true,
    inputs: [
      {
        name: '¿Quién otorga los recursos?',
        type: 'text',
        matchWith: ['empresa', 'person'],
      },
      {
        name: 'Número de contrato',
        type: 'text',
      },
      {
        name: 'Fecha de inicio',
        type: 'date',
      },
      {
        name: 'Fecha de término',
        type: 'date',
      },
      {
        name: 'Servicio realizado',
        type: 'text',
        multiline: true,
      },
      {
        name: 'Persona que firma',
        type: 'text',
        mask: ['person'],
        matchWith: ['person'],
      },
      {
        name: 'Cargo de quien firma',
        type: 'text',
      },
      {
        name: 'Monto del contrato',
        type: 'currency',
        sumWith: ['montos_contrato', 'montos_totales'],
      },
      {
        name: '¿Fue parte de una licitacion?',
        type: 'radio',
        defaultValue: 'no',
        inputs: [
          {
            name: 'Sí',
            value: 'si',
            onselect: 'showchilds',
            childs: [
              {
                name: 'Fecha de fallo',
                type: 'date',
              },
              {
                name: 'Monto total',
                type: 'currency',
                sumWith: ['montos_licitacion'],
              },
            ],
          },
          {
            name: 'No',
            value: 'no',
          },
        ],
      },
      {
        name: '¿Se subcontrataron empresas?',
        type: 'radio',
        defaultValue: 'no',
        inputs: [
          {
            name: 'Sí',
            value: 'si',
            onselect: 'addEmpresaFromSubcontratos',
          },
          {
            name: 'No',
            value: 'no',
          },
        ],
      },
      {
        name: 'Funcionario de instancia',
        hint: 'Titular',
        type: 'text',
        mask: ['person'],
        matchWith: ['person'],
      },
    ],
  },
  {
    name: 'Convenio',
    multiple: true,
    inputs: [
      {
        name: '¿Quién otorga los recursos?',
        type: 'text',
        matchWith: ['dependencia', 'instancia'],
      },
      {
        name: '¿Quién recibe los recursos?',
        type: 'text',
        matchWith: ['instancia'],
      },
      {
        name: 'Número de convenio',
        type: 'text',
      },
      {
        name: 'Fecha de inicio',
        type: 'date',
      },
      {
        name: 'Fecha de término',
        type: 'date',
      },
      {
        name: 'Objeto del convenio',
        type: 'text',
        multiline: true,
      },
      {
        name: 'Nombre de quien firma',
        hint: 'Recibe recursos',
        type: 'text',
        mask: ['person'],
        matchWith: ['person'],
      },
      {
        name: 'Cargo de quien firma',
        hint: 'Recibe recursos',
        type: 'text',
      },
      {
        name: 'Nombre de quien firma',
        hint: 'Otorga recursos',
        type: 'text',
        mask: ['person'],
        matchWith: ['person'],
      },
      {
        name: 'Cargo de quien firma',
        hint: 'Recibe recursos',
        type: 'text',
      },
      {
        name: 'Monto del convenio',
        type: 'currency',
        sumWith: ['montos_convenio', 'montos_totales'],
      },
      {
        name: 'Funcionario de instancia',
        hint: 'Titular',
        type: 'text',
        mask: ['person'],
        matchWith: ['person'],
      },
    ],
  },
  {
    name: 'Transferencia',
    multiple: true,
    inputs: [
      {
        name: '¿Quién otorga los recursos?',
        type: 'text',
        matchWith: ['dependencia', 'instancia', 'empresa', 'person'],
      },
      {
        name: 'Nombre de a quién se realiza la transferencia',
        type: 'text',
        matchWith: ['empresa', 'person'],
      },
      {
        name: 'Monto de transferencia',
        type: 'currency',
        sumWith: ['montos_transferencia', 'montos_totales'],
      },
    ],
  },
];
