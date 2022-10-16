//const express = require('express')
import express from "express"
import {checkValldationPhone,getToken,sendTokenToSMS} from './phone.js'
import {checkValidationEmail,getWelcomeTemplate,sendTemplateToEmail} from './email.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import cors from 'cors'
import mongoose from "mongoose"
import { Token } from "./models/token.model.js"
import { User } from "./models/user.model.js"
import { Starbucks } from "./models/starbucks.model.js"
import { getOpenGraph } from "./scraping.js"
import { changeNumber } from "./changenumber.js"


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));



app.post('/user', async (req,res) => {
    const openGraph = await getOpenGraph(req.body.prefer)
    const change = await changeNumber(req.body.personal)

    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        personal: change,
        prefer: req.body.prefer,
        pwd: req.body.pwd,
        phone: req.body.phone,
        og: openGraph

    })

    const result1 = await Token.findOne({phone: req.body.phone})
    const { email, name } = await req.body

        // 1. 이메일이 정상인지 확인 (1-존재여부, 2-"@"포함 여부")
        const isValid = checkValidationEmail(email)
        if(isValid === false) return
        
    
        // 2. 가입환영 템플릿 만들기
        const mytemplate = getWelcomeTemplate({name})


    console.log(result1)
    if (result1 === null || result1.isAuth === false) {    
        res.status(422).send("에러!! 핸드폰 번호가 인증되지 않습니다.")
    } else {
        await Token.updateOne({phone: req.body.phone},{isAuth: true})
        // res.send(true)
        await user.save()
        // 3. 이메일에 가입 환영 템플릿 전송하기
        await sendTemplateToEmail(email, mytemplate)

         // 2. 저장 결과 응답 주기
        const id = await User.findOne({phone: req.body.phone})
        res.send(id._id)
    }



})


app.get('/users', async (req, res) => {
    const result = await User.find()
    // 2. 꺼내온 결과 응답 주기
    res.send(result)
    })


app.post('/tokens/phone', async (req,res) => {
    
    const myphone = req.body.phone
    //1. 휴대폰 번호 자릿수 맞는지 확인하기
    const isValid = checkValldationPhone(myphone)
    if(isValid === false){
        return
    } 

    //2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken()
    //3. 핸드폰 번호에 토큰 전송하기
    const result = await Token.findOne({phone: req.body.phone})
    if (result !== null) {
        const token = await Token.updateOne({phone: req.body.phone},{token:mytoken})
    } else {
        const token = new Token({
            token: mytoken,
            phone: req.body.phone,
            isAuth: false
        })
        await token.save()
    
    }

    sendTokenToSMS(myphone,mytoken)
    res.send("핸드폰으로 인증 문자가 전송되었습니다.")
})

app.patch('/tokens/phone', async (req, res) => {
    const result1 = await Token.findOne({phone: req.body.phone})
    const result2 = await Token.findOne({token: req.body.token})
    
    if (result1 === null) {
        res.send(false)
    } else if (result2 === null) {
        res.send(false)
    } else if (result2.token === req.body.token && result2.isAuth === false) {
        await Token.updateOne({token: req.body.token},{isAuth: true})
        res.send(true)
    }
    }
)


app.get("/starbucks", async (req,res) => {
    const starbucks = await Starbucks.find()
    res.send(starbucks)
})

// 몽고DB 접속
mongoose.connect("mongodb://my-database:27017/mydocker04")

// Backend API 서버 오픈
app.listen(3000, () => {
    console.log(`프로그램을 켜는데 성공했어요`)
})