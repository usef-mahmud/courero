import checkUserExist from "../DB/checkUserExist"

export const checkUserLoggedIn = async () => {
    if(await !localStorage.getItem('user_id')){
        return await false
    }else{
        let user_id = await localStorage.getItem('user_id')
        return await checkUserExist(user_id)
    }
}