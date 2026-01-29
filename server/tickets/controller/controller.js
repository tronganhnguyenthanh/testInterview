const {Pool} = require("pg")
const addNewTicket = async (req, res) => {
  const pool = new Pool({
   user:"postgres",
   password:"22041997Ta",
   host:"localhost",
   port:5433,
   database:"ticket_management"  
  })
  const client = await pool.connect()
  try{
   const {id, firstName, lastName, date, purpose} = req.body
   await client.query("BEGIN")
   const query = {
    text:"INSERT INTO tickets(id, firstName, lastName, date, purpose) VALUES ($1, $2, $3, $4, $5)",
    values:[id, firstName, lastName, date, purpose]
   }
   const pgSQL = await client.query(query)
   await client.query("COMMIT")
   if(res.status(201).json({data:"201 created"})){
    await pgSQL.rows[0]
   } 
  }catch(error){
    return res.status(400).json({message:error.message})
  }
}
module.exports = {addNewTicket}