// const { Schema } = new DBLocal({ path: './db' })
import * as yup from "yup";

// esquema de la base de datos Persona
export const schema = yup.object().shape({
  nombre: yup
    .string()
    .lowercase()
    .required("Nombre es requerido")
    .min(3, {
      message: "debe ser mayo a 3 caracteres",
    })
    .max(30),
  apellido: yup
    .string()
    .lowercase()
    .required("Apellido es requerido")
    .min(3, {
      message: "debe ser mayo a 3 caracteres",
    })
    .max(30),
  username: yup.string().required("Username es requerido"),
  password: yup.string().required("Password es requerido").min(4).max(16),
  email: yup
    .string()
    .email("Invalid email")
    .required("Correo Electronico es requerido")
    .min(4)
    .max(100),
  cedula: yup.string().required("Cedula es requerido").min(10).max(10),
});

export const login = yup.object({
  password: yup.string().required("Password es requerido").min(4).max(16),
  email: yup
    .string()
    .email("Invalid email")
    .required("Correo Electronico es requerido")
    .min(4)
    .max(100),
  cedula: yup.string().min(10).max(10),
});
