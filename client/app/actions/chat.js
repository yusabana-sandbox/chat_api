import { HELLO_WORLD_NAME_UPDATE } from '../constants/chat'

export const updateName = (text) => ({
  type: HELLO_WORLD_NAME_UPDATE,
  text,
})
