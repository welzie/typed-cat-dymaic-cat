const DynamicCat = require('./dynamic-cat');

let elbert = new DynamicCat('grey', 'Elbert');
let erika = {name: 'Erika'};

elbert.beAnnoying();
elbert.beAnnoyingToHuman(erika);
elbert.beAnnoyingToHuman();