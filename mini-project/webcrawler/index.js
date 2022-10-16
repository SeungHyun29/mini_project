// 여기어때 크롤링 위법 사례: https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/

import puppeteer from 'puppeteer'
import mongoose from 'mongoose'
import { Starbucks } from './models/starbucks.model.js'

// 몽고DB 접속
mongoose.connect("mongodb://localhost:27017/mydocker04")

async function startCrawling() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 }) //다 시간이 걸리는 작업들이라 await 해 줘야 됨
    await page.goto("https://www.starbucks.co.kr/menu/drink_list.do") //페이지로 이동
    await page.waitForTimeout(1000) //html 코드가 페이지에 저장됨

    for(let i = 1; i<=30; i++) {
        const img = await page.$eval(
            `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(16) > ul > li:nth-child(${i}) > dl > dt > a > img`, 
            (img) => img.src
        )
    
        const name = await page.$eval(
            `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(16) > ul > li:nth-child(${i}) > dl > dd`,
            (el) => el.textContent
        )
    
        console.log(`img: ${img}, name: ${name}`)


        const starbucks = new Starbucks({
            img: img,
            name: name
        })
        console.log (starbucks)
        await starbucks.save()


            
    }

    

    await browser.close()

    
}

startCrawling()