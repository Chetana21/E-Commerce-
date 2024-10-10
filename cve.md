# CVE-2024-43788: DOM Clobbering Vulnerability in Rollup

## Severity
- **Severity Level**: High (CVSS v4: /10)
- **Exploitability Metrics**:
  - **Attack Vector**: Network
  - **Attack Complexity**: High
  - **Attack Requirements**: None
  - **Privileges Required**: None
  - **User Interaction**: None

## Vulnerable System Impact Metrics
- **Confidentiality**: Low
- **Integrity**: Low
- **Availability**: High

## Summary
A DOM Clobbering vulnerability has been discovered in Rollup when bundling scripts that utilize `import.meta.url` or with plugins that emit and reference asset files in CJS/UMD/IIFE formats. This vulnerability can lead to cross-site scripting (XSS) attacks in web pages containing scriptless attacker-controlled HTML elements.

## Details

### Background
DOM Clobbering is a type of code-reuse attack where an attacker embeds benign HTML markup on a webpage. This can lead to the execution of malicious scripts by leveraging existing JavaScript code. 

For more information, refer to:
- [Research Paper on DOM Clobbering](https://scnps.co/papers/sp23_domclob.pdf)
- [Securitum Research on XSS](https://research.securitum.com/xss-in-amp4email-dom-clobbering/)

### Vulnerability Description
The vulnerability is present in Rollup bundled scripts, especially when using `import.meta` with specific output formats. The `document.currentScript` lookup can be shadowed by an attacker, allowing them to manipulate the script element and potentially load malicious scripts.

**References**:
- [Rollup Code Reference 1](https://github.com/rollup/rollup/blob/b86ffd776cfa906573d36c3f019316d02445d9ef/src/ast/nodes/MetaProperty.ts#L157-L162)
- [Rollup Code Reference 2](https://github.com/rollup/rollup/blob/b86ffd776cfa906573d36c3f019316d02445d9ef/src/ast/nodes/MetaProperty.ts#L180-L185)

### Proof of Concept (PoC)
```javascript
var s = document.createElement('script');
s.src = import.meta.url + 'extra.js';
document.head.append(s);
