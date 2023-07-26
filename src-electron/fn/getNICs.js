import macaddress from 'macaddress'

export default function () {
  return new Promise(function (resolve, reject) {
    macaddress.all((err, mac) => {
      if (err) {
        reject(err)
      }
      let nics = []
      for (let nic in mac) {
        if (mac[nic].ipv4) {
          nics.push(mac[nic])
        }
      }
      resolve(nics)
    })
  })
}
