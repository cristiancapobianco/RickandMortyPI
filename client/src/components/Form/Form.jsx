
import { useForm } from "react-hook-form"
import "./From.module.css"
// import { useState } from "react";

export default function Form({ login }) {
    // const [userData, setUserData] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const onSubmit = data => {
        login(data)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="email">
                <label className="label" htmlFor="email">email:
                    <input  {...register("email", {
                        required: {
                            value: true,
                            message: "Email es requerido."
                        },
                        maxLength: {
                            value: 35,
                            message: "Debe tener menos de 35 caracters."
                        },
                        pattern: {
                            value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                            message: "Email no valido"
                        },
                    })} type="email" name="email" />
                    {errors.email && <span>{errors.email.message}</span>}
                </label>
            </div>
            <div class="password">
                <label className="label" htmlFor="password">password:
                    <input {...register("password", {
                        required: {
                            value: true,
                            message: "Password es requerido"
                        },
                        pattern: {
                            value: /^\w+((?=.*[\d]))(?=.*[a-z])/,
                            message: "Debe tener al menos un numero"
                        },
                        minLength: {
                            value: 6,
                            message: "Debe tener mas de 6 caracters"
                        },
                        maxLength: {
                            value: 10,
                            message: "Debe tener menos de 10 caracters"
                        }

                    })} type="password" name="password" />
                    {errors.password && <span>{errors.password.message}</span>}

                </label>
            </div>
            <div>
                <button class="boton"type="submit">Login</button>
            </div>
        </form>

    )
}
