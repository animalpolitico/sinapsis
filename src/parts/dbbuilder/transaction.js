import React from 'react';

export default class TransactionRow extends React.Component{
  buildName(){
    var f = this.props.g;
    var emisor, monto, receptor = false;
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
    var mainName = receptor && emisor ? emisor + ' -> ' + receptor : this.props.singleName + ' #'+this.props.count;
    var o = [
      mainName,
      monto ? monto : false
    ];
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
            {n[0]}
          </div>
          <div className="ss_transaction_row_d">
            {
              n[1] ? window.dbf.fm(n[1]) : null
            }
          </div>
        </div>
      </div>
    )
  }
}
