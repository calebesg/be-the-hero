import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import { Container, Header, ListCasos } from './style'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  const [incidents, setIncidents] = useState([])

  const history = useHistory()

  const ongId = localStorage.getItem('ongID')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('/profile', {
        headers: {
          Authorization: ongId,
        }
      })

      setIncidents(response.data)
    }
    loadIncidents()
  }, [ongId])

  async function handleDeleteIncident(id) {
    try {
      
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))

    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.removeItem('ongID')
    localStorage.removeItem('ongName')

    history.push('/')
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incident/new">Adicionar novo caso</Link>
        <button onClick={handleLogout} >
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <ListCasos>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
      
            <strong>VALOR:</strong>
            <p>
              {
                Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})
                  .format(incident.value)
              }
            </p>

            <button onClick={() => handleDeleteIncident(incident.id)} >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ListCasos>
    </Container>
  )
}