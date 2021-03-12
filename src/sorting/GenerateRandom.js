import React from 'react';
import {Progress} from 'reactstrap';

class GenerateRandom extends React.Component{
  
    render()
    {
        console.log(this.props.array);
        return(
           <>
           <br/><br/>
           
            {
                this.props.array.map((val,index)=>{
                  return(
                    <div style={{marginTop:'10px'}} className="row " key={index}>
                      <div className="col-10 col-sm-10">
                        <Progress value={val} />
                      </div>
                      <div className="col-2 col-sm-2">{val}</div>
                      </div>        
                  );
                })
              } 
           </>
        );
    }
}
export default GenerateRandom;