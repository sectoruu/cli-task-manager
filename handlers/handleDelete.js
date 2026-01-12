import fs from 'node:fs'
import { validateId } from '../utils/validateId.js'

export const handleDelete = (id, dataFile) => {

    if (id === undefined) {
        console.log("You need to specify the task id")
        return
    }

    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))

    if (validateId(id, data) === -1) return

    data.splice(data.indexOf(data.find(task => task.id === +id)), 1)

    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
    console.debug(`task (ID: ${id}) deleted successfully`)
}