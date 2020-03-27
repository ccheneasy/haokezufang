import React, { Component } from 'react'

export class index extends Component {
    componentDidMount=()=>{
        console.log(this.props)
    }
    render() {
        return (
            <div>
                找房
            </div>
        )
    }
}

export default index
