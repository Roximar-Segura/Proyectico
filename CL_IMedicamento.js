export default class CL_IMedicamento {
    leerCodigo() {
        return prompt ("Ingrese el Codigo del Medicamento (A,B o C)");
    }
    leerPrecio() {
        return prompt ("Ingrese el Precio del Medicamento");
    }
    leerCantidadV() {
        return prompt ("Ingrese la Cantidad Vendida");
    }
    solicitarRespuesta() {
        return prompt ("¿Desea Ingresar otro Medicamento? (1=Sí/2=No)");
    }
}