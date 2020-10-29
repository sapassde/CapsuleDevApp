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

const getHospitais = () => {
    return axios({
        method: 'get',
        url: 'https://capsuledevdigital01.herokuapp.com/hospital'
    })
}

const getCapsuleControl = () => {
    return axios({
        method: 'get',
        url: 'https://capsuledevdigital01.herokuapp.com/capsuleControl'
    })
}

const getMedicos = () => {
    return axios({
        method: 'get',
        url: 'https://capsuledevdigital01.herokuapp.com/medico'
    })
}

const getCapsuleWatch = () => {
    return axios({
        method: 'get',
        url: 'https://capsuledevdigital01.herokuapp.com/capsuleWatch'
    })
}
export {getPacientes}
export {getMonitoramentos}
export {getHospitais}
export {getCapsuleControl}
export {getMedicos}
export {getCapsuleWatch}