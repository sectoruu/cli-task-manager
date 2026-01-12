import fs from 'node:fs'
import { validateId } from '../utils/validateId.js'

export const handleUpdate = (id, newDescription, dataFile) => {

    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))

    if (newDescription == undefined) {
        console.log("You need to specify new description")
        return
    }
    
    if (validateId(id, data) === -1) return

    data.forEach(task => {
        if (task.id === +id) {
            task.description = newDescription
            task.updatedAt = new Date().toLocaleDateString()
        }
    })

    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
    console.debug(`task (ID: ${id}) successfully updated`)
}