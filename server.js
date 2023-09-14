const express = require('express');
const path = require('path')
require('dotenv').config()
//import { PrismaClient } from '@prisma/client'
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client", "dist")))
app.get('/users', async (req, res) => {
    const users = await prisma.test1.findMany();
    res.json(users);
})
app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
})