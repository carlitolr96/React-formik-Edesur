import React from 'react';
import { Formik } from 'formik';

const Formulario = () => {
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: ''
				}}
				onSubmit={() => {
					console.log('Formulario enviado');
				}}
			>
				{( {values, handleSubmit, handleChange, handleBlur} ) => (
					<form className="formulario" onSubmit={handleSubmit}>
						<div>
							<img src="https://edesur.com.do/media/ft2g4dvn/logo.png" alt="Edesur-logo" height="90px" />
						</div>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input 
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe" 
								value={values.nombre}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
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
						<button type="submit">Enviar</button>
					</form>
				)}
				
			</Formik>
		</>
	);
}
 
export default Formulario;