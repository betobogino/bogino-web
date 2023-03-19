import styles from '../styles/components/contact.module.css';
import { useForm } from 'react-hook-form'

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log("onSubmit")    
    }

    return (
        <div className={styles.contact}>
            <div className={styles.wraper}>
                <form onSubmit={(onSubmit)}>
                    <label htmlFor="name">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Nombre"
                            {...register("name", {
                                required: true
                            })}
                        />
                        {errors.name?.type === 'required' && <p className="form-error">Su nombre es requerido</p>}
                    </label>
                    <label htmlFor="email">
                        <input 
                            type="text" 
                            name="email"
                            placeholder="Correo electronico"
                            {...register("email", {
                                required: true
                            })}
                        />
                        {errors.email?.type === 'required' && <p className="form-error">Su email es requerido</p>}
                    </label>
                    <label htmlFor="telefono">
                        <input 
                            type="text"
                            name="telefono" 
                            placeholder="Teléfono"
                            {...register("telefono" ,{
                                required: true,
                            })}
                        />
                        {errors.telefono?.type === 'required' && <p className="form-error">Su teléfono es requerido</p>}
                    </label>
                    <label htmlFor="mensaje">
                        <textarea 
                            type="text"
                            name="mensaje" 
                            placeholder="Mensaje"
                            {...register("mensaje" ,{
                                required: true,
                            })}
                        />
                        {errors.telefono?.type === 'required' && <p className="form-error">Su mensaje es requerido</p>}
                    </label>
                    <div  className="btn-register">
                        <button >Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact