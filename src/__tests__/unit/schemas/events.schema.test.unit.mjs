import eventsModel from "../../../schemas/events.schema.mjs";

describe('validacion directa a eventsModel', () =>{
    test ('Debe lanzar un error si falta el campo title ', () =>{

            //given
            const eventsData = {
                date:'12/9/2025'
            };
            //when
            try{
            const events = new eventsModel(eventsData);
            events.validate();

            //then
            } catch(error){
                expect(error.errors.title).toBeDefined();
            }
            
    });
})