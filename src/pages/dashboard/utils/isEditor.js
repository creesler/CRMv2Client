const isEditor = (user)=>{
    return ['editor'].includes(user?.role)
}

export default isEditor