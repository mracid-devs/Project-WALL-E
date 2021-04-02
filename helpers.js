
function successfullMessage(msg) {
    return "✅ *WALL - E*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *WALL -E*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *WALL - E*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
