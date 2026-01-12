export const validateId = (id, data) => {
    if (Number.isNaN(+id)) {
        console.error("argument must be a number")
        return -1
    } else if (data.find(task => task.id === +id) === undefined) {
        console.error(`task with ID: ${id} not found`)
        return -1
    }
}