import fs from 'node:fs'

export const handleAdd = (description, dataFile) => {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
    const now = new Date()

    const task = {
        id: data.length + 1,
        description: description.trim(),
        status: "todo",
        createdAt: now.toLocaleDateString(),
        updatedAt: now.toLocaleDateString(),
    }

    data.push(task)
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
    console.debug(`task successfully added (ID: ${task.id})`)
}