import { c } from "./colors.js"

export const logHelp = () => {
    console.log(
`
${c.bold}${c.cyan}task-cli${c.reset} - simple task manager

${c.bold}USAGE:${c.reset}
    task-cli ${c.green}<command>${c.reset} [options]

${c.bold}COMMANDS:${c.reset}
    ${c.green}add${c.reset} <text>              Add a new task
    ${c.green}update${c.reset} <id> <text>      Update task
    ${c.green}delete${c.reset} <id>             Delete task
    ${c.green}list${c.reset} [status]           List tasks (Can be filtered)
    ${c.green}mark-in-progress${c.reset} <id>   Mark task as in-progress
    ${c.green}mark-done${c.reset} <id>          Mark task as done
    ${c.green}mark-todo${c.reset} <id>          Mark task as todo

${c.bold}OPTIONS:${c.reset}
    ${c.yellow}-h, --help${c.reset}             Show this help message

${c.dim}Examples:${c.reset}
    task-cli add "Hit the gym"
    task-cli list
    task-cli list done
    task-cli update 4 "Hang out with friends"`)
}