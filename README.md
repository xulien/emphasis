# Emphasis

Small function that normalizes a string which does not contain either for emphasis, spaces or special character.

## Usage:

```javascript

var norm = require('emphasis').normalize;

var naturalId = norm("Asperges blanches sauce printanière, Pâté de Pâques");
// asperges-blanches-sauce-printaniere-pate-de-paques

var regex = require('emphasis').regex;

var naturalId = norm("Asperges blanches sauce printanière, Pâté de Pâques");
// (a|à|â|ä)sp(e|é|è|ê|ë)rg(e|é|è|ê|ë)s\sbl(a|à|â|ä)nch(e|é|è|ê|ë)s\ss(a|à|â|ä)(u|ù|û|ü)c(e|é|è|ê|ë)\spr(i|î|ï)nt(a|à|â|ä)n(i|î|ï)(e|é|è|ê|ë)r(e|é|è|ê|ë),\sp(a|à|â|ä)t(e|é|è|ê|ë)\sd(e|é|è|ê|ë)\sp(a|à|â|ä)q(u|ù|û|ü)(e|é|è|ê|ë)s

```