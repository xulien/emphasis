'use strict'

module.exports = uri => uri
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['`’.#$]/g, '-')
    .replace(/[.#$()«»?!\/\[\]^|]/g, '')
    .replace(/œ/g, 'oe')
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/-{2,}/g, '')
