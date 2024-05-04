let NombreProducto = `lamparas led`
let PrecioUnitario = 3000
let CantidadDeseada = prompt(`Cuantas ${NombreProducto} desea?`)
parseInt = CantidadDeseada

function sumarProductos(CantidadDeseada,PrecioUnitario){
    let TotalGastado= PrecioUnitario * CantidadDeseada
    return TotalGastado;
}

let TotalGastado =sumarProductos(CantidadDeseada,PrecioUnitario)

if (CantidadDeseada >= 2){
    console.log ("El total gastado en los productos es :$" + TotalGastado)
} else if( CantidadDeseada < 2){
    console.log ("El total gastado en el producto es :$" + TotalGastado)
}





