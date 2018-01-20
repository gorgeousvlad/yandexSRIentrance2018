import React,{ Component } from 'react';
import DiagrammeCell from "../DiagrammeCell/DiagrammeCell";
import './DiagrammeRoom.scss';
const R = require('ramda');
export default class DiagrammeRoom extends Component{
    static SH = 7;
    static SM = 0;
    static EM = 50;
    static BORDER_COLOR = '#dfe8f5'
    constructor (props){
    super(props);
    this.state = {events:this.props.events}
    }
    getCells(){
      let sh = DiagrammeRoom.SH,
        sm = DiagrammeRoom.SM,
        em = DiagrammeRoom.EM,
        eh = sh + this.props.hours - 1 ,
        events = [...this.state.events];
      if (events.length === 0){
        return  R.range(0,this.props.hours).map((index) =>{ 
            return {
            hstart:index,
            mstart:0,
            hend:index + 1,
            mend:0,
            type:"empty",
            room:this.props.room
          }
        })
      }
      return this.state.events.reduce((acc,cur,index) => {
        let bounds = this.getEventBounds(cur)
        if(!acc.length){
          if (!((bounds.hstart === sh) && (bounds.mstart === sm))){
           acc.push({
              hstart:sh,
              mstart:sm,
              hend:bounds.hstart,
              mend:bounds.mstart,
              type:"empty",
              room:this.props.room
            })
          }
        }
        else{
          let boundsPrev = acc[acc.length - 1]
          if (bounds.hend !== boundsPrev.hend && bounds.mend !== boundsPrev.mend){
             acc.push({
              hstart:boundsPrev.hend,
              mstart:boundsPrev.mend,
              hend:bounds.hstart,
              mend:bounds.mstart,
              type:"empty",
              room:this.props.room
            })
          }
        }
          acc.push({
            hstart:bounds.hstart,
            mstart:bounds.mstart,
            hend:bounds.hend,
            mend:bounds.mend,
            type:"event",
            room:this.props.room,
            id:cur.id
          })
        if (index === this.state.events.length - 1){
          if (!((bounds.hend === eh) && (bounds.mend === em))){
             acc.push({
              hstart:bounds.hend,
              mstart:bounds.mend,
              hend:eh,
              mend:em,
              type:"empty",
              room:this.props.room
            })
          }
        } 
        return acc;
      },[])
    }

    splitEmpty(cells){
      return cells.reduce((acc,cur,index) => {
        if(cur.type === "empty" && cur.hstart !== cur.hend){
          let hstart_ = cur.hstart;
          let mstart_ = cur.mstart;
          while (hstart_ < cur.hend){
            acc.push({
              hstart:hstart_,
              mstart:mstart_,
              hend:hstart_ + 1,
              mend:0,
              type:"empty",
              room:this.props.room
            })
            hstart_++;
            mstart_ = 0;
          }
          if (cur.mend){
            acc.push({
              hstart:hstart_,
              mstart:0,
              hend:cur.hend,
              mend:cur.mend,
              type:"empty",
              room:this.props.room
            })
          }    
        }
        else{
          acc.push(cur);
        }
        return acc;
      },[])
    }

    getEventBounds(event){
      return {
        hstart: event.dateStart.getHours(),
        mstart: event.dateStart.getMinutes(),
        hend: event.dateEnd.getHours(),
        mend: event.dateEnd.getMinutes()
      }
    }
    widthInMinutes(cell){
      let minuteWidth = 100/(this.props.hours * 60),
        {hend, hstart, mend, mstart} = cell;
      return minuteWidth * ((hend*60 + mend)-(hstart*60 + mstart));
    }
    render(){
        return (
            <div className = "diagramme-room">
            {this.splitEmpty(this.getCells()).map((cell,index) => {
              return <DiagrammeCell
              key = {`dcell${this.props.room.id}-${index}`} 
              type = {cell.type}

              width = {`${this.widthInMinutes(cell)}%`}
              border = {cell.mstart? "white" : `${DiagrammeRoom.BORDER_COLOR}`}
              hover = {((room)=>{console.log(room)}).bind(null,cell.room)}
              unhover = {(()=>{console.log("unhover")})}
              eventInfo = {this.props.events.filter((e)=>e.id === cell.id)[0]}
            />
            })}
            </div>
            )
    }
}
