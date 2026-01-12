import { handleAdd } from "./handlers/handleAdd.js"
import { handleUpdate } from "./handlers/handleUpdate.js"
import { handleDelete } from "./handlers/handleDelete.js"
import { handleMarkInProgress } from "./handlers/handleMarkInProgress.js"
import { handleMarkDone } from "./handlers/handleMarkDone.js"
import { handleMarkTodo } from "./handlers/handleMarkTodo.js"
import { handleList } from "./handlers/handleList.js"
import { logHelp } from "./utils/logHelp.js"

export const router = (args, dataFile) => {

    switch (args[0]) {
        case "add": 
            handleAdd(args[1], dataFile)
            break
        case "update": 
            handleUpdate(args[1], args[2], dataFile)
            break
        case "delete": 
            handleDelete(args[1], dataFile)
            break
        case "mark-in-progress": 
            handleMarkInProgress(args[1], dataFile)
            break
        case "mark-done": 
            handleMarkDone(args[1], dataFile)
            break
        case "mark-todo": 
            handleMarkTodo(args[1], dataFile)
            break
        case "list": 
            handleList(args[1], dataFile)
            break
        case "-h":
            logHelp()
            break
        default: break
    }

}