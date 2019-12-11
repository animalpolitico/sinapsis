export default class Empresa {
  constructor(euid, dbuid) {
    this.projectObj = window.dbf.obj;
    this.db = this.obj.dbs[dbuid];
    this.dbuid = dbuid;
    this.uid = euid;
    this.obj = this.db.empresas[euid];
    this.set();
  }

  set() {
  }
}
