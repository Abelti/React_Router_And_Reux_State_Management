export const addTodo = (text) => ({
    type: "ADD_TODO",
    payload: {
        id: new Date().getTime(),
        text,
        completed: false
    }
})

export const strikeTodo = (id) => ({
    type: "STRIKE_TODO",
    payload: id
})

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id
})