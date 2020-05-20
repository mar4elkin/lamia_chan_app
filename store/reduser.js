const uri = 'http://192.168.88.186:8000'

//Default Redux data
const initialState = {
    //Api links
    apiLinks: {
      mainLink: uri,
      manga: uri +"/api/v1/manga/",
      news:  uri +"/api/v1/news/",
      tags:  uri +"/api/v1/tag/",
      chapters: uri +"/api/v1/chapter/",
      tokenCheck: uri +"/api/v1/check",
      tokenRefresh: uri +"/api/v1/refresh/",
      tokenGetter: uri +"/api/v1/token/",
      userInfo: uri +"/api/v1/userinfo/",
      userCreate: uri +"/api/v1/create/"
    }
}

const reduser = (state = initialState, action) => {
    const newState = {...state}

    return newState
}

export default reduser