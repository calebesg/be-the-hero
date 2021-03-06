import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import Success from '../../components/Success'

import { Container, FormAddOng } from './style'
import logoImg from '../../assets/logo.svg'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const [id, setId] = useState('')

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('/ongs', data)

      setId(response.data.id)

    } catch (err) {

      alert('Erro no cadastro tente novamente.')
    }

  }

  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro e ajude pessoas a encontrarem os casos de sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <FormAddOng onSubmit={handleRegister} >
          <input
            value={name}
            onChange={e => setName(e.target.value)} 
            placeholder="Nome da ONG" 
          />
          <input 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail" 
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)} 
            placeholder="Whatsapp" 
          />

          <div className="input-group">
            <input
              value={city}
              onChange={e => setCity(e.target.value)} 
              placeholder="Cidade" 
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)} 
              placeholder="UF" style={{ width: 80 }} 
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </FormAddOng>
      </div>

      {id && <Success message={id} />}

    </Container>
  )
}