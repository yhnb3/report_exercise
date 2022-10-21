import { atom } from 'recoil'
import store from 'store'
import { IItem } from 'types/data.d'

export const basketState = atom<IItem[]>({
  key: 'basketState',
  default: store.get('basket') || [],
})
