import fs from 'node:fs'

export const checkFileExistence = (filePath) => {

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "[]")
        console.debug('"tasks.json" created successfully...')
    }

}