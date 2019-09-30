import React from 'react';

export default class TransactionRow extends React.Component{
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
      showT: receptor && emisor
    };
    return o;
  }

  edit(){
    var uid = this.props.g[0].groupUid;
    this.props.onClick(uid);
  }

  render(){
    var n = this.buildName();
    return(
      <div className="ss_transaction_row" onClick={() => this.edit()}>
        <div className="ss_transaction_row_c">
          <div className="ss_transaction_row_n">
            {
              n.showT ?
              <div className="ss_transaction_row_n_d">
                <div className="ss_transaction_row_n_d_t">
                  {n.emisor}
                </div>
                <div className="ss_transaction_row_n_d_a">
                  →
                </div>
                <div className="ss_transaction_row_n_d_t">
                  {n.receptor}
                </div>
              </div>
              :
              <div className="ss_transaction_row_n_full">
                {this.props.singleName + ' #' + this.props.count}
              </div>
            }


          </div>
          <div className="ss_transaction_row_d">
            {
              n.monto ? window.dbf.fm(n.monto) : null
            }
          </div>
        </div>
      </div>
    )
  }
}
