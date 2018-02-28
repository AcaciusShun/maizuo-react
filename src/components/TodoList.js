import React, { Component } from 'react';
import {connect} from "react-redux";
import { Button } from 'antd';

class TodoUI extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="ipt" />
                
                {/* 只要一有值（传参数）前必有（） 即函数 */}
                <Button onClick={()=>this.props.addTodo(this.refs.ipt.value)}>添加</Button>

                <ul>
                    {/* 在这里取用 */}
                    {this.props.todo.map(function (item,index) {
                        return (
                            <li key = {index}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

//映射为key值  可在上面取用
const mapStateToProps = (state,props)=>{
    return {
        todo: state.todo_list
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return {
        addTodo: function (item) {
            //dispatch 把数据传递给store 由store中的reduce进行处理
            dispatch({
                type:"ADD_TODO_LIST",
                payload:item
            })
        }
    }

    
}
const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoUI)

export default TodoList
