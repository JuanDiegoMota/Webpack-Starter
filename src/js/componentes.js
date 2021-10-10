import '../css/componentes.css';
//import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre = 'Mr X' ) => {
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hello! Mr ${nombre}`;
    document.body.append( h1 );

    //const imagen = document.createElement('img');
    //imagen.src = webpacklogo;
    //document.body.append(imagen);
}