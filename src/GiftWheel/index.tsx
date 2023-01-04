/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { theme } from 'antd'
import { useStore } from '../contexts/useStore'
import Content from './components/Content'
import Header from './components/Header'

function GiftWheel() {
  const [{ target }, { setTarget }] = useStore()
  const {
    token: { colorPrimary, colorPrimaryBg },
  } = theme.useToken()
  return (
    <div>
      <Global
        styles={{
          body: {
            backgroundColor: colorPrimaryBg,
          },
          'button:focus': 'none',
        }}
      />
      <Header />
      <Content />
    </div>
  )
}

export default GiftWheel
