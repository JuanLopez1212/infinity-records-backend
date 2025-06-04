import jwt from 'jsonwebtoken';
const JWT_SECRET = '8oy54go87wyogewy';
const generateToken = (payload) => {


const token = jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: '1h' }
    );
    
    return token;
}

const verifyToken = ( token ) => {
    const payload = jwt.verify(
        token, 
        JWT_SECRET 
    );
    return payload;
}
    

export {
    generateToken,
    verifyToken
}