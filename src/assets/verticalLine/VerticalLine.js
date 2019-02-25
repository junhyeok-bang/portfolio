import React, { Component } from 'react';

class VerticalLine extends Component {
    
    render() {
        return (
            <hr
                style={{
                    marginTop: this.props.marginTop,
                    marginBottom: this.props.marginBottom,
                    color: this.props.color,
                    backgroundColor: this.props.color,
                    height: "1px",
                    width: "100%"
                }}
            />
        );
    }
}
export default VerticalLine;