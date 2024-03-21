import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;

  font-weight: bold;

  border: 0;
  border-radius: 8px;
  cursor: pointer;

  padding: 1rem;

  transition: background-color 0.1s;
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  color: ${({ theme }) => theme['gray-100']};

  background: ${({ theme }) => theme['green-500']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  color: ${({ theme }) => theme.white};

  background: ${({ theme }) => theme['red-500']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['red-700']};
  }
`
