export function isExternals(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
