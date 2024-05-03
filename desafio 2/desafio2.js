let NombreProducto = "RTX4090"
const PrecioUnitario = 100000
let CantidadDeseada = prompt(`ingrese la cantidad deseada de ${NombreProducto} que quiere comprar`)
parseInt(CantidadDeseada)

let costoTotal = PrecioUnitario * CantidadDeseada
let costoTotal2 = PrecioUnitario * CantidadDeseada * 0.9




if(CantidadDeseada >= 5) {
    alert(`usted compro ${CantidadDeseada} de ${ NombreProducto} a un precio de $${costoTotal2}`)
} else if( CantidadDeseada < 5 ) {
    alert (`usted compro ${CantidadDeseada} de ${NombreProducto} a un precio de $${costoTotal} `)
}




