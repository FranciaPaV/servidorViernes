import express from "express"

//para separar las rutas de la logica de negocio, utilizaré un metodo especial de EXPRESS: express.Router
export let rutas = express.Router()

rutas.post('/registrarhabitacion', function (req, res) {
    res.send('Estamos registrando la habitacion')
  })
  
rutas.get('/buscarhabitaciones', function (req, res) {
      res.send('Estamos buscando todas las habitaciones')
    })
  
rutas.get('/buscarhabitacion', function (req, res) {
    res.send('Estamos buscando una habitacion')
  })
  
rutas.put('/actualizarhabitacion', function (req, res) {
      res.send('Estamos actualizando la habitacion')
    })
  
rutas.post('/registrarreserva', function (req, res) {
      res.send('Estamos registrando la reserva')
    })
    
rutas.get('/buscarreservas', function (req, res) {
      res.send('Estamos buscando todas las reservas')
  })
  
rutas.get('/buscarreserva', function (req, res) {
      res.send('Estamos buscando una reserva')
  })
  
rutas.put('/actualizarreserva', function (req, res) {
      res.send('Estamos actualizando la reserva')
    })
  
rutas.delete('/eliminarreserva', function (req, res) {
    res.send('Estamos eliminando la reserva')
  })