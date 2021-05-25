import React from 'react';

class Customer extends React.Component{
    render(){
        //render는 항상 수행되는 화면
        return(
        <div>
          <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
          <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
        </div>
        )
    }
}

class CustomerProfile extends React.Component{
    // id 값 img값 렌더링하는것
    render(){
        return(
            <div>
                <img scr={this.props.image} alt="profile"/>
                <h2> {this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        //r//사용자의 남은 정보
        return(
        <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        )
    }
}

export default Customer;//custermer class 를 내보내는 역할
