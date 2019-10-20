import React, {Component} from "react";
import ReactDOM from "react-dom";
import './resizablepanels.scss';




class ResizablePanels extends React.Component {
    eventHandler = null
    // wrapper: any;
    state = {
        isDragging: false,
        panels: [300, 300, 300],
        initialPos: 0,
        currentPanel: 0,
        delta: 0
    }

    constructor (props:any) {
      super(props);
    //   this.wrapper = React.createRef();
      
    }
  
    componentDidMount () {
        console.log(this.refs.wrapper, ReactDOM.findDOMNode(this));
        
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            node.addEventListener('mousemove', this.resizePanel)
            node.addEventListener('mouseup', this.stopResize)
            node.addEventListener('mouseleave', this.stopResize)
        }
        
    }
    
    startResize = (event:any, index:number) => {
      this.setState({
        isDragging: true,
        currentPanel: index,
        initialPos: event.clientX
      })
    }
    
    stopResize = () => {
      if (this.state.isDragging) {
        console.log(this.state)
        this.setState(({panels, currentPanel, delta}:any) => ({
          isDragging: false,
          panels: {
            ...panels,
            [currentPanel]: (panels[currentPanel] || 0) - delta,
            [currentPanel - 1]: (panels[currentPanel - 1] || 0) + delta
          },
          delta: 0,
          currentPanel: null
        }))
      }
    }
    
    resizePanel = (event:any) => {
      if (this.state.isDragging) {
        const delta = event.clientX - this.state.initialPos
        this.setState({
          delta: delta
        })
      }
    }
    
    render() {
        const {children}:any = this.props;
        const rest = children ? children.slice(1) : [];
        return (
            <div ref="wrapper" className="panel-container" onMouseUp={() => this.stopResize()}>
                <div className="panel" style={{width: `calc(100% - ${this.state.panels[1]}px - ${this.state.panels[2]}px)`}}>
                    {children[0]}
                </div>
                {[].concat(...rest.map((child:any, i:number) => {
                    return [
                    <div onMouseDown={(e) => this.startResize(e, i + 1)}
                        key={"resizer_" + i}
                        style={this.state.currentPanel === i+1 ? {left: this.state.delta} : {}}
                        className="resizer"></div>,
                    <div key={"panel_" + i} className="panel" style={{width: this.state.panels[i + 1]}}>
                        {child}
                    </div>
                    ]
                }))}
            </div>
        )
    }
  }

  export default ResizablePanels;