#!/usr/bin/env node

import * as secp256k1 from 'tiny-secp256k1'

// const bufs = Array(1000).fill(undefined).map(() => crypto.randomBytes(32))

function hexStringToBuffer(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))
}

function bufferToHex(buffer) {
  return Array.from(buffer)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

function compressPublicKey(uncompressedPubKey) {
  // Ensure the uncompressed public key starts with '04'
  if (!uncompressedPubKey.startsWith('04')) {
    throw new Error('Invalid uncompressed public key format')
  }

  // Extract the x and y coordinates from the uncompressed public key
  const x = uncompressedPubKey.substring(2, 66) // Next 64 chars after '04'
  const y = uncompressedPubKey.substring(66) // The rest is the y-coordinate

  // Determine the prefix: '02' for even y values, '03' for odd
  // We can check the last character of the y-coordinate in hexadecimal
  // If it's an even number or letter (0, 2, 4, 6, 8, a, c, e), y is even
  // If it's an odd number or letter (1, 3, 5, 7, 9, b, d, f), y is odd
  const prefix = parseInt(y[y.length - 1], 16) % 2 === 0 ? '02' : '03'

  // Construct the compressed public key
  const compressedPubKey = prefix + x

  return compressedPubKey
}

// for (const buf of bufs) {
//   const input = bufferToHex(buf)
//   const ret = getPubkey(input)
//   // console.log(ret)
//   // const pub = secp256k1.pointFromScalar(buf, false)
//   // const hex = bufferToHex(pub)
//   // console.log(hex)
//   // console.log(compressPublicKey(hex))
// }

function getPubkey(hex) {
  const arr = hexStringToBuffer(hex)
  const pub = secp256k1.pointFromScalar(arr, false)
  const ret = bufferToHex(pub)
  // console.log(ret)
  // console.log(compressPublicKey(ret))
  return ret
}

export { getPubkey, compressPublicKey }
