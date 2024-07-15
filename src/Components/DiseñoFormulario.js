import React from 'react';
import { useForm } from 'react-hook-form';
import { edadvalidacion } from './Validaciones';
import  './EstilosFormularios.css';



const DiseñoFormulario = () => {
    const {register, formState: {errors}, watch, handleSubmit}= useForm();

    const onSubmit=(data)=>{

console.log(data);
    }

  return <div>
    <h2>Solicitud de Adopción</h2>
      <form onSubmit={handleSubmit (onSubmit)}>
    <div>
       <label>Nombre:</label> 
       <input type='text' {...register('Nombre', {required:true,
        maxLength:50
       })}/>
       <p></p>   
       {errors.Nombre?.type==='required'&& <p>El campo nombre es obligatorio</p>}    
       <div>
       <label>'¿Por qué quieres un gatito?:</label> 
       <input type='text' {...register('pregunta1',
        {required:true,
        maxLength:150
        })}/>
        {errors.pregunta1?.type==='required'&& <p>La pregunta es obligatoria</p>}
       <p></p>
       </div>
       <div>
       <label>'¿Trabajas? de ser si, ¿En que horarios?:</label> 
       <input type='text' {...register('pregunta2',
        {required:true, maxLength:200}
       )}/>
       <p></p>
       {errors.pregunta2?.type==='required'&& <p>La pregunta es obligatoria</p>}
       </div>
       <div>
       <label>'¿Tienes hijos?, ¿Cuántos?:</label> 
       <input type='text' {...register('pregunta3',
        {required:true, maxLength:200}
       )}/>       
       <p></p>
       {errors.pregunta3?.type==='required'&& <p>La pregunta es obligatoria</p>}
       </div>
       <div>
       <div>
       <label>'Teléfono:</label> 
       <input type='text' {...register('telefono',
        {required:true, maxLength:11}
       )}/>
       <p></p>
       {errors.telefono?.type==='required'&& <p>El telefono es obligatorio</p>}
       {errors.telefono?.type ==='maxLength' && <p>El Campo debe tener como máximo 11 números</p>}
       </div>
       <div>
       <label>'Edad:</label> 
       <input type='text' {...register('edad',
        {required:true, maxLength:2}
       )}/>       
       <p></p>
       {errors.edad?.type==='required'&& <p>La edad es obligatoria</p>}
       </div>
            
       <label>'Ciudad:'</label> 
       <select {...register('Cuidad')}>
        <option value={'mat'}>Matagalpa</option>
        <option value="ji">Jinotega</option>
        <option value="seb">Sebaco</option>
        <option value="da">Darío</option>
        <option value="est">Estelí</option>
       </select>
       <p></p>
       {errors.ciudad?.type==='required'&& <p>la Ciudad es obligatoria</p>}
       </div>       
    </div>
   
    <input type="submit" value="Enviar"/> 
 
   
    </form>
  </div>
};

export default DiseñoFormulario;