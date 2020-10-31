const fakeAuth={
    isAuthenticated:false,
    login(cb){
        this.isAuthenticated=true
        setTimeout(cb,1000) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) // fake async
      }
}
export default fakeAuth;