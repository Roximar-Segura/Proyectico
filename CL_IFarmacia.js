export default class CL_IFarmacia {
    reporteFarmacia(mV,mT) {
        return `
        <br> Medicamento menos vendido: ${mV}
        <br> Monto total vendida en el día: ${mT}
        `
    }
    }