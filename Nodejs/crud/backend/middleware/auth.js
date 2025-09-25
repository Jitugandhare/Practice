const jwt = require('jsonwebtoken');



const auth = async (req, res, next) => {
    try {
        const token=req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({msg:"No Token"})
        }
        jwt.verify(token,'practice',(err,decoded)=>{
             if (err) {
                return res.status(403).json({ msg: "Invalid or expired token" });
            }

            req.user=decoded;
            next();
        })

    } catch (error) {
        return res.status(500).json({msg:"something went wrong",error:error.message})
    }
}


module.exports=auth