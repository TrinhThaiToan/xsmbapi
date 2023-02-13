

const Ketqua = require('../models/ketqua');

const getKetquas = async (req,res) => {

    
    const mTungay = req.query.tungay;
    const mDenngay = req.query.denngay;
    var tungay=null;
    var denngay=null;
    
   
    try {
        denngay=mDenngay.split("/")[2]+"-"+mDenngay.split("/")[1]+"-"+mDenngay.split("/")[0];
        
    } catch (error) {
        denngay=null;
    }
    try {
        tungay=mTungay.split("/")[2]+"-"+mTungay.split("/")[1]+"-"+mTungay.split("/")[0];
    } catch (error) {
        tungay=null;
    }
    var ketquas;
    //console.log("====>"+tungay);
    
    
    if (tungay!=null && denngay!=null) {
       
        
        ketquas = await Ketqua.find({
            ngayketqua: {
                '$gte': new Date(tungay),
                '$lt': new Date(denngay)
        }
    
        })
        //.sort({ngayketqua:'desc'})
        //.limit(30000)
        ;
       

        res.json({
            ok:true,
            ketquas,
        })
    
       } else if (tungay!=null && denngay==null) {
            //console.log(mFrom.slice(3))
            
            ketquas = await Ketqua.find({
                ngayketqua: {
                    '$gte': new Date(tungay),
                    '$lt': new Date(tungay)
            }
        
            })
            //.sort({ngayketqua:'desc'})
            //.limit(30000)
            ;
           
    
            res.json({
                ok:true,
                ketquas,
            })
        
        } else if (tungay==null && denngay!=null) {
            //console.log(mFrom.slice(3))
            
            ketquas = await Ketqua.find({
                ngayketqua: {
                    '$gte': new Date(denngay),
                    '$lt': new Date(denngay)
            }
        
            })
            //.sort({ngayketqua:'desc'})
            //.limit(30000)
            ;
           
    
            res.json({
                ok:true,
                ketquas,
            })
        
    
    } else { // Not a group message (No "AAA")
        ketquas = await Ketqua.find({
           
    
        })
        //.sort({ngayketqua:'desc'})
        //.limit(30000)
        ;
       

        res.json({
            ok:true,
            ketquas,
        })
    }

}

module.exports = {
    getKetquas
}