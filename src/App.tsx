import { ConfigProvider } from 'antd'
import { useStore } from './contexts/useStore'
import GiftWheel from './GiftWheel'
import { Config } from './types'
import zhCN from 'antd/locale/zh_CN'
import 'antd/dist/reset.css'

function App() {
  const [{ target }] = useStore()
  return (
    <ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: Config.get(target).color } }}>
      <GiftWheel />
    </ConfigProvider>
  )
}

export default App
