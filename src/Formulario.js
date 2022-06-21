import React from 'react';
import { Formik, Field } from 'formik';

const Formulario = () => {
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					apellido: '',
					correo: '',
					contraseña: ''
				}}
				validate={(valores) => {
					const errores = {};

					if(!valores.nombre){
						errores.nombre = 'Por favor ingrese un nombre'
					}

					return errores;
				}}
				onSubmit={(valores) => {
					console.log('Formulario enviado');
				}}
			>
				{( {values, errors, handleSubmit, handleChange, handleBlur} ) => (
					<form className="formulario" onSubmit={handleSubmit}>
						{console.log(errors)}
						<div>
							<img src="https://www.edesur.com.do/media/ft2g4dvn/logo.png" alt="Edesur-logo" height="90px" />
						</div>

						<div>
							<label htmlFor="nombre">Nombre</label>
							<input 
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Ingrese su nombre" 
								value={values.nombre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						<div>
							<label htmlFor="nombre">Apellido</label>
							<input 
								type="text" 
								id="apellido" 
								name="apellido" 
								placeholder="Ingrese su apellido" 
								value={values.apellido}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						<div>
							<label htmlFor="correo">Correo Electronico</label>
							<input 
								type="email" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
								value={values.correo}
								onChange={handleChange}
								// onBlur={handleBlur}
							/>
						</div>
						<div>
							<label htmlFor="password">Contraseña</label>
							<input
								type="password" 
								id="password"
								name="password"
								placeholder="contraseña"
								value={values.contraseña}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						
						{/* <div>
							<label htmlFor="provincia">Provincia</label>
							<Field name="provincia" as="select" id="select">
								<option value="San Cristobal">San Cristobal</option>
								<option value="Bani">Bani</option>
								<option value="San Juan">San Juan</option>
								<option value="Santo Domingo">Santo Domingo</option>
								<option value="Pedernales">Pedernales</option>
								<option value="Azua">Azua</option>
							</Field>
						</div> */}
						
						<div>
							<label className="checkbox">
              					<Field 
								  type="checkbox" 
								  name="checked" 
								  value="checked"
								  onBlur={handleBlur}
								/>Aceptas las condiciones de uso.
            				</label>
						</div>

						<button type="submit">Confirmar</button>

					</form>
				)}
				
			</Formik>
		</>
	);
}
 
export default Formulario;