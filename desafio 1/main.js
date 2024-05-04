let NombreProducto = "RTX4090"
const PrecioUnitario = 100000
let CantidadDeseada = prompt(`ingrese la cantidad deseada de ${NombreProducto} que quiere comprar`)
parseInt(CantidadDeseada)

const costoTotal = PrecioUnitario * CantidadDeseada


alert(`usted compro ${CantidadDeseada} de ${NombreProducto} a un precio de $${costoTotal}`)



