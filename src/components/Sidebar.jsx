import React from 'react'
import '../assets/css/Sidebar.css';

function Sidebar() {
  return (
    <div className='left'>
        <div className='im'>
            <h1>MarketPlace</h1>
            <p><i class="fa-solid fa-gear"></i></p>
        </div>
        <div className='search-box'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type='text' placeholder='Buscar en Marketplace'/>
        </div>
        <div className='imgm'>
            <i class="fa-solid fa-store"></i>
            <p>Explorar todo</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-bell"></i>
            <p>Notificaciones</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-inbox"></i>
            <p>Bandeja de entrada</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-bag-shopping"></i>
            <p>Compra</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-tag"></i>
            <p>Venta</p>
        </div>
        <div className='button'>
          <button>+ Crear publicacion</button>
        </div>
        <hr />
        <div className='filtro'>
            <h3>Filtros</h3>
        </div>
        <div className='imga'>
            <p>Atenas, Alejuela En un radio de 6 kilometros</p>
        </div>
        <hr/>
        <div className='categoria'>
            <h3>Categoria</h3>
        </div>
        <div className='img'>
            <i class="fa-solid fa-car"></i>
            <p>Vehiculos</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-house"></i>
            <p>Alquiler de propiedades</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-person-running"></i>
            <p>Articulos deportivos</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-tags"></i>
            <p>Articulos gratuitos</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-tag"></i>
            <p>Articulos para el hogar</p>
        </div>
        <div className='img'>
            <i class="fa-solid fa-house-chimney"></i>
            <p>Clasificados</p>
        </div>
    </div>
  )
}

export default Sidebar