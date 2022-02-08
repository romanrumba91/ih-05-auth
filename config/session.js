// ./config/session.js

// GESTIÓN DE SESIÓN
// CONFIGURACIÓN Y EL TIEMPO DE EXPIRACIÓN DE LA SESIÓN

// 1. IMPORTACIONES

const session		= require("express-session")



// 2. FUNCIÓN DE GESTIÓN DE LA SESIÓN
const sessionManager = (application) => {

	// VERIFICAR CON EL PATRÓN DE DISEÑO PROXY QUE SI LA SESIÓN ES "EXTRAÑA", ES DECIR SE INTENTA MANIPULAR CON UNA COOKIE FALSE, EVITAR EL RUTEO
	application.set("trust proxy", 1)

	// VERIFICAR QUE LA SESIÓN SE GENERE CON SU PALABRA SECRETA, SU TICKET (COOKIE) Y SU EXPIRACIÓN
	application.use(session({
		secret: "HOLAMUNDO",
		resave: true,
		cookie: {
			maxAge: 8640000, // TIEMPO DE EXPIRACIÓN DEL COOKIE
			httpOnly: true
		},
		saveUninitialized: false
	}))

}


// 3. EXPORTACIÓN
module.exports = sessionManager