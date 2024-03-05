import jwt from  'jsonwebtoken';


const generateTokenAndSendCookie = (userId, res) => {
    const token =jwt.sign({ userId },process.env.jwt_secret,{
        expiresIn: '15d'
    })
    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,//prevent xss attacks
        sameSite:"strict",//csrf attacks
        secure : process.env.NODE_ENV !== 'development'
    });
};

export default generateTokenAndSendCookie;