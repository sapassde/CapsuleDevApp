import axios from 'axios';

const postMedico = (nome, crm) => {
	return axios({
		method: 'post',
		url: 'https://capsuledevdigital01.herokuapp.com/medico',
		data: {
			nome : nome,
			crm : crm
		}
	});
}

export {postMedico};