import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 80%;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    border-radius: 8px;

    padding: 2rem 1rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;

  color: ${({ theme }) => theme['green-500']};

  width: 4rem;

  overflow: hidden;

  display: flex;
  justify-content: center;
`
