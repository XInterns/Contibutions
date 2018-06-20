var paginate=require('./paginate')

const _taginfo=(req,res)=>{
    const connection = req.app.get('sql-connection');
    var tag= req.query.tag;
    

var query="SELECT * FROM info WHERE mesage LIKE '%"+tag+"%'";
con.query(query,function(err,result,fields){
    if (err) throw err;
   else{
    response= paginate(req,result);
    res.send(response);

   } 

});
};
module.exports = _taginfo;
