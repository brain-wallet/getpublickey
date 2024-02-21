#!/usr/bin/env node

import { getPubkey, compressPublicKey } from '../index.js'

const input = process.argv[2] || 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb'

const ret = getPubkey(input)
console.log(ret)
