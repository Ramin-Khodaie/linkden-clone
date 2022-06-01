export const doLikeUnlike = (like, userid)=>{    
    if(like.includes(userid)){
        return like.filter(l=>l !== userid)
    }else{
        return [...like, userid]
    }
}