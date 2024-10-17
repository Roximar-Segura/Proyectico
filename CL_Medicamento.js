export default class CL_Medicamento {
    constructor(codigo, precio, cantidadV) {
        this.codigo = codigo;
        this.precio = precio;
        this.cantidadV = cantidadV;
    }
    set codigo(c) {
        this._codigo = c;
    }
    get codigo() {
        return this._codigo;
    }
    set precio(p) {
        this._precio = +p;
    }
    get precio() {
        return this._precio;
    }
    set cantidadV(c) {
        this._cantidadV = +c;
    }
    get cantidadV() {
        return this._cantidadV;
    }
    CalMontoV() {
        return this._precio * this._cantidadV;
    }
}