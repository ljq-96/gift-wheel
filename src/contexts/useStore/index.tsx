import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { TargetType } from '../../types'

const StoreContext = createContext(null)

export type StoreState = [
  { target: TargetType; running: boolean },
  { setTarget?: (type: TargetType) => void; setRunning: (state: boolean) => void }
]

export function useStore(): StoreState {
  return useContext(StoreContext)
}

export default function StoreProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState(TargetType.男友)
  const [running, setRunning] = useState(false)

  return (
    <StoreContext.Provider
      value={[
        { target, running },
        { setTarget, setRunning },
      ]}
    >
      {children}
    </StoreContext.Provider>
  )
}
