(function(root){
    var FIX = function(options){
        return new FIX.add.config(options);
    }
    FIX.prototype = FIX.add = {
        translateToJSON : function(data){
            var arr = data.split(this.options.delimitter),
                l = arr.length,
                i = 0,
                json = {},
                ref = this.options.version;
            for( ; i<l ; i++){
                var item = arr[i].split('=');
                if(item[0] != ''){
                    json[this.version[ref][item[0]]] = item[1];
                }
            }
            return json;
        },
        swap:null,
        translateJSONToFIX:function(json){
            if(this.swap === null){
              this.swap = {}
              var orig = this.version[this.options.version];
              for (var x in orig) {
                this.swap[orig[x]] = x;
              }
            }
            var str = '', x2;
            for(x2 in json){
              str += (this.swap[x2] + '=' + json[x2] + this.options.delimitter);
            }
            return str.slice(0,-1);
        },
        toJSON : function(data){
            var arr = data.split(this.options.delimitter),
                l = arr.length,
                i = 0,
                json = {},
                ref = this.options.version;
            for( ; i<l ; i++){
                var item = arr[i].split('=');
                if(item[0] != ''){
                  json[item[0]] = item[1];
                }
            }
            return json;
        },
        parse:function(data){
          return this.toJSON(data);
        },
        toURI:function(data){
           var url = '', data = this.toJSON(data);
           for (var prop in data) {
              url += encodeURIComponent(prop) + '=' +
                  encodeURIComponent(data[prop]) + '&';
           }
           return url.substring(0, url.length - 1)
        },
        toJSONString:function(data){
            return JSON.stringify(this.toJSON(data))
        },
        JSONtoFIX:function(data){
            var x, str = '';
            for(x in data){
                str += ( x + '=' + data[x] + this.options.delimitter );
            }
            return str.slice(0,-1);
        },
        version:{}
    }
    var config = FIX.add.config = function(options){
            this.options = options;
            this.options.delimitter = this.options.delimitter || new String('\x01');
            this.options.version = this.options.version || '4.4';
    }
    config.prototype = FIX.add;

    if (typeof define === 'function' && define.amd) {
        define([], function() {
          return FIX;
        });
        root.FIX = FIX;
    }
    else if(typeof module === "object" && typeof exports === "object") {
        module.exports = FIX;
    }
    else { root.FIX = FIX; }
})(this);