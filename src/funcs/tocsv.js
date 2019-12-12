const slugify = require('slugify');

export default class ConvertDbToCsv {
  constructor(db) {
    this.name = db.name;
    this.output = [];
    this.empresas = db.empresas ? Object.values(db.empresas) : [];
    this.createRows();
  }

  createRows() {
    const self = this;
    this.empresas.map((empresa) => {
      const r = self.createRow(empresa);
      self.output.push(r);
    });

    self.prepareCSV();
  }

  prepareCSV() {
    const c = [
      '%V1%EMPRESA: \nRazón social (nombre de la empresa)',
      'EMPRESA: \nRFC',
      'EMPRESA: \nFolio mercantil',
      'EMPRESA: \nObjeto social (descripción de actividades)',
      'EMPRESA: \nNúmero de empleados',
      'EMPRESA: \nFecha de creación (dd/mm/aaaa)',
      'EMPRESA: \nCapital social mínimo (con cuánto dinero se registró la empresa)',
      'EMPRESA: \nDirección fiscal',
      'EMPRESA: \nLatitud y longitud (separadas por coma)',
      'EMPRESA: \nEntidad Federativa (llena esta columna sólo si no tienes la dirección y/o la coordenada geográfica)',
      'EMPRESA: \nTeléfono',
      'EMPRESA: \nWeb',
      'EMPRESA: \nCorreo electrónico',
      'REP LEGAL: \nNombre completo',
      'REP LEGAL: \nRFC',
      'REP LEGAL: \nDirección',
      'REP LEGAL: \nLatitud y longitud (separadas por coma)',
      'REP LEGAL: \nEntidad Federativa (llena esta columna sólo si no tienes la dirección y/o la coordenada geográfica)',
      'REP LEGAL: \nNombre de la dependencia donde fue funcionario (si es que aplica)',
      'REP LEGAL: \nÚltimo año en activo de la dependencia donde fue funcionario (si es que aplica)',
      'ACCIONISTAS: \nNombre completo (separar nombres con punto y coma)',
      'ACCIONISTAS:\nRFC',
      'ACCIONISTAS: \nDirección',
      'ACCIONISTAS: \nLatitud y longitud (separadas por coma)',
      'ACCIONISTAS: \nEntidad Federativa (llena esta columna sólo si no tienes la dirección y/o la coordenada geográfica)',
      'ACCIONISTAS: \nNombre de la dependencia donde fue funcionario (si es que aplica)',
      'ACCIONISTAS: \nÚltimo año en activo de la dependencia donde fue funcionario (si es que aplica)',
      'ACCIONISTAS: \nCapital aportado',
      'ADMIN: \nNombre completo',
      'ADMIN: \nRFC',
      'ADMIN: \nDirección',
      'ADMIN: \nLatitud y longitud (separadas por coma)',
      'ADMIN: \nEntidad Federativa (llena esta columna sólo si no tienes la dirección y/o la coordenada geográfica)',
      'ADMIN: \nNombre de la dependencia donde fue funcionario (si es que aplica)',
      'ADMIN: \nÚltimo año en activo de la dependencia donde fue funcionario (si es que aplica)',
      'COMIS / CONSE: \nNombre completo',
      'COMIS / CONSE: \nRFC',
      'COMIS / CONSE: \nDirección',
      'COMIS / CONSE: \nLatitud y longitud (separadas por coma)',
      'COMIS / CONSE: \nEntidad Federativa (llena esta columna sólo si no tienes la dirección y/o la coordenada geográfica)',
      'COMIS / CONSE: \nNombre de la dependencia donde fue funcionario (si es que aplica)',
      'COMIS / CONSE: \nÚltimo año en activo de la dependencia donde fue funcionario (si es que aplica)',
      'NOTARIA: \nNombre del notario que firma el acta',
      'NOTARIA: \nNúmero de la notaría',
      'NOTARIA: \nDirección de la notaría',
      'NOTARIA: \nLatitud y longitud (separadas por coma)',
      'NOTARIA: \nEntidad Federativa (llena esta columna sólo si no tienes la dirección y/o la coordenada geográfica)',
      'INFO OFICIAL: \nEstatus CompraNet (InscritoRUPC, NoInscritoRUPC, RegCompraNet)',
      'INFO OFICIAL: \nEmpresa fantasma o no localizada (SATdefinitiva, SATpresunta, SATdesvirtuada, SATfavorable, ASFnoLocalizada, SinAntReg)',
      'CONTRATO: \nEmpresa, dependencia o instancia que otorga los recursos',
      'CONTRATO: \nNúmero de contrato',
      'CONTRATO: \nFecha de inicio de contrato',
      'CONTRATO: \nFecha de término de contrato',
      'CONTRATO: \nServicio/obra realizada',
      'CONTRATO: \nNombre de la persona que firma',
      'CONTRATO: \nCargo de la persona que firma',
      'CONTRATO: \nMontos de contratos individuales',
      'CONTRATO: \nNúmero de licitación ',
      'CONTRATO: \nFecha de fallo de la licitación',
      'CONTRATO: \nMonto total de la licitación',
      'CONVENIO: \nDependencia o instancia que OTORGA los recursos',
      'CONVENIO: \nDependencia o instancia que RECIBE los recursos',
      'CONVENIO: \nNúmero de convenio',
      'CONVENIO: \nFecha de inicio de convenio',
      'CONVENIO: \nFecha de término convenio',
      'CONVENIO: \nObjeto del convenio',
      'CONVENIO: \nNombre de la persona que firma (de la dependencia o instancia que OTORGA los recursos)',
      'CONVENIO: \nCargo de la persona que firma (de la dependencia o instancia que OTORGA los recursos)',
      'CONVENIO: \nNombre de la persona que firma (de la dependencia o instancia que RECIBE los recursos)',
      'CONVENIO: \nCargo de la persona que firma (de la dependencia o instancia que RECIBE los recursos)',
      'CONVENIO: \nMonto total del convenio',
      'CONVENIO: \nNombre del titular de la dependencia o instancia que otorga los recurso',
      'CONVENIO: \nNombre del titular de la dependencia o instancia que recibe los recurso',
      'TRANSFERENCIA DEPENDENCIA O INSTANCIA: \nDependencia o instancia que otorga los recursos',
      'TRANSFERENCIA DEPENDENCIA O INSTANCIA: \nMonto de transferencias individuales',
      'TRANSFERENCIA DEPENDENCIA O INSTANCIA: \nNúmero de convenio relacionado a esta transferencia',
      'TRANSFERENCIAS A ESTA EMPRESA: \nEmpresa que otorga los recursos',
      'TRANSFERENCIAS A ESTA EMPRESA: \nMonto de transferencias individuales',
      'TRANSFERENCIAS DE ESTA EMPRESA: \nEmpresa a la que le transfirió esta empresa',
      'TRANSFERENCIAS DE ESTA EMPRESA: \nMonto de transferencias individuales',
      'OTRO: \nOtras empresas relacionadas a esta empresa (separar con punto y coma)',
      'OTRO: \nOtras personas relacionadas a esta empresa (separar con punto y coma)',
      'OTRO: \nOtros domicilios relacionados a esta empresa (separar con punto y coma)',
      'OTRO: \nOtros RFC relacionados a esta empresa (separar con punto y coma)',
      'OTRO: \nOtras fechas relacionadas a esta empresa (separar con punto y coma)',
      'OTRO: \nOtros correos electrónicos relacionados a esta empresa (separar con punto y coma)',
      'OTRO: \nOtros sitios web relacionados a esta empresa (separar con punto y coma)',
      'OTRO: \nOtros teléfonos relacionados a esta empresa (separar con punto y coma)',
      'OTRO: \nOtros números de contratos o convenios relacionados a esta empresa (separar con punto y coma)',
      'OTRO: \nOtras dependencias o instancias relacionadas a esta empresa (separar con punto y coma',
      'OTRO: \nMontos recibidos',
      'OTRO: \nTitulares de instancias de montos recibidos',
      'OTRO: \nMontos otorgados',
      'NUEVO: \nNombre de la categoría (separar con punto y coma)',
      'NUEVO: \nContenido (separar con punto y coma)',
      'OTRO: \nComentarios adicionales (formato de escritura: libre)',
    ];
    this.output = [c, ...this.output];
  }

  getData() {
    return {
      name: this.name,
      slug: slugify(this.name, { lower: true }),
      d: this.output,
    };
  }

  createRow(empresa) {
    const o = [];
    const fields = empresa.fields ? Object.values(empresa.fields) : [];
    // console.log('fields', fields);

    o[0] = empresa.name;
    o[1] = this.searchFieldValue('RFC', fields);
    o[2] = this.searchFieldValue('Folio mercantil', fields);
    o[3] = this.searchFieldValue('Objeto social', fields);
    o[4] = this.searchFieldValue('Número de empleados', fields);
    o[5] = this.searchFieldValue('Fecha de creación', fields);
    o[6] = this.searchFieldValue('Capital social mínimo', fields);
    o[7] = this.searchFieldValue('Dirección fiscal', fields);
    o[10] = this.searchFieldValue('Teléfono', fields);
    o[11] = this.searchFieldValue('Sitio web', fields);
    o[12] = this.searchFieldValue('Correo electrónico', fields);

    /* Representantes */
    const representantes = this.getByGroup('representante', fields);
    console.log('representantes', representantes);
    o[13] = representantes['Nombre completo'] ? representantes['Nombre completo'] : '';
    o[14] = representantes.RFC ? representantes.RFC : '';
    o[15] = representantes['Dirección'] ? representantes['Dirección'] : '';

    /* Accionistas */
    var pe = this.getByGroup('accionista', fields);
    o[20] = pe['Nombre completo'] ? pe['Nombre completo'] : '';
    o[21] = pe.RFC ? pe.RFC : '';
    o[22] = pe['Dirección'] ? pe['Dirección'] : '';
    o[27] = pe['Capital aportado'] ? pe['Capital aportado'] : '';

    /* Admin */
    var pe = this.getByGroup('administrador', fields);
    o[28] = pe['Nombre completo'] ? pe['Nombre completo'] : '';
    o[29] = pe.RFC ? pe.RFC : '';
    o[30] = pe['Dirección'] ? pe['Dirección'] : '';

    /* Comisario */
    var pe = this.getByGroup('consejero', fields);
    o[35] = pe['Nombre completo'] ? pe['Nombre completo'] : '';
    o[36] = pe.RFC ? pe.RFC : '';
    o[37] = pe['Dirección'] ? pe['Dirección'] : '';

    /* Notaría */
    o[42] = this.searchFieldValue('Nombre del notario', fields);
    o[43] = this.searchFieldValue('Número de notaría', fields);
    o[44] = this.searchFieldValue('Dirección de notaría', fields);

    /* Banderas rojas */
    let bs = this.searchFieldValueBySlug('banderas-rojas', fields);
    if (bs.length) {
      bs = bs[0].bs;
      const bs_a = ['InscritoRUPC', 'NoInscritoRUPC', 'RegCompraNet'];
      const s = {
        47: [],
        48: [],
      };
      bs.map((b) => {
        if (bs_a.indexOf(b) > -1) {
          s[47].push(b);
        } else {
          s[48].push(b);
        }
      });
      for (var key in s) {
        s[key] = s[key].join(';');
        o[key] = s[key];
      }
    }

    /* Contrato */
    var t = {
      49: {
        name: '¿Quién otorga los recursos?',
      },
      50: {
        name: 'Número de contrato',
      },
      51: {
        name: 'Fecha de inicio',
      },
      52: {
        name: 'Fecha de término',
      },
      53: {
        name: 'Servicio realizado',
      },
      54: {
        name: 'Persona que firma',
      },
      55: {
        name: 'Cargo de quien firma',
      },
      56: {
        name: 'Monto del contrato',
      },
      57: {
        name: 'Número de licitación',
      },
      58: {
        name: 'Fecha de fallo',
      },
      59: {
        name: 'Monto total de licitación',
      },
    };
    var ts = this.getByGroup('contrato', fields);
    for (var key in t) {
      var nm = t[key].name;
      o[key] = ts[nm] ? ts[nm] : '';
    }

    /* Convenio */
    var t = {
      60: {
        name: '¿Quién otorga los recursos?',
        group: 'convenio',
        bigGroup: 'convenio',
        category: 'emisor',
        matchWith: ['instancia'],
      },
      61: {
        name: '¿Quién recibe los recursos?',
        group: 'convenio',
        bigGroup: 'convenio',
        category: 'receptor',
        matchWith: ['instancia'],
      },
      62: {
        name: 'Número de convenio',
        group: 'convenio',
        bigGroup: 'convenio',
        matchWith: ['convenio'],
      },
      63: {
        name: 'Fecha de inicio',
        group: 'convenio',
        bigGroup: 'convenio',
        matchWith: ['date'],
        type: 'date',
      },
      64: {
        name: 'Fecha de término',
        group: 'convenio',
        bigGroup: 'convenio',
        matchWith: ['date'],
        type: 'date',
      },
      65: {
        name: 'Objeto del convenio',
        group: 'convenio',
        bigGroup: 'convenio',
      },
      66: {
        name: 'Persona que firma (otorga)',
        group: 'convenio',
        bigGroup: 'convenio',
        matchWith: ['person'],
      },
      67: {
        name: 'Cargo de quien firma (otorga)',
        group: 'convenio',
        bigGroup: 'convenio',
      },
      68: {
        name: 'Persona que firma (recibe)',
        group: 'convenio',
        bigGroup: 'convenio',
        matchWith: ['person'],
      },
      69: {
        name: 'Cargo de quien firma (recibe)',
        group: 'convenio',
        bigGroup: 'convenio',
      },
      70: {
        name: 'Monto del convenio',
        type: 'currency',
        category: 'monto',
        group: 'convenio',
        bigGroup: 'convenio',
        sumWith: ['montos_convenio'],
      },
      71: {
        name: 'Titular de instancia que otorga al momento de firmar el convenio',
        group: 'convenio',
        bigGroup: 'convenio',
        matchWith: ['person', 'titular'],
      },
      72: {
        name: 'Titular de instancia que recibe al momento de firmar el convenio',
        group: 'convenio',
        bigGroup: 'convenio',
        matchWith: ['person', 'titular'],
      },
    };
    var ts = this.getByGroup('convenio', fields);
    for (var key in t) {
      var nm = t[key].name;
      o[key] = ts[nm] ? ts[nm] : '';
    }

    /* Transferencias (REVISAR SI VOLTEAR EMISOR POR RECEPTOR) */
    var ts = this.getTransferenciaGroup('receptor', fields);
    o[76] = ts.recursos ? ts.recursos : '';
    o[77] = ts['Monto de la transferencia'] ? ts['Monto de la transferencia'] : '';

    var ts = this.getTransferenciaGroup('emisor', fields);
    o[78] = ts.recursos ? ts.recursos : '';
    o[79] = ts['Monto de la transferencia'] ? ts['Monto de la transferencia'] : '';

    /* Otros */
    var ts = this.getByGroup('otros', fields, 'category');
    const ks = {
      80: {
        name: 'Nombre de la empresa',
        category: 'empresa',
      },
      81: {
        name: 'Nombre de persona',
        category: 'person',
      },
      82: {
        name: 'Dirección',
        category: 'address',
      },
      83: {
        name: 'RFC',
        category: 'rfc',
      },
      84: {
        name: 'Fecha',
        category: 'date',
      },
      85: {
        name: 'Correo electrónico',
        category: 'email',
      },
      86: {
        name: 'Sitio web',
        category: 'website',
      },
      87: {
        name: 'Teléfono',
        category: 'phone',
      },
      88: {
        name: 'Número de contrato o convenio',
        category: 'convenio',
      },
      89: {
        name: 'Dependencia / Instancia',
        category: 'instancia',
      },
      90: {
        name: 'Monto recibido',
        category: 'monto_recibido',
      },
      91: {
        name: 'Titulares de instancia',
        category: 'titular',
      },
      92: {
        name: 'Monto otorgado',
        category: 'monto_otorgado',
      },
    };
    const invs = ['*'];
    for (var k in ks) {
      invs.push(ks[k].category);
      o[k] = ts[ks[k].category];
    }

    /* Nueva categoría */
    const nk = [];
    const nv = [];
    for (var k in ts) {
      if (invs.indexOf(k) == -1) {
        nk.push(k);
        nv.push(ts[k]);
      }
    }

    o[93] = nk.join(',');
    o[94] = nv.join(',');

    /* Comentarios */
    o[95] = this.searchFieldValue('Comentarios', fields);

    return this.filterRow(o);
  }

  filterRow(o) {
    const range = [0, 95];
    for (let i = range[0]; i <= range[1]; i++) {
      if (!o[i]) {
        o[i] = '';
      }
    }
    return o;
  }

  searchFieldValue(field, fields) {
    const r = fields.filter((f) => f.name == field);
    return r.length ? r[0].value : '';
  }

  searchFieldValueBySlug(field, fields) {
    const r = fields.filter((f) => f.slug == field);
    return r.length ? r : [];
  }

  getTransferenciaGroup(group, fields) {
    const o = {};
    var keys = [];
    const r = fields.filter((f) => f.group == 'transferencia');

    let groups = {};

    r.map((_f) => {
      if (!groups[_f.guid]) {
        groups[_f.guid] = [];
      }
      groups[_f.guid].push(_f);
    });

    groups = Object.values(groups);

    const filtered = [];

    groups.map((g) => {
      g.map((s) => {
        if (s.name == 'Tipo de transferencia' && s.value == group) {
          filtered.push(g);
        }
      });
    });

    var keys = [];

    filtered.map((_f) => {
      _f.map((field) => {
        if (keys.indexOf(field.name) == -1) {
          keys.push(field.name);
        }
      });
    });

    const p = {};

    keys.map((key) => {
      p[key] = [];
      filtered.map((_f) => {
        _f.map((field) => {
          if (field.name == key) {
            p[key].push(field.value);
          }
        });
      });
    });

    for (const k in p) {
      p[k] = p[k].join(';');
    }
    return p;
  }

  getByGroup(group, fields, vk) {
    if (!vk) {
      vk = 'name';
    }
    let o = {};
    const keys = [];
    const r = fields.filter((f) => f.group == group);
    r.map((_f) => {
      if (!o[_f.guid]) {
        o[_f.guid] = [];
      }
      const n = _f[vk];
      if (keys.indexOf(n) == -1) {
        keys.push(n);
      }
      const _o = {};
      _o[n] = _f.value;
      o[_f.guid].push(_o);
    });
    const p = {};


    o = Object.values(o);

    keys.map((key) => {
      p[key] = [];
      o.map((v) => {
        var comentarios = '';
        var cf = v.filter(f => f['Comentarios'] ? true : false);
        if(cf && cf.length){
          comentarios = cf[0]['Comentarios'];
        }
        v.map((_v) => {
          if (_v[key]) {
            if(key.indexOf('Nombre') > -1 && comentarios){
              _v[key] = _v[key] + ' //'+comentarios;
            }

            p[key].push(_v[key]);
          }
        });
      });
    });

    for (const key in p) {
      p[key] = p[key].join(';');
    }

    o[95] = this.searchFieldValue('RFC', fields);


    return p;
  }
}
