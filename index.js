
const fs = require('fs')
const kode_daerah_file = './first_part.json'
// const daerah_registrasi_file = './third_part.json'
// const tipe_kendaraan_file = './second_part.json'

var kode_daerah = JSON.parse(fs.readFileSync(kode_daerah_file, 'utf-8'))
// var daerah_registrasi = fs.readFileSync(daerah_registrasi_file, 'utf-8')
// var tipe_kendaraan = fs.readFileSync(tipe_kendaraan_file, 'utf-8')

function cek_digit (data, target, opt) {  
  let found = data.filter( d => d.kode_daerah == target)
  return found[0][opt]
}

function nopol_parse (plate_number) {
  let plate_arr = plate_number.split('')
  let rgx = /\d+/  
  let plate_match = plate_number.match(rgx)
  let number_length = plate_match[0].length  
  let kode_daerah_plat = plate_arr.slice(0, plate_match.index).join('')
  let huruf_belakang = plate_arr.slice(plate_match.index + number_length)

  return {
    kode_daerah: cek_digit(kode_daerah, kode_daerah_plat, "nama_daerah"),
    // daerah_registrasi: cek_digit(daerah_registrasi, huruf_belakang[0]),
    // tipe_kendaraan: cek_digit(tipe_kendaraan, huruf_belakang[1]),    
  }
}

module.exports = nopol_parse
