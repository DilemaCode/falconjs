var  dilema = function(){};
dilema.parent = dilema.last = document.body; 
dilema.parentUp = function(){
    dilema.setParent(dilema.parent.parentElement);
}

var html = function (st, ...keys) {
    str = "";
    st.forEach(function(s, i) {
        str += s + (keys.length > i ? keys[i]:"");
    }, this);
     return { htmlTemplate: true, content: str} 
};

/**
 * @param {string} elementTag
 * @param {string} className
 */

dilema.addDefaultClass = dilema.setDefaultClass = function(elementTag, className){
    dilema[elementTag].defaultStyle = Array.isArray(className) ? className : [className];
}
/**
 * @param {string} selector
 * @param {CSSStyleDeclaration} style
 * @param {HTMLElement} parent
 */
dilema.setStyle = dilema.addStyle = function (selector, style, parent = document.head){
    var _elm = document.createElement("div");
    Object.assign(_elm.style, style);
    var stl = document.createElement("style");

    if(typeof selector == "string"){
        stl.innerHTML = selector + " { " + _elm.getAttribute("style") + " }";
    }else {
        Object.keys(style).forEach(function (key) {
            selector.style[key] = style[key];
        });
    }

    parent.appendChild(stl);
};

/**
 * @param {string} url
 * @param {function(string, XMLHttpRequest)} onload
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {SVGElement}
 */
dilema.loadSVG = function(url, onload, style, parent = dilema.parent || document.body) {
    var _container = document.createElement("div");
    var _elm = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.setRequestHeader("Content-type", "image/svg+xml");
    xhr.onload = function (d) {
        if (_container) {
            _container.innerHTML = xhr.responseText;
            var frs = document.querySelectorAll("flowroot");
            Array.from(frs).forEach(function (el) {
                var fo = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
                var _rect = el.firstElementChild.firstElementChild;
                fo.setAttribute("x", _rect.getAttribute("x"));
                fo.setAttribute("y", _rect.getAttribute("y"));
                fo.setAttribute("width", _rect.getAttribute("width"));
                fo.setAttribute("height", _rect.getAttribute("height"));
                var divContainer = document.createElementNS("http://www.w3.org/1999/xhtml", "div");

                Array.from(el.children).slice(1).forEach(function (paraphs) {
                    var _div = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                    _div.innerHTML = paraphs.textContent || "&nbsp;";
                    divContainer.appendChild(_div);
                }, this);
                fo.appendChild(divContainer);
                divContainer.style.height = "100%";
                divContainer.style.overflowY = "auto";
                el.parentElement.appendChild(fo);

            }, this);
            var _svgTemp = _container.firstElementChild;
            _elm.innerHTML = _svgTemp.innerHTML;
            _elm.setAttribute("width", _svgTemp.getAttribute("width"));
            _elm.setAttribute("height", _svgTemp.getAttribute("height"));
            _elm.setAttribute("viewBdilema", _svgTemp.getAttribute("viewBdilema"));
        }
        if (onload)
            onload(xhr.responseText, xhr);
    };
    xhr.send();

    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.svg.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
}

/**
 * @param {HTMLElement} selector
 * @param {string} className
 */
dilema.setClass = dilema.addClass = function (selector, className){
    selector.classList.add(className);
};

String.prototype.blink = function () {
    var str;
    
    if (typeof Lang == "undefined"){
        var Lang = {};
    }

    if (Lang && Lang.language && Lang[Lang.language])
        str = Lang[Lang.language][this];
    return str || this;
}

/**
 * @param {string} selector
 * @return {[HTMLElement]}
 */
dilema.$ = function(selector){
    return Array.from(document.querySelectorAll(selector));
} 

/**
 * @param {HTMLFormElement} form
 * @param {function(string, XMLHttpRequest)} callback
 */
dilema.formSubmit = function (form, callback) {
    var url = form.action;
    var xhr = new XMLHttpRequest();
    var data = {};
    Array.from(form.elements).forEach(function(el) {
        data[el.name] = el.value;
    }, this);
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function(d){callback(xhr.responseText, xhr)}; 
    xhr.send(JSON.stringify(data));
}

/**
 * @param {string} url
 * @param {object} data
 * @param {function(string, XMLHttpRequest)} callback
 */
dilema.post = function (url, data = {}, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function (d) { callback(xhr.responseText, xhr) };
    if (typeof data == "string")
        xhr.send(data);
    else
        xhr.send(JSON.stringify(data));
}

/**
 * @param {string} url
 * @param {object} data
 * @param {function(string, XMLHttpRequest)} callback
 */
dilema.put = function (url, data = {}, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("put", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function (d) { callback(xhr.responseText, xhr) };
    if (typeof data == "string")
        xhr.send(data);
    else
        xhr.send(JSON.stringify(data));
}

/**
 * @param {string} url
 * @param {object} data
 * @param {function(string, XMLHttpRequest)} callback
 */
dilema.patch = function (url, data = {}, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("patch", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function (d) { callback(xhr.responseText, xhr) };
    if (typeof data == "string")
        xhr.send(data);
    else
        xhr.send(JSON.stringify(data));
}

/**
 * @param {string} url
 * @param {function(string, XMLHttpRequest)} callback
 */
dilema.get = function (url, data = {}, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function (d) { callback(xhr.responseText, xhr) };
    xhr.send(data);
}


/**
 * @param {String} elements
 * @param {HTMLElement} parent
 */

dilema.emmet = function (elements, parent = dilema.parent){
    elements = elements.split('>');
    myElements = {};

    dilema.setParent(parent);

    function _emmetPoint(element){
        let _simbols = [".", "{", "[", "("];

        for (let _i = 0; _i < _simbols.length; _i++) {
            if (element.indexOf(_simbols[_i]) >= 0) {
                return element.indexOf(_simbols[_i]);
            }
        }
    }

    function _assignClass(element, _el, _tag){
        let _keyLlave = element.indexOf('{');
        let _keyC = element.indexOf('[');
        let _keyP = element.indexOf('(');

        let _classList = element.substring(element.indexOf('.'));

        if (_keyLlave >= 0) {
            _classList = _classList.substring(0, _keyLlave - _tag.length);
        }

        if (_keyC >= 0) {
            _classList = _classList.substring(0, _keyC - _tag.length);
        }

        _classList.split('.').forEach(_className => {
            if (_className != "") {
                _el.classList.add(_className);
            }
        });

        return _el;
    }

    function _assignContent(element, _el){
        let _keyLlave = element.indexOf('{');
        _el.innerText = element.substring(_keyLlave + 1, element.indexOf('}'));
    }

    function _assignAttr(element, _el){
        let _keyC = element.indexOf('[');
        
        let _attrs = element.substring(_keyC + 1, element.indexOf(']')).split(',')

        _attrs.forEach(_attr => {
            let _key = _attr.substring(0, _attr.indexOf('='));
            _el[_key] = _attr.substring(_attr.indexOf('=') + 2, _attr.length - 1)
        });
    }

    elements.forEach(function(element, i) {
        let _point = element.length;
        let _keyPoint = element.indexOf('.');
        let _keyLlave = element.indexOf('{');
        let _keyC = element.indexOf('[');
        let _keyP = element.indexOf('(');
        let _keyP2 = element.lastIndexOf('(');

        let _simbols = [".", "{", "[", "("];
        
        for(let _i = 0; _i < _simbols.length; _i++){
            if(element.indexOf(_simbols[_i]) >= 0 ){
                _point = element.indexOf(_simbols[_i]);
                break;
            }
        }
        
        if (_keyP2 >= 0 && _keyP2 != _keyP){
            console.log('Estoy aqui');
            myElements[i] = {};            
            let _els = element.split(')');

            _els.forEach((_e, _i) => {
                let _et = _e.substring(_e.indexOf("(") >= 0 ? 1 : 0, _emmetPoint(_e));

                let _kPoint = _e.indexOf('.');
                let _kLlave = _e.indexOf('{');
                let _kC = _e.indexOf('[');
                let _ee = dilema[_et](); 

                if(_kPoint >= 0){
                    _assignClass(_e, _ee, _et);
                }

                if(_kLlave >= 0){
                    _assignContent(_e, _ee, _et)
                }

                if(_kC >= 0){
                    _assignAttr(_e, _ee, _et);
                }

                myElements[i][_i] = _ee;
            });
        }else {
            console.log(element);
            
            let _tag = _keyP >= 0 ? element.substring(1, _point) : element.substring(0, _point);
            let _el = dilema[_tag]();
            
            dilema.setParent(_el);

            if (_keyPoint >= 0) {
                _el = _assignClass(element, _el, _tag);
            
            }
    
            if (_keyLlave >= 0) {
                _el.innerText = element.substring(_keyLlave +1, element.indexOf('}'));
            }
    
            if(_keyC >= 0){
                let _attrs = element.substring(_keyC + 1, element.indexOf(']')).split(',')
                
                _attrs.forEach(_attr => {
                    let _key = _attr.substring(0, _attr.indexOf('='));
                    _el[_key] = _attr.substring(_attr.indexOf('=') +2, _attr.length -1)
                });
            }

            myElements[i] = _el;
        }

    });
    return myElements; 
}




/**
 * @param {string} url
 * @param {function(object)} callback
 */
dilema.getJSON = function (url, data = {}, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function (d) { callback(JSON.parse(xhr.responseText)) };
    xhr.send(data);
}


/**
 * @param {HTMLElement} parent
 */
dilema.setParent = function (parent){
    dilema.parent = parent;
};
var z__private = function(){};

z__private._replaceClass_list = {};

z__private._replaceClass = function(cl){
    var rcl = z__private._replaceClass_list[cl];
    return rcl? Array.isArray(rcl) ? rcl : [rcl] : [cl];
};

/**
 * @param {string} searchClass
 * @param {string | [string]} replaceClass
 */
dilema.replaceClass = function(searchClass, replaceClass){
    z__private._replaceClass_list[searchClass] = replaceClass;
};

z__private.stl = function(style, _elm){

    if(dilema[_elm.tagName.toLowerCase()].defaultStyle){
        if(Array.isArray(style)){
            style = style.concat(ox[_elm.tagName.toLowerCase()].defaultStyle);
        }else{
            style = [style].concat(ox[_elm.tagName.toLowerCase()].defaultStyle);
        }
    }
    if(typeof style == "string"){
        if(style == "") return;
        style.split(" ").forEach(_style => {
            if (style[0] == '#') {
                _elm.id = style.substr(1);
            } else {
                if (style[0] == ".")
                    _elm.classList.add(...z__private._replaceClass(style.substr(1)));
                else
                    _elm.classList.add(...z__private._replaceClass(style));
            }
        });
    }else
    if(Array.isArray(style)){
        style.forEach(function(stly) {
            if(typeof stly == "string"){
                stls = stly.split(" ");

                stls.forEach(stl => {
                    if(stl == "") return;
    
                    if(stl[0] == '#'){
                        _elm.id = stl.substr(1);
                    }else{
                        if(stl[0] == ".")
                            _elm.classList.add(...z__private._replaceClass(stl.substr(1)));
                        else
                            _elm.classList.add(...z__private._replaceClass(stl));
                    }
                });
            }else{
                Object.assign(_elm.style, stly);
            }
        }, this);
    }else{
        Object.assign(_elm.style, style);
    }
}

/**
 * @param {string} dataProperty
 * @param {function} cb
 */
dilema.addLink = dilema.setLink = function(dataProperty, cb) {
    if(!data["_" + dataProperty])
    data["_" + dataProperty] = data[dataProperty];
if (!data["_nodeList_" + dataProperty]) {
    data["_nodeList_" + dataProperty] = [cb];
    Object.defineProperty(data, dataProperty, {
        nodelist: !this.nodelist ? [cb] : nodelist.concat([cb]),
        configurable: true,
        get: function () { return data["_" + this[0]]; }.bind([dataProperty]),
        set: function (v) {
            data["_" + this[0]] = v;
            data["_nodeList_" + this[0]].forEach(function(_nodeToUpdate) {
                _nodeToUpdate(v);
            }, this);
        }.bind([dataProperty, this.nodelist])
    });
} else {
    data["_nodeList_" + dataProperty] = data["_nodeList_" + dataProperty].concat([cb]);
}
data[dataProperty] = data[dataProperty];
}


 /**
 * @param {string} textContent
 * @param {string} href
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLAnchorElement}
 */
dilema.a = function(textContent, href, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("a");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent = textContent.blink();}
                }   if(href){
                if(href.htmlTemplate == true){
                    _elm.innerHTML = href.content;

                }else{
                    _elm.href= href.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.a.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLAreaElement}
 */
dilema.area = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("area");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.area.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLAudioElement}
 */
dilema.audio = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("audio");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.audio.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLBaseElement}
 */
dilema.base = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("base");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.base.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLBaseFontElement}
 */
dilema.basefont = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("basefont");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.basefont.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLQuoteElement}
 */
dilema.blockquote = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("blockquote");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.blockquote.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLBodyElement}
 */
dilema.body = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("body");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.body.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLBRElement}
 */
dilema.br = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("br");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.br.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLButtonElement}
 */
dilema.button = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("button");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.button.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLCanvasElement}
 */
dilema.canvas = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("canvas");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.canvas.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableCaptionElement}
 */
dilema.caption = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("caption");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.caption.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableColElement}
 */
dilema.col = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("col");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.col.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableColElement}
 */
dilema.colgroup = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("colgroup");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.colgroup.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLDataElement}
 */
dilema.data = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("data");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.data.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLDataListElement}
 */
dilema.datalist = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("datalist");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.datalist.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLModElement}
 */
dilema.del = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("del");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.del.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLDirectoryElement}
 */
dilema.dir = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("dir");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.dir.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLDivElement}
 */
dilema.div = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("div");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.div.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLDListElement}
 */
dilema.dl = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("dl");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.dl.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLEmbedElement}
 */
dilema.embed = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("embed");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.embed.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLFieldSetElement}
 */
dilema.fieldset = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("fieldset");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.fieldset.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLFontElement}
 */
dilema.font = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("font");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.font.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLFormElement}
 */
dilema.form = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("form");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.form.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLFrameElement}
 */
dilema.frame = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("frame");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.frame.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLFrameSetElement}
 */
dilema.frameset = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("frameset");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.frameset.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLHeadingElement}
 */
dilema.h1 = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("h1");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.h1.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLHeadingElement}
 */
dilema.h2 = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("h2");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.h2.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLHeadingElement}
 */
dilema.h3 = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("h3");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.h3.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLHeadingElement}
 */
dilema.h4 = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("h4");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.h4.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLHeadingElement}
 */
dilema.h5 = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("h5");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.h5.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLHeadingElement}
 */
dilema.h6 = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("h6");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.h6.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLHRElement}
 */
dilema.hr = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("hr");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.hr.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} src
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLIFrameElement}
 */
dilema.iframe = function(src, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("iframe");
   if(src){
                if(src.htmlTemplate == true){
                    _elm.innerHTML = src.content;

                }else{
                    _elm.src= src.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.iframe.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} src
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLImageElement}
 */
dilema.img = function(src, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("img");
   if(src){
                if(src.htmlTemplate == true){
                    _elm.innerHTML = src.content;

                }else{
                    _elm.src= src.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.img.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} type
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLInputElement}
 */
dilema.input = function(type, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("input");
   if(type){
                if(type.htmlTemplate == true){
                    _elm.innerHTML = type.content;

                }else{
                    _elm.type= type.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.input.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLModElement}
 */
dilema.ins = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("ins");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.ins.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLUnknownElement}
 */
dilema.isindex = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("isindex");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.isindex.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLLabelElement}
 */
dilema.label = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("label");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.label.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLLegendElement}
 */
dilema.legend = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("legend");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.legend.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLLIElement}
 */
dilema.li = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("li");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.li.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLLinkElement}
 */
dilema.link = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("link");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.link.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLPreElement}
 */
dilema.listing = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("listing");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.listing.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLMapElement}
 */
dilema.map = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("map");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.map.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLMarqueeElement}
 */
dilema.marquee = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("marquee");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.marquee.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLMenuElement}
 */
dilema.menu = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("menu");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.menu.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLMetaElement}
 */
dilema.meta = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("meta");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.meta.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLMeterElement}
 */
dilema.meter = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("meter");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.meter.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLUnknownElement}
 */
dilema.nextid = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("nextid");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.nextid.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLObjectElement}
 */
dilema.object = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("object");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.object.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLOListElement}
 */
dilema.ol = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("ol");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.ol.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLOptGroupElement}
 */
dilema.optgroup = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("optgroup");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.optgroup.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLOptionElement}
 */
dilema.option = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("option");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.option.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLOutputElement}
 */
dilema.output = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("output");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.output.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLParagraphElement}
 */
dilema.p = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("p");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.p.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLParamElement}
 */
dilema.param = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("param");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.param.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLPictureElement}
 */
dilema.picture = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("picture");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.picture.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLPreElement}
 */
dilema.pre = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("pre");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.pre.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLProgressElement}
 */
dilema.progress = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("progress");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.progress.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLQuoteElement}
 */
dilema.q = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("q");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.q.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLScriptElement}
 */
dilema.script = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("script");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.script.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLSelectElement}
 */
dilema.select = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("select");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.select.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLSourceElement}
 */
dilema.source = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("source");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.source.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLSpanElement}
 */
dilema.span = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("span");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.span.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLSpanElement}
 */
dilema.small = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("small");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.small.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLStyleElement}
 */
dilema.style = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("style");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.style.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableElement}
 */
dilema.table = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("table");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.table.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableSectionElement}
 */
dilema.tbody = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("tbody");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.tbody.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableDataCellElement}
 */
dilema.td = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("td");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.td.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTemplateElement}
 */
dilema.template = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("template");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.template.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTextAreaElement}
 */
dilema.textarea = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("textarea");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.textarea.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableSectionElement}
 */
dilema.tfoot = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("tfoot");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.tfoot.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableHeaderCellElement}
 */
dilema.th = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("th");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.th.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableSectionElement}
 */
dilema.thead = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("thead");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.thead.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTimeElement}
 */
dilema.time = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("time");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.time.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTitleElement}
 */
dilema.title = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("title");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.title.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTableRowElement}
 */
dilema.tr = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("tr");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.tr.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLTrackElement}
 */
dilema.track = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("track");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.track.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLUListElement}
 */
dilema.ul = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("ul");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.ul.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} src
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLVideoElement}
 */
dilema.video = function(src, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("video");
   if(src){
                if(src.htmlTemplate == true){
                    _elm.innerHTML = src.content;

                }else{
                    _elm.src= src.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.video.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};

 /**
 * @param {string} textContent
 * @param {CSSStyleDeclaration | [CSSStyleDeclaration] | string} style
 * @param {HTMLElement} parent
 * @return {HTMLPreElement}
 */
dilema.xmp = function(textContent, style, parent = dilema.parent || document.body){
            var _elm = document.createElement("xmp");
   if(textContent){
                if(textContent.htmlTemplate == true){
                    _elm.innerHTML = textContent.content;

                }else{
                    _elm.textContent= textContent.blink();}
                }
    if(style && !(typeof style == "object" && Object.keys(style).length == 0) && style != ""){
        z__private.stl(style, _elm);
    }else{
        z__private.stl(dilema.xmp.defaultStyle, _elm);        
    }
    if(parent)
        parent.appendChild(_elm);

    dilema.last = _elm;
    return _elm;
};