import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class EmployeesList extends Component {

    getEmployeeName(){
        const {employees} = this.props
        return Names = employees.map((employees, key) => {
            return <Text key={key}>{employees.name} </Text>
        })
    }

    getEmployeeLastName(){
        const {employees} = this.props
        return Names = employees.map((employees, key) => {
            return <Text key={key}>{employees.lastname} </Text>
        })
    }
    getEmployeeAge(){
        const {employees} = this.props
        return Names = employees.map((employees, key) =>{
            return <Text key={key}>{employees.age}</Text>
        })
    }

    

    render(){
        return(
            <View>
                {this.getEmployeeName()}
                {this.getEmployeeLastName()}

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {employees: state.employees}
}

export default connect(mapStateToProps)(EmployeesList)
