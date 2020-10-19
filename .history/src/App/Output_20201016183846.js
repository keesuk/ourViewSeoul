import React, { Component } from 'react';
import styled from 'styled-components';

const OutputWrapper = styled.div`
    display: none;

    @media all and (min-width:0px) and (max-width:1023px) {
        display: block;
        z-index: 1000;
        width: 95vw;
        height: 100vh;
        box-sizing: border-box;
        border-left: 2px solid black;
        border-right: 2px solid black;
        border-top: 2px solid black;
        background-color: white;
        margin-top: 50px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        transition: all .5s ease;
        position:fixed;
        overflow:auto;
        box-shadow: 5px 5px black;
    }
`;
const OutputClose = styled.div`
    position: relative;
    font-size: 40px;
    font-weight: 200;
    color: black;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    padding-bottom: 50px;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 36x;
        padding-bottom: 20px;
    }
`;
const OutputUp = styled.div`
    position: relative;
    text-align: center;
    font-weight: 800;
    color: black;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    padding-bottom: 50px;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 40px;
        padding-bottom: 20px;
    }
`;

class Output extends Component {
    constructor(props){
        super(props);
        this.state = {...props};
    }

    dragStart(event) {
        this.dragged = event.currentTarget
    }
    dragEnd(event) {
        this.dragged.style.display = 'black'

        event.target.classList.removed('drag-up')
        this.over.classList.remove("drag-up")

        event.target.classList.remove('drag-down')
        this.over.classList.remove('drag-down')

        var data = this.state.data
        var from = Number(this.dragged.dataset.id)
        var to = Number(this.over.dataset.id)
        data.splice(to, 0, data.splice(from,1)[0])

        data = data.map((doc, index)=> {
            doc.newIndex = index + 1;
            return doc
        })

        this.setState({data: data})
    }

    dragOver(e) {
        e.preventDefault();
    
        this.dragged.style.display = "none";
        
        if (e.target.tagName !== "LI") {
          return;
        }
        const dgIndex = JSON.parse(this.dragged.dataset.item).newIndex;
        const taIndex = JSON.parse(e.target.dataset.item).newIndex;
        const animateName = dgIndex > taIndex ? "drag-up" : "drag-down";


        if (this.over && e.target.dataset.item !== this.over.dataset.item) {
        this.over.classList.remove("drag-up", "drag-down");
        }

        if(!e.target.classList.contains(animateName)) {
        e.target.classList.add(animateName);
        this.over = e.target;
        }
    }
        

    render() {
        // const { } = this.props; 
        var listItems = this.state.data.map((item, i) => {
            return (
              <li 
                data-id={i}
                key={i}
                style={{height: "60px", border: "solid 1px #cccccc", margin: "10px 30%", borderRadius: "5px", backgroundColor: "green", color: "#ffffff"}}
                draggable='true'
                onDragEnd={this.dragEnd.bind(this)}
                onDragStart={this.dragStart.bind(this)}
                data-item={JSON.stringify(item)}
              >{item.color}</li>
            )
           });
          return (
            <ul onDragOver={this.dragOver.bind(this)} className ="contain">
              {listItems}
            </ul>
          )
    }
}

//         return(
//             // <OutputWrapper style={{ 
//             //     transform: imgShow ? 'translateY(0vh)' : 'translateY(-22vh)'
//             //     }} >
//             //     <div>
//             //         <OutputUp >
//             //             ￣ 
//             //         </OutputUp>
//             //     </div>
//             // </OutputWrapper>
            
//         )
//     }
// }

export default Output;