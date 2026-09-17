const slugify = require("slugify");

function criarSlug(titulo) {
  return slugify(titulo, { lower: true });
}

module.exports = { criarSlug };
