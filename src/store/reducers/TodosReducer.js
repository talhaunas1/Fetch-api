import { ADD_ITEM, DELETE_ITEM } from "../actions/TodosAction";


const initialState = {
    todos : [
        {todo: "drink water", id: 1},
        {todo: "go for a walk", id: 2},
    ]
}


export default function TodosReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {

            let newTodo = action.payload
            console.log("new todo", newTodo);

            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        }
        case DELETE_ITEM: {


            console.log("DELETE REDUCER");
            let newTodos = action.payload
            console.log("new todos", newTodos)
            
            return {
                ...state,
                todos: newTodos 
            }

        }

        default: {
            return {
                state
            }
        }

        
    }
}