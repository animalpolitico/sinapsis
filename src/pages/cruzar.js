import React from 'react'
import Button from '@material-ui/core/Button';

export default class Cruzar extends React.Component{
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
      <div className="ss_page" id="ss_page_cruzar">
        <CrucesTopBar />
      </div>
    )
  }
}

class CrucesTopBar extends React.Component{
  render(){
    return(
      <div className="ss_c_topbar">
        <div className="ss_c_topbar_tool">
          <div className="ss_c_topbar_tool_n">
            Sube una o más bases de datos
          </div>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        </div>
      </div>
    )
  }
}
