const mongoose = require('mongoose')

const OauthAccessTokenSchema = new mongoose.Schema({
    user_id: {
        type: String ,
    },
    name:{
        type: String ,
    },
    scopes:{
        type: String ,
        required: true
    },
    revoked:{
        type: Number 
    },
    expires_at:{
        type: Date ,
        // default: Date.now
    },

});

export const OauthAccessToken = mongoose.model('OauthAccessToken' , OauthAccessTokenSchema);
