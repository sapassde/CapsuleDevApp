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

const deletePaciente = (pacienteCodigo) => {
    return axios({
        method: 'delete',
        url: 'https://capsuledevdigital01.herokuapp.com/paciente' + pacienteCodigo,
        params: {
            id: pacienteCodigo
        }
    }).then(response => {
        console.log("paciente apagado")
    });
}

const deleteMonitoramento = (monitoramentoCodigo) => {
    return axios({
        method: 'delete',
        url: 'https://capsuledevdigital01.herokuapp.com/monitoramento' + monitoramentoCodigo,
        params: {
            id: monitoramentoCodigo
        }
    }).then(response => {
        console.log("monitoramento apagado")
    });
}

const deleteHospital = (hospitalCodigo) => {
    return axios({
        method: 'delete',
        url: 'https://capsuledevdigital01.herokuapp.com/hospital' + hospitalCodigo,
        params: {
            id: hospitalCodigo
        }
    }).then(response => {
        console.log("hospital apagado")
    });
}

const deleteCapsuleControl = (capsuleControlCodigo) => {
    return axios({
        method: 'delete',
        url: 'https://capsuledevdigital01.herokuapp.com/capsuleControl' + capsuleControlCodigo,
        params: {
            id: capsuleControlCodigo
        }
    }).then(response => {
        console.log("capsuleControl apagado")
    });
}

const deleteCapsuleWatch = (capsuleWatchCodigo) => {
    return axios({
        method: 'delete',
        url: 'https://capsuledevdigital01.herokuapp.com/capsuleWatch' + capsuleWatchCodigo,
        params: {
            id: capsuleWatchCodigo
        }
    }).then(response => {
        console.log("capsuleWatch apagado")
    });
}
export {deleteMedico};
export {deletePaciente};
export {deleteMonitoramento};
export {deleteHospital};
export {deleteCapsuleControl};
export {deleteCapsuleWatch};