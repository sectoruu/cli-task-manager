import fs from 'node:fs'
import { validateId } from '../utils/validateId.js'

export const handleMarkInProgress = (id, dataFile) => {

    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
    
    if (validateId(id, data) === -1) return

    data.forEach(task => {
        if (task.id === +id) {
            task.status = "in-progress"
        }
    })

    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
    console.debug(`task (ID: ${id}) successfully marked as in-progress`)
}