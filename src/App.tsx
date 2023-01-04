import { ConfigProvider } from 'antd'
import { useStore } from './contexts/useStore'
import GiftWheel from './GiftWheel'
import { ThemeColor } from './types'

function App() {
  const [{ target }] = useStore()
  return (
    <ConfigProvider theme={{ token: { colorPrimary: ThemeColor.get(target) } }}>
      <GiftWheel />
    </ConfigProvider>
  )
}

export default App
