import { createContext } from 'react'
import type { IpContextType } from '../types'

const IpContext = createContext<IpContextType | object>({})

export default IpContext
