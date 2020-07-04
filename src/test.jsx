import React from 'react';

export default class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataFetched: false,
            data: []
        }
    }
    componentDidMount(){
        var url = "/api/getdata.php";
        fetch(url,{
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }}
        ).then(res => res.json())
        .then(res =>{
            this.setState({
                data: res,
                dataFetched: true
            })
        })
        console.log(this.state);
    }
    render(){
        if (this.state.dataFetched){
            console.log(this.state.data);
            return (
                <div>
                    {this.state.data.map(data => {
                        return (
                            <div>{data.fName} {data.lName}</div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div>
                    loading
                </div>
            )
        }
    }
}