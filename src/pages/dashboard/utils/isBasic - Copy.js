const isBasic = (user)=>{
    return ['basic'].includes(user?.role)
}

export default isBasic