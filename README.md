<div align="center">  
  <h1>getpublickey</h1>
</div>

<div align="center">  
<i>getpublickey</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brain-wallet/getpublickey/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/getpublickey)](https://npmjs.com/package/getpublickey)
[![npm](https://img.shields.io/npm/dw/getpublickey.svg)](https://npmjs.com/package/getpublickey)
[![Github Stars](https://img.shields.io/github/stars/brain-wallet/getpublickey.svg)](https://github.com/brain-wallet/getpublickey/)

# Public Key Generator

**Public Key Generator** is a web-based tool developed in JavaScript that assists users in converting a private key, provided in hexadecimal format, into its corresponding public key. This utility is particularly useful in cryptographic operations and blockchain technologies where such conversions are often required.

## Overview

Utilizing the [`nostr-tools`](https://esm.sh/nostr-tools) package, this tool performs a straightforward conversion from a private key (in hex format) to a public key. The conversion is executed in a user-friendly, web-based interface, offering real-time results as users input their private key.

## Usage

The application is incredibly user-friendly and straightforward to use:

1. Navigate to the web page hosting the public key generator.
2. Input your private key (in hexadecimal format) into the provided field.
3. The corresponding public key is instantly generated and displayed below the input field.

## Demo

For a practical demonstration and utilization of the Public Key Generator, you can explore the `main.html` file in the repository. This HTML file offers an interactive and user-friendly web interface that enables you to input a private key and instantaneously view the respective public key.

To try it out:

- Clone the repository or visit [the demo page](https://brain-wallet.github.io/getpublickey/).
- If cloned, open `main.html` in your preferred browser.
- Input your private key in hex format.
- The public key will be generated and displayed immediately below the input field.

### Example Usage:

Simply enter a private key:

```plaintext
e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35
```

And instantly obtain the corresponding public key.

## Dependencies

- [nostr-tools](https://esm.sh/nostr-tools) from esm

## Contributing

Contributions to enhance or fix the Public Key Generator are warmly welcomed! Feel free to initiate a pull request or open an issue to discuss potential improvements or fixes.

## License

This project is licensed under the [MIT License](LICENSE).

### Acknowledgements

Special thanks to the developers of the [`nostr-tools`](https://esm.sh/nostr-tools) package for providing the essential functionality used in this tool.

Feel free to explore the code, try out the tool, and contribute to its ongoing development!

[**View Source Code**](https://github.com/brain-wallet/getpublickey)
