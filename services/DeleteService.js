import axios from 'axios';

const deleteMedico = (medicoCodigo) => {
	return axios({
		method: 'delete',
		url: 'https://capsuledevdigital01.herokuapp.com/medico/' + medicoCodigo,
		params: {
			id: medicoCodigo
		}
	}).then(response => {
		console.log("medico apagado")
	});
}

export {deleteMedico};