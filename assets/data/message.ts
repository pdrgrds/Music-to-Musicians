export default ({
    ListaMessage: [
        {
            id: 'MariaBlackMore1@hotmail.com',
            nombreUsuario: 'Maria Blackmore',
            ultimoMensaje: 'Hola, estoy buscando baterista como tu para mi banda',
            ultimoMensajeLeido: false,
            urlImagenPerfil: require('./../img/data/usuario-2.png')
        },
        {
            id: 'SegioDelCampo2@hotmail.com',
            nombreUsuario: 'Sergio del Campo',
            ultimoMensaje: 'Hola me gustaría entrar a tu banda',
            ultimoMensajeLeido: true,
            urlImagenPerfil: require('./../img/data/usuario-3.png')
        },
        {
            id: 'HernestoRojas123@hotmail.com',
            nombreUsuario: 'Hernesto Rojas',
            ultimoMensaje: 'Hola me gustaría entrar a tu banda',
            ultimoMensajeLeido: true,
            urlImagenPerfil: require('./../img/data/usuario-1.png')
        },
        {
            id: 'KhaterineMonzerrat@hotmail.com',
            nombreUsuario: 'Khaterine Monzerrat',
            ultimoMensaje: 'Lo siento, se canceló el evento',
            ultimoMensajeLeido: false,
            urlImagenPerfil: require('./../img/data/usuario-2.png')
        }
    ],
    detalleMessage: [
        {
            fromMessage: 'me@hotmail.com',
            toMessage: 'MariaBlackMore1@hotmail.com',
            nombreUsuario: 'Maria Blackmore',
            descripcionUsuario: 'Guitarrista, especializada en música rock y trash metal',
            urlImagenPerfil: require('./../img/data/usuario-2.png'),
            messages: [
                {position: 'flex-start', message: 'Hola, estoy buscando baterista como tu para mi banda', color: '#333439'}
            ]
        },
        {
            fromMessage: 'me@hotmail.com',
            toMessage: 'SegioDelCampo2@hotmail.com',
            nombreUsuario: 'Sergio del Campo',
            descripcionUsuario: 'Guitarrista, especializada en música clásica',
            urlImagenPerfil: require('./../img/data/usuario-3.png'),
            messages: [
                {position: 'flex-start', message: 'Hola, buenas tardes', color: '#333439'},
                {position: 'flex-end', message: 'Hola, buenas tardes', color: '#CC2014'},
                {position: 'flex-end', message: '¿Quién es usted?', color: '#CC2014'},
                {position: 'flex-start', message: 'Hola me gustaría entrar a tu banda', color: '#333439'}
            ]
        },
        {
            fromMessage: 'me@hotmail.com',
            toMessage: 'HernestoRojas123@hotmail.com',
            nombreUsuario: 'Hernesto Rojas',
            descripcionUsuario: 'Guitarrista, especializada en música',
            urlImagenPerfil: require('./../img/data/usuario-1.png'),
            messages: [
                {position: 'flex-start', message: 'Hola, buenas tardes', color: '#333439'},
                {position: 'flex-end', message: 'Hola, buenas tardes', color: '#CC2014'},
                {position: 'flex-end', message: '¿Quién es usted?', color: '#CC2014'},
                {position: 'flex-start', message: 'Hola me gustaría entrar a tu banda', color: '#333439'},
                {position: 'flex-start', message: 'Hola, buenas tardes', color: '#333439'},
                {position: 'flex-end', message: 'Hola, buenas tardes', color: '#CC2014'},
                {position: 'flex-end', message: '¿Quién es usted?', color: '#CC2014'},
                {position: 'flex-start', message: 'Hola me gustaría entrar a tu banda', color: '#333439'},
                {position: 'flex-start', message: 'Hola, buenas tardes', color: '#333439'},
                {position: 'flex-end', message: 'Hola, buenas tardes', color: '#CC2014'},
                {position: 'flex-end', message: '¿Quién es usted?', color: '#CC2014'},
                {position: 'flex-start', message: 'Hola me gustaría entrar a tu banda', color: '#333439'},
            ]
        },
        {
            fromMessage: 'me@hotmail.com',
            toMessage: 'KhaterineMonzerrat@hotmail.com',
            nombreUsuario: 'Khaterine Monzerrat',
            descripcionUsuario: 'Baterista, especializada en todo tipo de música',
            urlImagenPerfil: require('./../img/data/usuario-2.png'),
            messages: [
                {position: 'flex-start', message: 'Hola, buenas tardes', color: '#333439'},
                {position: 'flex-start', message: 'tenemos un evento por San Isidro, necesitamos un baterista, la haces?', color: '#333439'},
                {position: 'flex-end', message: 'si, con gusto,estaré ahí', color: '#CC2014'},
                {position: 'flex-start', message: 'Genial', color: '#333439'},
                {position: 'flex-start', message: 'Lo siento, se canceló el evento', color: '#333439'},
            ]
        }
    ]
})