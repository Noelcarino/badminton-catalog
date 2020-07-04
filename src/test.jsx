import React from 'react';

export default class Test extends React.Component {
    componentDidMount(){
        var url = "/testdb.php";
        fetch(url,{
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }}
        ).then(res => res.text())
        .then(res =>{
            console.log(res);
        })
    }
    render(){
        return (
            <div>

                hello
            </div>
        )
    }
}