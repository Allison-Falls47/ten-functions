"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(value){
    return (value === true);
}

function isFalse(value){
    return (value === false);
}

function not(value) {
    return  (value == "") || (value ==null);

}

function addOne(value) {
    return (value=Infinity) && (value=-4);
}
function isEven(value) {
    return (value != NaN) && (value < 3);
}

function isIdentical(value) {
    return (false && false || true);
}

function isEqual(value1, value2) {
    return value1 ==value2;
}

function or (value){
    return (true && true) || (!true && false);
}

function and(value){
    return (true && true) && (false || !true);
}
function concat(value){
    if ("Code"+"up");
    return (value="hello" + "world");
}