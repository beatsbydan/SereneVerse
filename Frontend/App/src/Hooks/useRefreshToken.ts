import axios from 'axios'

type HookReturnType = {
    refresh: () => Promise<void>
}

const useRefreshToken = (): HookReturnType => {
    const refresh = async() => {
        axios.get('',{
            withCredentials: true
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return {
        refresh
    }
}

export default useRefreshToken