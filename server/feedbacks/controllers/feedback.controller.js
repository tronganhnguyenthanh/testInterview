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
const updateAIDraft = async (req, res) => {
  const pool = new Pool({
   user:"postgres",
   password:"22041997Ta",
   host:"localhost",
   port:5433,
   database:"feedback_management"  
  })
  const client = await pool.connect()
  try{
   const id = Number(req.params.id)
   const {draft} = req.body
   await client.query("BEGIN")
   const pgSQL = await client.query(`UPDATE feedback SET draft = $1 WHERE id = $2`, [draft, id])
   await client.query("COMMIT")
   if(res.status(201).json({data:"201 updated"})){
    await pgSQL.rows[0]
   } 
  }catch(error){
    return res.status(400).json({message:error.message})  
  }
}
const getFeedbackById = async (req, res) => {
  const pool = new Pool({
   user:"postgres",
   password:"22041997Ta",
   host:"localhost",
   port:5433,
   database:"feedback_management"  
  })
  const client = await pool.connect()
  try{
   const id = Number(req.params.id)
   await client.query("BEGIN")
   const pgSQL = await client.query(`SELECT * FROM feedback WHERE id = $1`, [id])
   return res.status(200).json(pgSQL.rows[0])
  }catch (error){
    return res.status(400).json({message:error.message})
  }  
}
module.exports = {
 getFeedback,
 updateAIDraft,
 getFeedbackById
}