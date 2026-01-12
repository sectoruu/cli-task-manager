import fs from 'node:fs'

export const handleList = (sortArg, dataFile) => {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
    
    if (data.length === 0) console.log("There is no tasks")

    switch (sortArg) {
        case undefined:
            data.forEach(({id, description, status, createdAt, updatedAt}) => console.log(`(ID: ${id}) "${description}" [${status}] (Created: ${createdAt}, Updated: ${updatedAt})`))
            break
        case "todo":
            data.forEach(({id, description, status, createdAt, updatedAt}) => {
                if (status === "todo") {
                    console.log(`(ID: ${id}) "${description}" [${status}] (Created: ${createdAt}, Updated: ${updatedAt})`)
                }
            })
            break
        case "in-progress":
            data.forEach(({id, description, status, createdAt, updatedAt}) => {
                if (status === "in-progress") {
                    console.log(`(ID: ${id}) "${description}" [${status}] (Created: ${createdAt}, Updated: ${updatedAt})`)
                }
            })
            break
        case "done":
            data.forEach(({id, description, status, createdAt, updatedAt}) => {
                if (status === "done") {
                    console.log(`(ID: ${id}) "${description}" [${status}] (Created: ${createdAt}, Updated: ${updatedAt})`)
                }
            })
            break
        default: 
            console.debug("argument does not exist")
            break
    }
    
}