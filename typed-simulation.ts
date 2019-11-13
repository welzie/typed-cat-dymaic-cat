import { Human } from './human';
import { TypedCat } from './typed-cat';

let elbert = new TypedCat('grey', 'Elbert');
let erika = new Human('Erika');

elbert.beAnnoying();
elbert.beAnnoyingToHuman(erika);
elbert.beAnnoyingToHuman();
