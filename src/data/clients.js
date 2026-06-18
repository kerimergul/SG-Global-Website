// Referans firma logoları — src/assets/clients klasöründen otomatik içe aktarılır
const modules = import.meta.glob('../assets/clients/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
})

// Dosya adından okunabilir firma adı üretir
function prettify(path) {
  const file = path.split('/').pop().replace(/\.(png|jpe?g|svg)$/i, '')
  return file
    .replace(/[_-]+/g, ' ')
    .replace(/\blogo\b/gi, '')
    .replace(/\d+/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export const clients = Object.entries(modules)
  .map(([path, src]) => ({ src, name: prettify(path) }))
  .sort((a, b) => a.name.localeCompare(b.name, 'tr'))
