//file : pawl03-helper.js
// https://stackoverflow.com/a/43824723/1240036

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$'));
}

function addClass(el, className) {
    if (el.classList)
        return el.classList.add(className);
    else if (!hasClass(el, className))
        el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^') + className + '(\\s|$)');
el.className = el.className.replace(reg, '');
    }
}

function currency (amount) {  
    return 'Rp. '+ amount;
}