import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { TargetType } from '../../types'

const StoreContext = createContext(null)

export type StoreState = [{ target: TargetType }, { setTarget?: (type: TargetType) => void }]

export function useStore(): StoreState {
  return useContext(StoreContext)
}

export default function StoreProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState(TargetType.boyfriend)

  return <StoreContext.Provider value={[{ target }, { setTarget }]}>{children}</StoreContext.Provider>
}
