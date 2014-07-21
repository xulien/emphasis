"use strict";

exports.regex = function(string) {
        return string.toLowerCase()
            .replace(/œ/g, "oe")
            .replace(/ç/g, "(c|ç)")
            .replace(/[uùûü]/g, "(u|ù|û|ü)")
            .replace(/[iîï]/g, "(i|î|ï)")
            .replace(/[aàâä]/g, "(a|à|â|ä)")
            .replace(/[oôö]/g, "(o|ô|ö)")
            .replace(/[eéèêë]/g, "(e|é|è|ê|ë)")
            .replace(/ /g, "\\s");
    };

exports.normalize = function(string) {
        return string.toLowerCase()
            .replace(/[ùûü]/g, "u")
            .replace(/[îï]/g, "i")
            .replace(/[àâä]/g, "a")
            .replace(/[ôö]/g, "o")
            .replace(/œ/g, "oe")
            .replace(/[éèêë]/g, "e")
            .replace(/ç/g, "c")
            .replace(/[’',!?&%@«»"\/()]/g, "-")
            .replace(/ /g, "-")
            .replace(/-+/g, "-");
    };
