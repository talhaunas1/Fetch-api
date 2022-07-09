export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";



export const addItem = (todo) => {
    return {
        type: ADD_ITEM,
        payload: todo
    }
}

export const deleteItem = (id, todos) => {
    console.log("DELTE ACTION");
    let newTodos = todos.filter(item => item.id !== id)
    return {
        type: DELETE_ITEM,
        payload: newTodos
    }
}