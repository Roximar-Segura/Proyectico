export default class CL_Farmacia {
    constructor () {
        this.menorVenta = 99999999999;
        this.acCantidadV = 0;
        this.auxCodigo = '';
    }
    // iniciamos el procesar de la clase
    procesarMedicamento (med) {
        this.acCantidadV += med.cantidadV()
        if (med.cantidadV() < this.menorVenta) {
            this.menorVenta = med.cantidadV();
            this.auxCodigo = med.codigo();
        }
    }

}