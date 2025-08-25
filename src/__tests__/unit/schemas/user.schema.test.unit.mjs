import userModel from "../../../schemas/user.schema.mjs";

describe ( 'Validacion directa a userModel', ()=>{
    test ( 'Debe lanzar un error si falta el campo "name" ', ()=>{
        //Given
        const userData = {
            //Falta el campo name
            username:'Manu',
            password:'123456789',
            email: 'manu@correo.co',
            role: 'admin'

        };

        //when

        try {
            const user = new userModel(userData);
            user.validate();
        } catch (error) {
            //then
            expect (error.errors.name).toBeDefined();
        }
        

        



    })
})