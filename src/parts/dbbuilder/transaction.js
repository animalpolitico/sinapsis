import React from 'react';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import formatMoney from '../../funcs/formatMoney';
export default class TransactionRow extends React.Component{
  state = {
    showDelete: false
  }

  buildName(){
    var f = this.props.g;
    var t = f[0];
    var emisor, monto, receptor = false;
    if(t.group !== "transferencia"){
      // console.log('t', t.category);
      f.map(function(e){
        switch(e.category){
          case "emisor":
            emisor = e.value;
          break;
          case "monto":
            monto = e.value;
          break;
          case "receptor":
            receptor = e.value;
          break;
        }
      })
      if(this.props.receptorIsEmpresa){
        receptor = this.props.empresa.name;
      }
      if(t.group == "contrato"){
        receptor = false;
      }
    }else{
      var type = f.find(function(_d){
        return _d.name == "Tipo de transferencia"
      });

      if(type){
        var _t = type.value;
        if(_t == "receptor"){
          receptor = this.props.empresa.name;
          var emisorGroup = f.find(function(_d){
            return _d.category == "emisor"
          });
          if(emisorGroup){
            emisor = emisorGroup.value;
          }
        }else{
          emisor = this.props.empresa.name;
          var receptorGroup = f.find(function(_d){
            return _d.category == "receptor"
          });
          if(receptorGroup){
            receptor = receptorGroup.value;
          }
        }

        var montoGroup = f.find(function(_d){
          return _d.category == "monto"
        });

        if(montoGroup){
          monto = montoGroup.value;
        }
      }
    }

    var o = {
      receptor: receptor,
      emisor: emisor,
      monto: monto,
      showT: emisor ? true : false
    };
    return o;
  }

  edit(){
    var uid = this.props.g[0].groupUid || this.props.g[0].guid ;
    this.props.onClick(uid);
  }

  delete(){
    var g = this.props.g;
    console.log('t', this.props);
    var t = g[0];
    var euid = this.props.empresa.uid;
    var dbid = this.props.parent.props.dbid;
    var guid = t.groupUid;

    window.dbf.deleteGroup(guid, euid, dbid);
  }

  render(){
    var n = this.buildName();
    var c = window.dbf.getDbCurrencyObj(this.props.db.id);
    console.log('t', c);

    return(
      <>
      <div className="ss_transaction_row">
        <div className="ss_transaction_row_c">
          <div className="ss_transaction_row_n">
            {
              n.showT ?
              <div className="ss_transaction_row_n_d">
                <div className="ss_transaction_row_n_d_t">
                  {n.emisor}
                </div>
                {
                  n.receptor ?
                  <>
                  <div className="ss_transaction_row_n_d_a">
                    →
                  </div>
                  <div className="ss_transaction_row_n_d_t">
                    {n.receptor}
                  </div>
                  </>
                : null
                }

              </div>
              :
              <div className="ss_transaction_row_n_full">
                {this.props.singleName + ' #' + this.props.count}
              </div>
            }
          </div>
          <div className="ss_transaction_row_d">
            {
              n.monto ? formatMoney(n.monto, c) : null
            }
          </div>
        </div>
        <div className="ss_transaction_row_d"  onClick={() => this.edit()}>
          <Icon size="small">edit</Icon>
        </div>
        <div className="ss_transaction_row_d" onClick={() => this.setState({showDelete: true})}>
          <Icon size="small">delete</Icon>
        </div>
      </div>

      <Dialog open={this.state.showDelete} onClose={() => this.setState({showDelete: false})}>
        <DialogTitle id="form-dialog-title">¿Borrar?</DialogTitle>
          <DialogContent>
            Esta acción es irreversible.
          </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => this.setState({showDelete: false})}>
            Cerrar
          </Button>
          <Button color="secondary" onClick={() => this.delete()}>
            Borrar permanentemente
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
  }
}
