/** @jsxImportSource @emotion/react */
import { ClassNames, css } from '@emotion/react'
import { useStore } from '../../contexts/useStore'
import { Config } from '../../types'
import runningImg from '../../assets/running.gif'
import stopImg from '../../assets/stop.png'
import { Fragment, useEffect, useRef } from 'react'
import { Button, theme } from 'antd'
import { useState } from 'react'

const girtOrder = [0, 1, 2, 3, 4, 6, 8, 10, 15, 14, 13, 12, 11, 9, 7, 5]

function Content() {
  const [{ target, running }, { setRunning }] = useStore()
  const [current, setCurrent] = useState(0)
  const [onStop, setOnStop] = useState(false)
  const timer = useRef(null)
  const {
    token: { colorPrimary },
  } = theme.useToken()

  useEffect(() => {
    if (running) {
      clearInterval(timer.current)
      let _current = current
      timer.current = setInterval(() => {
        if (_current >= Config.get(target).gifts.length - 1) {
          _current = 0
        } else {
          _current++
        }
        setCurrent(girtOrder[_current])
      }, 40)
    }
  }, [running])

  useEffect(() => {
    if (onStop) {
      clearInterval(timer.current)
      let frame = 25
      let _current = current
      const update = () => {
        if (_current >= Config.get(target).gifts.length - 1) {
          _current = 0
        } else {
          _current++
        }
        setCurrent(girtOrder[_current])
        frame -= Math.round(Math.random() + 1)
        if (frame > 0) {
          setTimeout(() => {
            update()
          }, 1000 / frame)
        } else {
          setOnStop(false)
          setRunning(false)
        }
      }
      update()
    }
  }, [onStop])

  return (
    <Fragment>
      <ClassNames>
        {({ css, cx }) => (
          <div
            css={css({
              display: 'grid',
              width: 400,
              margin: '0 auto',
              gridTemplateColumns: 'repeat(5, 80px)',
              gridTemplateRows: 'repeat(5, 80px)',
              gap: 10,
            })}
          >
            {Config.get(target).gifts.map((item, index) => (
              <div key={target + item + index}>
                <div
                  css={css([
                    {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      height: '100%',
                      padding: 10,
                      border: '2px solid #fff',
                    },
                    current === index && {
                      borderColor: colorPrimary,
                    },
                  ])}
                >
                  {item}
                </div>
              </div>
            ))}
            <div
              css={css({
                gridColumn: '2 / 5',
                gridRow: '2 / 5',
              })}
            >
              <img css={css({ width: '100%', height: '100%' })} src={running ? runningImg : stopImg} />
            </div>
          </div>
        )}
      </ClassNames>
      <div css={css({ textAlign: 'center', marginTop: 20 })}>
        <Button
          type='primary'
          disabled={onStop}
          onClick={() => {
            running ? setOnStop(true) : setRunning(true)
          }}
        >
          {running ? '停止' : '开始'}
        </Button>
      </div>
    </Fragment>
  )
}

export default Content
