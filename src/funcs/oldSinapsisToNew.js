import moment from 'moment';
import 'moment/locale/es';
import * as d3 from 'd3';
import { saveAs } from 'file-saver';
import formatMoney from './formatMoney';
import { snps_ka } from '../vars/compatibilityArray';

moment.locale('es');
const ntol = require('number-to-letter');
const slugify = require('slugify');

const csvjson = require('csvtojson');
const uuidv4 = require('uuid/v4');


export default class ConvertOldToDb {
  constructor(name, file, alreadyConverted) {
    this.name = name;
    this.file = file;
    this.alreadyConverted = !!alreadyConverted;
    this.uid = uuidv4();
    this.empresas = [];
    this.slug = slugify(this.name, { lower: true });
    this.get();
  }

  async get() {
    if (!this.alreadyConverted) {
      var c = d3.csvParse(this.file);
    } else {
      var c = this.file;
    }
    const a = Object.values(c);
    a.pop();
    this.array = a;
    this.set();
  }

  set() {
    this.setInitialObject();
    this.cleanEmpresas();
    this.setEmpresas();
    // this.save();
  }

  setEmpresas() {
    const self = this;
    this.empresas.map((empresa) => {
      self.setEmpresa(empresa);
    });
    this.filterFields();
  }

  filterFields() {
    const es = this.obj.empresas;
    const empresasSlug = [];
    for (var key in es) {
      var empresa = es[key];
      const { slug } = empresa;
      empresasSlug.push(slug);
    }
    /* Campos */
    for (var key in es) {
      var empresa = es[key];
      const fields = Object.values(empresa.fields);

      /* Contratos solo */
      const contratoFields = fields.filter((f) => f.group == 'contrato');
      /* Si existe la empresa deja el match with como empresa, si no como dependencia */
      contratoFields.map((f) => {
        if (f.slug == 'contrato-quien-otorga-los-recursos') {
          const entidad = f.value;
          let _slug = entidad.replace(/[.\s]/g, '');
          _slug = slugify(_slug, { remove: /[*,+~.()'"!:@]/g, lower: true });
          if (empresasSlug.indexOf(_slug) > -1) {
            var m = false;
          } else {
            var m = ['instancia'];
          }

          f.type = m ? m[0] : null;
          f.matchWith = m;
        }
      });

      /* Solo nombres de empresas con transferencias receptor */
      const transferenciaFields = fields.filter((f) => f.group == 'transferencia' && f.name == 'recursos');


      transferenciaFields.map((f) => {
        f.matchWith = null;
        f.type = null;
      });
    }
  }

  setEmpresa(fields) {
    const n = fields[0];
    let s = n.replace(/[.\s]/g, '');
    s = slugify(s, { remove: /[*+,~.()'"!:@]/g, lower: true });

    let exists = false;
    if (this.empresas[s]) {
      exists = true;
      uid = this.empresas[s];
    } else {
      var uid = uuidv4();
      const obj = {
        name: n,
        slug: s,
        uid,
        fields: {},
      };
      this.obj.empresas[uid] = obj;
      this.empresas[s] = uid;
    }
    this.setEmpresaFields(fields, uid);
  }

  setEmpresaFields(fields, uid) {
    const dbid = this.uid;
    const e = this.obj.empresas[uid];
    const f = e.fields;

    fields.map((value, i) => {
      value = value.trim();
      if (snps_ka[i] && ((i < 13 || (i > 41 && i < 45)) || i == 95)) {
        if (!snps_ka[i].bypass) {
          let slug = slugify(snps_ka[i].name, { lower: true });
          if (snps_ka[i].group) {
            try {
              slug = `${slugify(snps_ka[i].group, { lower: true })}-${slug}`;
            } catch (ex) {
              console.log('ERROR CON', snps_ka[i].group);
            }
          }
          const ff = {
            name: snps_ka[i].name,
            slug,
            isvalid: true,
            value,
            fromdb: dbid,
            empresauid: uid,
          };
          if (snps_ka[i].type) {
            ff.type = snps_ka[i].type;
          }
          if (snps_ka[i].group) {
            ff.group = snps_ka[i].group;
          }
          if (snps_ka[i].matchWith) {
            ff.matchWith = snps_ka[i].matchWith;
          }
          if (value && value !== 'SIN_DATO') {
            f[slug] = ff;
          }
        }
      }
    });

    /** Representante legal * */
    var range = [13, 19];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      if (ind < 1) {
        const cuid = uuidv4();
        let x = 0;

        for (const key in arr) {
          var value = arr[key];
          var inf = snps_ka[key];

          if(key == 13 && value.indexOf('//') > -1){
            /* Tiene comentarios */
            const comentarios = value.split('//')[1].replace('//', '');
            const preslug = slugify(`${inf.bigGroup}-Comentarios`, { lower: true });
            var slug = slugify(`${cuid}-${preslug}`, { lower: true });
            var ff = {
              name: 'Comentarios',
              slug: preslug,
              isvalid: true,
              value: comentarios,
              group: inf.bigGroup,
              groupUid: cuid,
              empresauid: uid,
              guid: cuid,
            };
            f[slug] = ff;
            x++;
            value = value.split('//')[0];
          }

          const preslug = slugify(`${inf.bigGroup}-${inf.name}`, { lower: true });
          var slug = slugify(`${cuid}-${preslug}`, { lower: true });
          var ff = {
            name: inf.name,
            slug: preslug,
            isvalid: true,
            value,
            group: inf.bigGroup,
            groupUid: cuid,
            empresauid: uid,
            guid: cuid,
          };
          if (inf.type) {
            ff.type = inf.type;
          }
          if (inf.category) {
            ff.category = inf.category;
          }
          if (inf.matchWith) {
            ff.matchWith = inf.matchWith;
          }
          if (value && !inf.bypass) {
            f[slug] = ff;
            x++;
          }
        }
        if (x > 0) {
          var slug = slugify(`${cuid}-tipo-persona`, { lower: true });
          var ff = {
            name: 'Tipo de persona',
            slug,
            isvalid: true,
            value: inf.bigGroup,
            group: inf.bigGroup,
            bigGroup: 'persona',
            groupUid: cuid,
            guid: cuid,
          };
          f[slug] = ff;
        }
      }
    });

    /** Accionistas * */
    var range = [20, 27];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      const cuid = uuidv4();
      let x = 0;
      for (const key in arr) {
        let value = arr[key];
        value = value.trim();
        var inf = snps_ka[key];

        if(key == 20 && value.indexOf('//') > -1){
          /* Tiene comentarios */
          const comentarios = value.split('//')[1].replace('//', '');
          const preslug = slugify(`${inf.bigGroup}-Comentarios`, { lower: true });
          var slug = slugify(`${cuid}-${preslug}`, { lower: true });
          var ff = {
            name: 'Comentarios',
            slug: preslug,
            isvalid: true,
            value: comentarios,
            group: inf.bigGroup,
            groupUid: cuid,
            empresauid: uid,
            guid: cuid,
          };
          f[slug] = ff;
          x++;
          value = value.split('//')[0];
        }

        const preslug = slugify(`${inf.bigGroup}-${inf.name}`, { lower: true });
        var slug = slugify(`${cuid}-${preslug}`, { lower: true });
        var ff = {
          name: inf.name,
          slug: preslug,
          isvalid: true,
          value,
          group: inf.bigGroup,
          groupUid: cuid,
          empresauid: uid,
          guid: cuid,
        };
        if (inf.type) {
          ff.type = inf.type;
        }
        if (inf.category) {
          ff.category = inf.category;
        }
        if (inf.matchWith) {
          ff.matchWith = inf.matchWith;
        }
        if (inf.sumWith) {
          ff.sumWith = inf.sumhWith;
        }
        if (value && !inf.bypass && value !== 'SIN_DATO') {
          f[slug] = ff;
          x++;
        }
      }
      if (x > 0) {
        var slug = slugify(`${cuid}-tipo-persona`, { lower: true });
        var ff = {
          name: 'Tipo de persona',
          slug,
          isvalid: true,
          value: inf.bigGroup,
          group: inf.bigGroup,
          bigGroup: 'persona',
          groupUid: cuid,
          guid: cuid,
        };
        f[slug] = ff;
      }
    });
    /** Admin * */
    var range = [28, 34];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      const cuid = uuidv4();
      let x = 0;
      for (const key in arr) {
        let value = arr[key];
        value = value.trim();
        var inf = snps_ka[key];

        if(key == 28 && value.indexOf('//') > -1){
          /* Tiene comentarios */
          const comentarios = value.split('//')[1].replace('//', '');
          const preslug = slugify(`${inf.bigGroup}-Comentarios`, { lower: true });
          var slug = slugify(`${cuid}-${preslug}`, { lower: true });
          var ff = {
            name: 'Comentarios',
            slug: preslug,
            isvalid: true,
            value: comentarios,
            group: inf.bigGroup,
            groupUid: cuid,
            empresauid: uid,
            guid: cuid,
          };
          f[slug] = ff;
          x++;
          value = value.split('//')[0];
        }

        const preslug = slugify(`${inf.bigGroup}-${inf.name}`, { lower: true });
        var slug = slugify(`${cuid}-${preslug}`, { lower: true });
        var ff = {
          name: inf.name,
          slug: preslug,
          isvalid: true,
          value,
          group: inf.bigGroup,
          groupUid: cuid,
          empresauid: uid,
          guid: cuid,
        };
        if (inf.type) {
          ff.type = inf.type;
        }
        if (inf.category) {
          ff.category = inf.category;
        }
        if (inf.matchWith) {
          ff.matchWith = inf.matchWith;
        }
        if (inf.sumWith) {
          ff.sumWith = inf.sumhWith;
        }
        if (value && !inf.bypass && value !== 'SIN_DATO') {
          f[slug] = ff;
          x++;
        }
      }
      if (x > 0) {
        var slug = slugify(`${cuid}-tipo-persona`, { lower: true });
        var ff = {
          name: 'Tipo de persona',
          slug,
          isvalid: true,
          value: inf.bigGroup,
          group: inf.bigGroup,
          bigGroup: 'persona',
          groupUid: cuid,
          guid: cuid,
        };
        f[slug] = ff;
      }
    });
    /** Consejero * */
    var range = [35, 41];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      const cuid = uuidv4();
      let x = 0;
      for (const key in arr) {
        let value = arr[key];
        value = value.trim();
        var inf = snps_ka[key];

        if(key == 35 && value.indexOf('//') > -1){
          /* Tiene comentarios */
          const comentarios = value.split('//')[1].replace('//', '');
          const preslug = slugify(`${inf.bigGroup}-Comentarios`, { lower: true });
          var slug = slugify(`${cuid}-${preslug}`, { lower: true });
          var ff = {
            name: 'Comentarios',
            slug: preslug,
            isvalid: true,
            value: comentarios,
            group: inf.bigGroup,
            groupUid: cuid,
            empresauid: uid,
            guid: cuid,
          };
          f[slug] = ff;
          x++;
          value = value.split('//')[0];
        }

        const preslug = slugify(`${inf.bigGroup}-${inf.name}`, { lower: true });
        var slug = slugify(`${cuid}-${preslug}`, { lower: true });
        var ff = {
          name: inf.name,
          slug: preslug,
          isvalid: true,
          value,
          group: inf.bigGroup,
          groupUid: cuid,
          empresauid: uid,
          guid: cuid,
        };
        if (inf.type) {
          ff.type = inf.type;
        }
        if (inf.category) {
          ff.category = inf.category;
        }
        if (inf.matchWith) {
          ff.matchWith = inf.matchWith;
        }
        if (inf.sumWith) {
          ff.sumWith = inf.sumhWith;
        }
        if (value && !inf.bypass && value !== 'SIN_DATO') {
          f[slug] = ff;
          x++;
        }
      }
      if (x > 0) {
        var slug = slugify(`${cuid}-tipo-persona`, { lower: true });
        var ff = {
          name: 'Tipo de persona',
          slug,
          isvalid: true,
          value: inf.bigGroup,
          group: inf.bigGroup,
          bigGroup: 'persona',
          groupUid: cuid,
          guid: cuid,
        };
        f[slug] = ff;
      }
    });

    /** Banderas Rojas* */
    var range = [47, 48];
    var _fields = this.groupByRange(fields, range);
    const bs = [];
    _fields.map((ob) => {
      const i = Object.values(ob);
      i.map((_b) => {
        if (_b) {
          bs.push(_b);
        }
      });
    });
    const bsn = 'Banderas rojas';
    f['banderas-rojas'] = {
      slug: 'banderas-rojas',
      bs,
    };


    /** Contratos * */
    var range = [49, 59];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      const cuid = uuidv4();
      let x = 0;
      for (const key in arr) {
        let value = arr[key];
        value = value.trim();
        const inf = snps_ka[key];
        const preslug = slugify(`${inf.bigGroup}-${inf.name}`, { lower: true });
        const slug = slugify(`${cuid}-${preslug}`, { lower: true });
        const ff = {
          name: inf.name,
          slug: preslug,
          isvalid: true,
          value,
          group: inf.bigGroup,
          groupUid: cuid,
          guid: cuid,
          empresauid: uid,
        };
        if (inf.type) {
          ff.type = inf.type;
        }
        if (inf.category) {
          ff.category = inf.category;
        }
        if (inf.matchWith) {
          ff.matchWith = inf.matchWith;
        }
        if (inf.sumWith) {
          ff.sumWith = inf.sumWith;
        }
        if (inf.sumWith && value) {
          value = value.replace(/[^0-9.]/g, '');
          value = parseFloat(value);
          ff.value = value;
        }
        if (value && !inf.bypass && value !== 'SIN_DATO') {
          f[slug] = ff;
          x++;
        }
      }
    });

    /** Convenios * */
    var range = [60, 72];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      const cuid = uuidv4();
      let x = 0;
      for (const key in arr) {
        let value = arr[key];
        value = value.trim();
        const inf = snps_ka[key];
        const preslug = slugify(`${inf.bigGroup}-${inf.name}`, { lower: true });
        const slug = slugify(`${cuid}-${preslug}`, { lower: true });
        const ff = {
          name: inf.name,
          slug: preslug,
          isvalid: true,
          value,
          group: inf.bigGroup,
          groupUid: cuid,
          guid: cuid,
          empresauid: uid,
        };
        if (inf.type) {
          ff.type = inf.type;
        }
        if (inf.category) {
          ff.category = inf.category;
        }
        if (inf.matchWith) {
          ff.matchWith = inf.matchWith;
        }
        if (inf.sumWith) {
          ff.sumWith = inf.sumWith;
        }
        if (inf.sumWith && value) {
          value = value.replace(/[^0-9.]/g, '');
          value = parseFloat(value);
          ff.value = value;
        }
        if (value && !inf.bypass && value !== 'SIN_DATO') {
          f[slug] = ff;
          x++;
        }
      }
    });

    /** Transferencias de dependencia a instancia * */
    var range = [73, 75];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      const cuid = uuidv4();
      let x = 0;
      for (const key in arr) {
        let value = arr[key];
        value = value.trim();
        const inf = snps_ka[key];
        const preslug = slugify(`${inf.bigGroup}-${inf.realName ? inf.realName : inf.name}`, { lower: true });
        var slug = slugify(`${cuid}-${preslug}`, { lower: true });
        var ff = {
          name: inf.name,
          slug: preslug,
          isvalid: true,
          value,
          group: inf.bigGroup,
          groupUid: cuid,
          fromdb: dbid,
          guid: cuid,
          empresauid: uid,
        };
        if (inf.type) {
          ff.type = inf.type;
        }
        if (inf.category) {
          ff.category = inf.category;
        }
        if (inf.matchWith) {
          ff.matchWith = inf.matchWith;
        }
        if (inf.sumWith) {
          ff.sumWith = inf.sumWith;
        }
        if (inf.sumWith && value) {
          value = value.replace(/[^0-9.]/g, '');
          value = parseFloat(value);
          ff.value = value;
        }
        if (value && !inf.bypass && value !== 'SIN_DATO') {
          f[slug] = ff;
          x++;
        }
      }
      if (x > 0) {
        var slug = slugify(`${cuid}-tipo-transferencia`, { lower: true });
        var ff = {
          name: 'Tipo de transferencia',
          isvalid: true,
          value: 'receptor',
          group: 'transferencia',
          bigGroup: 'transferencia',
          groupUid: cuid,
          guid: cuid,
          fromdb: dbid,
          slug,
        };
          // console.log('TRANSFERENCIA', ff);
        f[slug] = ff;
      }
    });

    /** Transferencia de empresa a esta empresa  * */
    var range = [76, 77];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      const cuid = uuidv4();
      let x = 0;
      for (const key in arr) {
        let value = arr[key];
        value = value.trim();
        const inf = snps_ka[key];
        const inn = inf.name.replace(/[.\s]/g, '');
        const preslug = slugify(`${inf.bigGroup}-${inn}`, { lower: true });
        var slug = slugify(`${cuid}-${preslug}`, { lower: true });
        var ff = {
          name: inf.name,
          slug: preslug,
          isvalid: true,
          fromdb: dbid,
          value,
          group: inf.bigGroup,
          groupUid: cuid,
          guid: cuid,
          empresauid: uid,
        };
        if (inf.type) {
          ff.type = inf.type;
        }
        if (inf.category) {
          ff.category = inf.category;
        }
        if (inf.matchWith) {
          ff.matchWith = inf.matchWith;
        }
        if (inf.sumWith) {
          ff.sumWith = inf.sumWith;
        }
        if (inf.sumWith && value) {
          value = value.replace(/[^0-9.]/g, '');
          value = parseFloat(value);
          ff.value = value;
        }
        if (value && !inf.bypass && value !== 'SIN_DATO') {
          f[slug] = ff;
          x++;
        }
      }
      if (x > 0) {
        var slug = slugify(`${cuid}-tipo-transferencia`, { lower: true });
        var ff = {
          name: 'Tipo de transferencia',
          isvalid: true,
          value: 'receptor',
          aka: '¿Quién recibe la transferencia?',
          group: 'transferencia',
          bigGroup: 'transferencia',
          fromdb: dbid,
          groupUid: cuid,
          guid: cuid,
        };
        f[slug] = ff;
      }
    });

    /** Transferencia de esta empresa a otras empresas * */
    var range = [78, 79];
    var _fields = this.groupByRange(fields, range);
    _fields.map((arr, ind) => {
      const cuid = uuidv4();
      let x = 0;
      for (const key in arr) {
        let value = arr[key];
        value = value.trim();
        const inf = snps_ka[key];
        const inn = inf.name.replace(/[.\s]/g, '');
        const preslug = slugify(`${inf.bigGroup}-${inn}`, { lower: true });
        var slug = slugify(`${cuid}-${preslug}`, { lower: true });
        var ff = {
          name: inf.name,
          slug: preslug,
          isvalid: true,
          value,
          fromdb: dbid,
          group: inf.bigGroup,
          groupUid: cuid,
          guid: cuid,
          empresauid: uid,
        };
        if (inf.type) {
          ff.type = inf.type;
        }
        if (inf.category) {
          ff.category = inf.category;
        }
        if (inf.matchWith) {
          ff.matchWith = inf.matchWith;
        }
        if (inf.sumWith) {
          ff.sumWith = inf.sumWith;
        }
        if (inf.sumWith && value) {
          value = value.replace(/[^0-9.]/g, '');
          value = parseFloat(value);
          ff.value = value;
        }
        if (value && !inf.bypass && value !== 'SIN_DATO') {
          f[slug] = ff;
          x++;
        }
      }
      if (x > 0) {
        var slug = slugify(`${cuid}-tipo-transferencia`, { lower: true });
        var ff = {
          name: 'Tipo de transferencia',
          isvalid: true,
          value: 'emisor',
          group: 'transferencia',
          fromdb: dbid,
          bigGroup: 'transferencia',
          groupUid: cuid,
          guid: cuid,
        };
        f[slug] = ff;
      }
    });

    /** Otros * */
    var otrosRange = [80, 92];
    for (var i = otrosRange[0]; i <= otrosRange[1]; i++) {
      var sn = snps_ka[i];
      try {
        var _fields = this.groupByRange(fields, [i, i]);
      } catch (ex) {
        var _fields = [];
      }
      _fields.map((_f) => {
        let em = Object.values(_f)[0];
        if (em) {
          const t = sn.category;
          const n = sn.name;

          const guid = uuidv4();
          const preslug = slugify(`otros ${n}`, { lower: true });
          const slug = `${guid}-${preslug}`;
          let matchWith = [t];
          let type = t;
          if (t.indexOf('monto') > -1) {
            em = em.replace(/\,/g, '');
            em = parseFloat(em);
            if (isNaN(em)) {
              em = 0;
            }
            type = 'monto';
            matchWith = false;
          }

          if (t == 'empresa') {
            matchWith = false;
          }

          const obj = {
            name: n,
            slug: preslug,
            isvalid: true,
            value: em,
            matchWith,
            group: 'otros',
            guid,
            fromdb: dbid,
            type,
            category: t,
            groupUid: guid,
            empresauid: uid,
          };
          f[slug] = obj;
        }
      });
    }
    /** OTROS NUEVO * */
    var otrosRange = [93, 94];
    for (var i = 0; i < 1; i++) {
      try {
        var _fields = this.groupByRange(fields, otrosRange);
      } catch (ex) {
        var _fields = [];
      }
      _fields.map((_f) => {
        const vv = Object.values(_f);
        let em = vv[0];
        if (em) {
          const t = em;
          const n = em;
          const guid = uuidv4();
          const preslug = slugify(`otros ${n}`, { lower: true });
          const slug = `${guid}-${preslug}`;
          let matchWith = [t];
          let type = t;
          if (t.indexOf('monto') > -1) {
            em = em.replace(/\,/g, '');
            em = parseFloat(em);
            if (isNaN(em)) {
              em = 0;
            }
            type = 'monto';
            matchWith = false;
          }

          if (t == 'empresa') {
            matchWith = false;
          }
          const obj = {
            name: n,
            slug: preslug,
            isvalid: true,
            value: vv[1],
            matchWith,
            group: 'otros',
            guid,
            fromdb: dbid,
            type,
            newOtros: em,
            category: t,
            groupUid: guid,
            empresauid: uid,
          };
          f[slug] = obj;
        }
      });
    }
  }

  groupByRange(fields, range) {
    const ia = {};
    const z = 0;
    for (let i = range[0]; i <= range[1]; i++) {
      const f = fields[i];
      const a = f.split(';');
      for (let y = 0; y < a.length; y++) {
        const v = a[y];
        if (!ia[y]) {
          ia[y] = {};
        }
        ia[y][i] = v.replace(/^\s+|\s+$/g, '');
      }
    }
    return Object.values(ia);
  }


  save() {
    // var dbs = {};
    //     dbs[this.uid] = this.obj;
    //
    // var project = {
    //   uid: uuidv4(),
    //   info: {
    //     name: this.name,
    //     slug: this.slug
    //   },
    //   allowAutoSave: true,
    //   projectStructure: "sinapsis_empresas_auto",
    //   classVersion: "0.0.1",
    //   saves: 1,
    //   modified: moment.now(),
    //   version: 1,
    //   created: moment.now(),
    //   dbs: dbs,
    //   savedAt: moment.now()
    // };


    // var j = JSON.stringify(project);
    // var content = btoa(encodeURI(j));
    const content = this.obj;
    return content;

    // // var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    // // saveAs(blob, this.slug + ".sinapsis");
    // saveAs(blob, this.slug + ".json");
  }

  cleanEmpresas() {
    let a = this.array;
    a = a.map((e) => Object.values(e));
    this.empresas = a;
  }

  setInitialObject() {
    const wrapper = {};
    const obj = {
      id: this.uid,
      name: this.name,
      created: moment.now(),
      color: 'rgb(244, 41, 28)',
      modified: moment.now(),
      empresas: {},
    };
    wrapper[this.uid] = obj;
    this.obj = obj;
    this.wrapper = wrapper;
  }
}
