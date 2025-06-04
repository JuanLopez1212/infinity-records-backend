import jwt from 'jsonwebtoken'

const authUser = ( req, res, next ) => {
    console.log('soy el Middleware de Autenticacion')   //el middleware funciona para hacer tareas antes de llegar al controlador 
    const token = req.header ('X-Token');       //extraemos el token de la cabecera

    //verifica que el tpken no venga vacio.
    if(! token ){
        return res.json({msg:'Error: al obtener el token'});
    }

    const JWT_SECRET = '8oy54go87wyogewy';

    const payload = jwt.verify(token, JWT_SECRET);

//eliminamos propiedades adicionales
    delete payload.iat;
    delete payload.exp;

    //crera una propiedad en el objeto REQUEST DE EXPRESS y guardar el payload
    req.authUser = payload;

    console.log(payload)


    next();
}
    

export {
    authUser
}