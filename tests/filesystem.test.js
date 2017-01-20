const { expect } = require('chai')
const Filesystem = require('../bin/classes/Filesystem')

describe('Filesystem Class', () => {
  let fsInstance

  it('should init', () => {
    fsInstance = new Filesystem()
    expect(fsInstance).to.exist
  })

  it('should throw an error if invalid data is passed to costructor', () => {
    expect(() => new Filesystem(123)).to.throw(Error)
    expect(() => new Filesystem("123")).to.throw(Error)
    expect(() => new Filesystem([])).to.throw(Error)
    expect(() => new Filesystem(() => {})).to.throw(Error)
  })

  it('should have built the virtual fs', () => {
    expect(fsInstance.FileSystem).to.exist
  })

  it('should create a custom filesystem when passed in costructor', () => {
    const mock_fs = { file: 123, dir: { file2: 456 }}
    const fsIntance2 = new Filesystem(mock_fs)
    expect(fsIntance2).to.exist
    expect(fsIntance2.FileSystem.file.content).to.exist.and.to.equal(123)
    expect(fsIntance2.FileSystem.dir.content).to.exist.and.to.be.a('object')
  })

})
