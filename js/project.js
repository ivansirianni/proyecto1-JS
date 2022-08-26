//Este es un proyecto de aplicacion de restaurante
let comanda = prompt("Bienvenido a nuestro restaurante. Nuestro sistema inteligente tomará su pedido, lo registraremos y en breve un camarero lo llevará a su mesa. Desea continuar? Si/No")

while(comanda.toLowerCase() == "si"){
    let entrada = prompt("Ingrese su plato preferido para entrada: ")
    let platoPrincipal = prompt("Ingrese su plato plato principal: ")
    let postre = prompt("Ingrese su plato postre deseado: ")
    let bebida = prompt("Que desea para beber? ")
    let medioPago = prompt("Ingrese el medio de pago (Efectivo/Débito/Crédito/MercadoPago/Otro): ")

    comanda = prompt(`Para finalizar su pedido,ud ordeno:\nEntrada: ${entrada}\nPlato Principal: ${platoPrincipal}\nPostre: ${postre}\nBebida: ${bebida}\nAbona de la siguiente forma: ${medioPago}\nDesea confirmar este pedido? Si/No`)

    if (comanda.toLowerCase() == "si"){
        comanda = prompt("Muchas gracias!!\nEn breve el camarero llevará su pedido.\nDesea ordenar algo más? Si/No")
    } else {
        alert("Muchas gracias, vuelvas prontos")
    }

    
}

