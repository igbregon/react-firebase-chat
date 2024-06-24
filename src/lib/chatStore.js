import {create} from 'zustand'
import { useUserStore } from './userStore'

export const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrenUserBlocked: false,
    isReceiverBlocked: false,
    changeChat: (chatId, user) =>{
        const currentUser = useUserStore.getState().currentUser

        //El usuario esta bloqueado
        if (user.blocked.includes(currentUser.id)){
            return set({
                chatId,
                user: null,
                isCurrenUserBlocked: true,
                isReceiverBlocked: false
            })
        }
        //El destinatario esta bloqueado
        else if (currentUser.blocked.includes(user.id)){
            return set({
                chatId,
                user: user,
                isCurrenUserBlocked: false,
                isReceiverBlocked: true
            })
        } else {
            return set({
                chatId,
                user,
                isCurrenUserBlocked: false,
                isReceiverBlocked: false
            })
        }
    },

    changeBlock: ()=>{
        set((state)=>({...state,isReceiverBlocked: !state.isReceiverBlocked}))
    }
}))
    