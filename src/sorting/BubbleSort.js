
import React from "react";
import {Progress} from 'reactstrap';
 class BubbleSort extends React.Component
{
    state={
        item:[]
    }
    componentDidMount()
    {
        console.log("hello");
        this.Timer();
    }
 componentWillUnmount()
 {
     clearInterval(this.refrence);
 }
   Timer=()=>{
       var arr=this.props.array;
       var len=arr.length;
       //console.log(arr);
       var i=-1,j=0,stop;
      
      this.refrence= setInterval(()=>{
        if(i==-1)
        {
            console.log(arr);
            this.setState({item:arr})
            i++;
        }
         else if(i<15)
          {
           
            for (j=0, stop=len-i; j < stop; j++){
                if (arr[j] > arr[j+1]){
                    var temp = arr[j];
                   arr[j] = arr[j+1];
                  arr[j+1] = temp;
                }
            }
            console.log(arr);
            i++;
            this.setState({item:arr})
          }
          else
          {
              setTimeout(()=>{
                 // alert("Your are redirected to home page");
                  this.props.history.push("/");
              },3000)
          }
          
       },500)

   }
    render()
    {
        
       // var items=<Progress value={25}/>
      return(
          <><br></br><br/>
           {
               this.state.item.map((val,index)=>{
                   return(
                    <div style={{marginTop:'10px'}} className="row" key={index}>
                    <div className="col-10 col-sm-10">
                      <Progress value={val} color={"warning"} />
                    </div>
                    <div className="col-2 col-sm-2">{val}</div>
                    </div>      
                   );
               })
           }
          </>
      )
    }
}

export default BubbleSort;