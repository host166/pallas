import Switch from './Switch'


function init (...components) {
  const com = {}
  components.forEach(c => {
    Object.keys(c).forEach(key => {
      com[`P${key}`] = c[key]
    })
  })

  return com
}

export default init(
  Switch
)
