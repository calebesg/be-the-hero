import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'

import { Container } from './style'

export default function Success({ message }) {
  return (
    <Container>
      <FiCheckCircle color="#E02041" size={54} />

      <h1>
        Parabéns, Seu código de acesso:
        <span> "{message}"</span>
      </h1>

      <Link to="/" className="button">Entrar agora</Link>
    </Container>
  )
}