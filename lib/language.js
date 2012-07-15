
VNF.Language = (function() {
    var lang = {};
    
    return {
        set: function(key, value){
            lang[key] = value;
        },
        get: function(key){
            if (typeof lang[key] != 'undefined') {
                return lang[key];
            }
            return key;
        },
        addMulti: function(langs){
            for (var key in langs) {
                lang[key] = langs[key];
            }
        }
    };
})();

