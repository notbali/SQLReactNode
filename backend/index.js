import express from "express"
import mysql from "mysql2"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"zXNxoHhd123@",
    database: "online_music_library"

})

app.get("/", (req,res)=>{
    res.json("blarghabo")
})

app.get("/albums", (req,res)=>{
    const q = "SELECT * FROM online_music_library.album"
    db.query(q, (err,data)=> {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("connected to backend!")
})