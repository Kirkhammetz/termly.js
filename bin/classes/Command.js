/**
 * Command Class
 * @param name [String], fn [Function]
 *
 * don't pass arrow function if you want to use this inside your command function to access various shared shell object
 */
class Command {
  constructor({ name, fn, type, references} = {}){
    if (typeof name !== 'string') throw Error('Command name must be a string')
    if (typeof fn !== 'function') throw Error('Command function must be... a function')

    /**
     * use whole function instead of arrow if you want to access
     * circular reference of Command
     */
    this.fn = fn.bind(this)
    this.name = name

    /**
     * Set Circular Reference Here in the future
     */
    if (Array.isArray(references)) {
      console.log("Attaching circular references")
    }
  }

  /**
   * Command Executor
   */
  exec(args = []) {
    if (!Array.isArray(args)) throw Error('Command exec args must be in an array')
    if (args.length) return this.fn(...args)
    return this.fn()
  }
}

module.exports = Command
