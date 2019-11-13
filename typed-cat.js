"use strict";
exports.__esModule = true;
var TypedCat = /** @class */ (function () {
    function TypedCat(color, name) {
        this.color = color;
        this.name = name;
    }
    TypedCat.prototype.beAnnoying = function () {
        console.log(this.name + " slaps something off table");
    };
    TypedCat.prototype.beAnnoyingToHuman = function (human) {
        console.log(this.name + " jumps on " + human.name + " when they aren't looking");
    };
    return TypedCat;
}());
exports.TypedCat = TypedCat;
