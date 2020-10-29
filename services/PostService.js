import axios from 'axios';

const postMedico = (nome, crm, monitoramentos) => {
	return axios({
		method: 'post',
		url: 'https://capsuledevdigital01.herokuapp.com/medico',
		data: {
			nome : nome,
			crm : crm,
			monitoramentos : monitoramentos
		}
	});
}

const postPaciente = (nome, nascimento, rg, genero, nomeMae, endereco, contato, telefone, orgao, transplante, monitoramentos) => {
	return axios({
		method: 'post',
		url: 'https://capsuledevdigital01.herokuapp.com/paciente',
		data: {
			nome : nome,
			nascimento : nascimento,
			rg : rg,
			genero : genero,
			nomeMae : nomeMae,
			endereco : endereco,
			contato : contato,
			telefone : telefone,
			orgao : orgao,
			transplante : transplante,
			monitoramentos : monitoramentos
		}
	});
}

const postMonitoramento = (descricao, inicio, fim, ativo, frequenciaSegundos, hospital, medico, paciente, listaCapsuleWatch, listaCapsuleControl) => {
	return axios({
		method: 'post',
		url: 'https://capsuledevdigital01.herokuapp.com/monitoramento',
		data: {
			descricao : descricao,
			inicio : inicio,
			fim : fim,
			ativo : ativo,
			frequenciaSegundos : frequenciaSegundos,
			hospital : hospital,
			medico : medico,
			paciente : paciente,
			listaCapsuleWatch : listaCapsuleWatch,
			listaCapsuleControl : listaCapsuleControl
		}
	});
}

const postHospital = (nome, cnpj, inscricaoEstadual, endereco, telefone, monitoramentos) => {
	return axios({
		method: 'post',
		url: 'https://capsuledevdigital01.herokuapp.com/hospital',
		data: {
			nome : nome,
			cnpj : cnpj,
			inscricaoEstadual : inscricaoEstadual,
			endereco : endereco,
			telefone :  telefone,
			monitoramentos : monitoramentos
		}
	});
}

const postCapsuleControl = (remedio, dose, data, monitoramento) => {
	return axios({
		method: 'post',
		url: 'https://capsuledevdigital01.herokuapp.com/capsuleControl',
		data: {
			remedio : remedio,
			dose : dose,
			data : data,
			monitoramento : monitoramento
		}
	});
}

const postCapsuleWatch = (batimentos, temperatura, pressao, imc, dataHora, monitoramento) => {
	return axios({
		method: 'post',
		url: 'https://capsuledevdigital01.herokuapp.com/capsuleWatch',
		data: {
			batimentos : batimentos,
			temperatura : temperatura,
			pressao : pressao,
			imc : imc,
			dataHora : dataHora,
			monitoramentos : monitoramentos
		}
	});
}

export {postMedico};
export {postPaciente};
export {postMonitoramento};
export {postHospital};
export {postCapsuleControl};
export {postCapsuleWatch};