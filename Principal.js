//* Una farmacia desea procesar al final del día las ventas de cada uno de los
//medicamentos para obtener algunas estadísticas. Por cada medicamento se
//solicita: Código del medicamento, precio, cantidad vendida, se requiere:
// Calcular el monto vendido por medicamento.
//También debe reportarse por la farmacia: cuál medicamento fue el
//menos destacado (el que se vendió menos) y el monto total vendido //

import CL_Farmacia from "./CL_Farmacia.js";
import CL_IFarmacia from "./CL_IFarmacia.js";
import CL_Medicamento from "./CL_Medicamento.js";
import CL_IMedicamento from "./CL_IMedicamento.js";

let iFarma = new CL_IFarmacia(),
 Farma = new CL_Farmacia(),

 salida = document.getElementById("salida");

let resp = 1;
while (resp == 1) {
    let iMed = new CL_IMedicamento(),
     c = iMed.leerCodigo(),
     p = iMed.leerPrecio(),
     cV = iMed.leerCantidadV(),
    
     Med = new CL_Medicamento(c, p, cV);
    Farma.procesarMedicamento(Med);
    
    resp = iFarma.solicitarRespuesta();
}
salida = document.getElementById("salida");
salida.innerHTML = iFarma.reporteFarmacia(iFarma.auxCodigo, iFarma.acCantidadV);