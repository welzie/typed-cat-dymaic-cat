"use strict";
exports.__esModule = true;
var human_1 = require("./human");
var typed_cat_1 = require("./typed-cat");
var elbert = new typed_cat_1.TypedCat('grey', 'Elbert');
var erika = new human_1.Human('Erika');
elbert.beAnnoying();
elbert.beAnnoyingToHuman(erika);
