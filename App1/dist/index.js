"use strict";
console.log("hello world");
let age = 20;
let array = [1, 2, 3];
let array1 = [1, 2, 3];
let tuple = [2, "name"];
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Large;
console.log(mySize);
let mySizeA = 2;
console.log(mySizeA);
function calculteTax(income) {
    if (income > 10)
        return income * 10;
    return income * 5;
}
function calculteTaxO(income, tax) {
    if ((tax || 30) > 10)
        return income * 10;
    return income * 5;
}
function calculteTaxOG(income, tax = 20) {
    if (tax > 10)
        return income * 10;
    return income * 5;
}
calculteTax(5);
let obj = { id: 1 };
let newObj = { id: 1, name: '' };
let newO = { id: 1 };
let newObjC = { id: 1, name: '' };
let newObjF = { id: 1, name: '', retire: (date) => {
        console.log(date);
    } };
let emp1 = { id: 1, name: '', retire: (date) => {
        console.log(date);
    } };
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 2;
}
let weight;
let uiWidgetObj = {
    drag: () => { },
    resize: () => { }
};
let quality = 50;
let qty = 50;
let qtyT = 20;
function NullableFun(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('hola !');
}
NullableFun('malith');
NullableFun(null);
NullableFun(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let cus = getCustomer(0);
console.log(cus === null || cus === void 0 ? void 0 : cus.birthday);
//# sourceMappingURL=index.js.map