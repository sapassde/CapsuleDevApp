import axios from 'axios';

const getPacientes = () => {
	return axios({
		method: 'get',
		url: 'https://capsuledevdigital01.herokuapp.com/paciente'
	})
}

const getMonitoramentos = () => {
	return axios({
		method: 'get',
		url: 'https://capsuledevdigital01.herokuapp.com/monitoramento'
	})
}

export {getPacientes}
export {getMonitoramentos}