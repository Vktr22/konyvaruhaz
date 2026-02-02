class TermekModel {
    #id;
    #cim;
    #szerzo;
    #ar;

    constructor(adatok){ 
       this.#id=adatok.id; 
       this.#cim=adatok.cim ;
       this.#szerzo=adatok.szerzo;
       this.#ar=adatok.ar;
   }
   
}
export default TermekModel;