import React from 'react'
import {Progress} from 'reactstrap';

class SelectionSort extends React.Component{
state={
    item:[]
}
    componentDidMount()
        {
            console.log("selection");
            this.Timer();
        }
        componentWillUnmount()
        {
            clearInterval(this.refrence);
        }
        Timer=()=>{
            var dupArray=this.props.array;
            
            var i=-1;
            this.refrence=setInterval(()=>{
                if(i==-1)
                {
                    console.log(dupArray);
                    this.setState({item:dupArray})
                    i++;
                }
                else if(i<15)
                {
                    var min_idx=i;
                    for(var j=i+1;j<dupArray.length;j++)
                    {
                        if (dupArray[j] < dupArray[min_idx]) 
                           min_idx = j; 
                    } 
                        this.setState({item:dupArray,flag:true,min:min_idx})
                      
                    var temp = dupArray[min_idx]; 
                    dupArray[min_idx] = dupArray[i]; 
                    dupArray[i] = temp; 
                    this.setState({item:dupArray,flag:false})
                    i++;
                    console.log(dupArray);
                }
                else{
                    this.props.history.push("/");
                }
            
            },500)
           // var len=this.props.array.length;
         /*    this.refrence=setInterval(()=>{
                if(i<5)
                {
                    var min_idx=i;
                    for(var j=i+1;j<dupArray.length;j++)
                    {
                        if (dupArray[j] < dupArray[min_idx]) 
                           min_idx = j; 
                    } 
                        this.setState({item:dupArray,flag:true,min:min_idx})
                      
                    var temp = dupArray[min_idx]; 
                    dupArray[min_idx] = dupArray[i]; 
                    dupArray[i] = temp; 
                    this.setState({item:dupArray,flag:false})
                    i++;
                }
                else{
                    this.props.history.push("/");
                }
            },1000) */
        }
    render()
    {
        
        return (
            <div>
                 <><br></br><br/>
           {
               this.state.item.map((val,index)=>{
                   return(
                    <div style={{marginTop:'10px'}} className="row" key={index}>
                    <div className="col-10 col-sm-10">
                      <Progress value={val} color={"danger"} />
                    </div>
                    <div className="col-2 col-sm-2">{val}</div>
                    </div>      
                   );
               })
           }
          </>
            </div>
        );
    }
}
export default SelectionSort;