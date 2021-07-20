let tasa = 0.046
let poliza = document.getElementById('poliza')
let cantidad = document.getElementById('cantidad')
let calcular = document.getElementById('calcular')
let sumaAsegurada = 0
let prima = 0

calcular.addEventListener ('click', calculo)

function	calculo(){

	let polizaValue = poliza.value

	switch (polizaValue){
		case "1151":
		sumaAsegurada = (cantidad.value)*6000
		prima = (sumaAsegurada*tasa)/100
		alert('Prima: ' + prima + ' - Suma asegurda: ' + sumaAsegurada)
		break

		case "5466":
		sumaAsegurada = (cantidad.value)*13000
		prima = (sumaAsegurada*tasa)/100
		alert('Prima: ' + prima + ' - Suma asegurda: ' + sumaAsegurada)
		break

		case "7854":
		sumaAsegurada = (cantidad.value)*24000
		prima = (sumaAsegurada*tasa)/100
		alert('Prima: ' + prima + ' - Suma asegurda: ' + sumaAsegurada)
		break

		case "12338":
		sumaAsegurada = (cantidad.value)*31000
		prima = (sumaAsegurada*tasa)/100
		alert('Prima: ' + prima + ' - Suma asegurda: ' + sumaAsegurada)
		break

		case "12339":
		sumaAsegurada = (cantidad.value)*41000
		prima = (sumaAsegurada*tasa)/100
		alert('Prima: ' + prima + ' - Suma asegurda: ' + sumaAsegurada)
		break

		case "1699":
		sumaAsegurada = (cantidad.value)*5000
		prima = (sumaAsegurada*tasa)/100
		alert('Prima: ' + prima + ' - Suma asegurda: ' + sumaAsegurada)
		break


		default:
		alert('Error, volver a intentar.')
	}

}