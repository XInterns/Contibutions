var paginate=require('./paginate')

const _taginfo=(req,res)=>{
    const connection = req.app.get('sql-connection');
    var tag= req.query.tag;
    

var query="SELECT * FROM info WHERE mesage LIKE '%"+tag+"%'";
connection.query(query,function(err,result){
    if (err) throw err;
   else{
    response= paginate(req,result);
    res.send(response);
   } 

});
};
module.exports = _taginfo;
