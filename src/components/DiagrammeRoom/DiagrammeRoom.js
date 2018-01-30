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
        events = [...this.state.events],
        hour = this.props.splitter.getHours();
      if (events.length === 0){
        return  R.range(sh,this.props.hours + sh + 1).map((index) =>{ 
            return {
              hstart:index,
              mstart:0,
              hend:index + 1,
              mend:0,
              type:"empty",
              disabled:(index) <= hour,
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
              disabled: bounds.hstart < hour,
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
              disabled: bounds.hstart <= hour,
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
            disabled: bounds.hend <= hour,
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
              disabled: bounds.hend <= eh,
              room:this.props.room
            })
          }
        } 
        return acc;
      },[])
    }

    splitEmpty(cells){
      let hour = new Date().getHours(),
        splitter = this.props.splitter
      return cells.reduce((acc,cur,index) => {
        if(cur.type === "empty" 
          && cur.hstart !== cur.hend
        ){
          let hstart_ = cur.hstart;
          let mstart_ = cur.mstart;
          while (hstart_ < cur.hend){
            acc.push({
              hstart:hstart_,
              mstart:mstart_,
              hend:hstart_ + 1,
              mend:0,
              type:"empty",
              disabled: hstart_ + 1 <= hour,
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
              disabled: cur.hend <= hour,
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

    insertSplitter(cells){
      console.log("PRE",cells)
      let s = this.props.splitter,
      ssum = s.getHours()*60 + s.getMinutes()
      return R.flatten(cells.map((cell,index) => {
        if(cell.type === "empty" && s.getHours() === cell.hstart){
         let csumStart = cell.hstart*60 + cell.mstart,
          csumEnd = cell.hend*60 + cell.mend
         if(csumStart < ssum && csumEnd > ssum){
            console.log("INDISE",cell,s)
            return [
            {
              hstart: cell.hstart,
              mstart:cell.mstart,
              hend:s.getHours(),
              mend:s.getMinutes(),
              type:"empty",
              disabled:true,
              room:cell.room
            },
            {
              hstart:s.getHours(),
              mstart:s.getMinutes(),
              hend:cell.hend,
              mend:cell.mend,
              type:"empty",
              disabled:false,
              room:cell.room
            },
          ]
         }
        }
       return cell;
      }))
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
      //console.log("R",this.insertSplitter(this.splitEmpty(this.getCells())))
        return (
            <div className = "diagramme-room">
            {this.insertSplitter(this.splitEmpty(this.getCells())).map((cell,index) => {
              return <DiagrammeCell
              key = {`dcell${this.props.room.id}-${index}`} 
              type = {cell.type}
              disabled = {(()=>{
                return `${cell.disabled? "disabled" : ""}`
              })()}
              width = {`${this.widthInMinutes(cell)}%`}
              border = {(cell.mstart && !cell.disabled)? "white" : `${DiagrammeRoom.BORDER_COLOR}`}
              hover = {(this.props.onRoomHover).bind(null,cell.room.id)}
              unhover = {(this.props.onRoomHover).bind(null,"")}
              eventInfo = {this.props.events.filter((e)=>e.id === cell.id)[0]}
            />
            })}
            </div>
            )
    }
}
