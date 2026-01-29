const {Pool} = require("pg")
const getFeedback = async (req, res) => {
  const pool = new Pool({
   user:"postgres",
   password:"22041997Ta",
   host:"localhost",
   port:5433,
   database:"feedback_management"  
  })
  const client = await pool.connect()
  try{ 
   await client.query("BEGIN")
   const query = {
    text:"SELECT * FROM feedback",
   }
   const pgSQL = await client.query(query)
   await client.query("COMMIT")
   return res.json({data:pgSQL.rows})  
 }catch(error){
   return res.status(400).json({message:error.message})  
 }
}
module.exports = {getFeedback}