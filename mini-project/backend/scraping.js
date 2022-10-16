import axios from 'axios'
import cheerio from 'cheerio'


export async function getOpenGraph(contents) {
    const openGraph = {
        title: '',
        description: '',
        image: ''
    }

    if (contents.includes('http')) {
        let myHttpOg = ''
        contents.split(' ').forEach((el) => {
        if (el.startsWith('http')) {
            myHttpOg = el
        }
        })

    const html = await axios.get(myHttpOg)
    console.log(html.data)

    const $ = cheerio.load(html.data)
    $('meta').each((_, el) => {
      if (!$(el).attr('property')) return // 없으면 종료

        const key = $(el).attr('property').split(':')[1]
        const content = $(el).attr('content')
        openGraph[key] = content
        })
        
        
        
    }
    console.log(openGraph)

    return openGraph

}

// const contents = 'https://naver.com'
// getOpenGraph(contents)