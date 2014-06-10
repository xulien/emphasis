module.exports = function(string) {
	return string.toLowerCase()
		.replace(/[ùûü]/g, "u")
		.replace(/[îï]/g, "i")
		.replace(/[îï]/g, "i")
		.replace(/[àâä]/g, "a")
		.replace(/[ôö]/g, "o")
		.replace(/œ/g, "oe")
		.replace(/[éèêë]/g, "e")
		.replace(/ç/g, "c")
		.replace(/[’',&%@«»"\/()]/g, "-")
		.replace(/ /g, "-")
		.replace(/-+/g, "-");
}
