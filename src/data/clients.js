// Referans firma logoları — Bunny CDN üzerinden sunulur
// Yeni logo eklemek için: dosyayı CDN'deki "referans/" klasörüne yükleyip
// aşağıdaki listeye dosya adını eklemeniz yeterlidir.
const CDN_BASE = 'https://sgglobal-cdn.b-cdn.net/referans/'

const files = [
  'MetalOto.png',
  'a101.png',
  'acibadem-uni.jpg',
  'acibadem.png',
  'altinyildiz.png',
  'arbys.png',
  'arnetta.png',
  'beymen.jpg',
  'bigchefs.png',
  'bilkay.png',
  'billur-tuz.png',
  'bingo_logo2.png',
  'boyner.png',
  'btl.png',
  'burgerking.png',
  'dilekeczadeposu.jpg',
  'divarese.jpg',
  'dostel.png',
  'easy_travel.png',
  'enterprise.jpg',
  'fora_zeytin.png',
  'graniser.png',
  'gurbaslar.png',
  'gündüz_nakis.png',
  'hayat.jpg',
  'holiday-club-kemer.png',
  'indorama.png',
  'innova.png',
  'innvista.png',
  'maya_itc.png',
  'memorial.png',
  'mfa.png',
  'molfix_logo.jpg',
  'molped.jpg',
  'morhipo.png',
  'netpak.png',
  'network.jpg',
  'omelektrik.png',
  'papia_logo.png',
  'popeyes.png',
  'radison.png',
  'reyap.png',
  'roly_poly.png',
  'safa_hastaneleri.png',
  'saglikligida.png',
  'sarbel.png',
  'tab.png',
  'ulusoy.png',
  'usta donerci.png',
  'yilmazulusoy.png',
]

// Dosya adından okunabilir firma adı üretir
function prettify(file) {
  return file
    .replace(/\.(png|jpe?g|svg)$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\blogo\b/gi, '')
    .replace(/\d+/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export const clients = files
  .map((file) => ({
    // Boşluk/Türkçe karakter içeren adlar için URL-encode (yol ayıracı korunur)
    src: CDN_BASE + encodeURIComponent(file),
    name: prettify(file),
  }))
  .sort((a, b) => a.name.localeCompare(b.name, 'tr'))
