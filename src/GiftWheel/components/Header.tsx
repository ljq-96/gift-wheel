/** @jsxImportSource @emotion/react */
import { GithubFilled, ManOutlined, WomanOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Button, Radio, Segmented, Space, theme } from 'antd'
import { useStore } from '../../contexts/useStore'
import { TargetType } from '../../types'

function Header() {
  const [{ target, running }, { setTarget }] = useStore()
  const {
    token: { colorPrimary },
  } = theme.useToken()
  return (
    <div
      css={css({
        position: 'relative',
        padding: 20,
        textAlign: 'center',
      })}
    >
      <div css={css({ fontSize: 20, fontWeight: 600, color: colorPrimary })}>如何奖励你的{TargetType[target]}</div>
      <Space
        css={css({
          position: 'absolute',
          right: 20,
          top: 20,
        })}
      >
        <Segmented
          disabled={running}
          onChange={setTarget}
          options={[
            { value: TargetType.男友, icon: <ManOutlined /> },
            { value: TargetType.女友, icon: <WomanOutlined /> },
          ]}
        />
        <Button type='dashed' icon={<GithubFilled />} />
      </Space>
    </div>
  )
}

export default Header
