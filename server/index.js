const express = require('express')
const cors = require('cors')
const axios = require('axios')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')

// 从环境变量读取端口配置
const PORT = process.env.VUE_APP_API_PORT || process.env.PORT || 13579

const app = express()

// CORS配置
app.use(cors({
  origin: '*',
  credentials: true
}))

app.use(express.json())

// 获取歌手信息
app.get('/songAuthor', async (req, res) => {
  try {
    const { uid } = req.query
    console.log('🎤 获取歌手信息, UID:', uid)

    const response = await axios.get(`http://node.kg.qq.com/personal?uid=${uid}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })

    // 个人主页返回的是UTF-8，直接使用
    const html = response.data
    const $ = cheerio.load(html, {
      decodeEntities: false
    })

    // 使用更灵活的选择器
    let authorName = $('.my_show__name').text().trim()
    let authorImg = $('.my_show__photo img').attr('src')
    let level = $('.my_show__grade').text().trim()
    let songCount = $('#ugc').text().trim()

    // 如果没找到，尝试其他选择器
    if (!authorName) {
      authorName = $('[class*="name"]').first().text().trim()
    }
    if (!authorImg) {
      authorImg = $('.my_show__photo img').attr('src') || $('img[src*="qlogo.cn"]').first().attr('src')
    }

    // 清理songCount中的换行和空格
    if (songCount) {
      songCount = songCount.replace(/\s+/g, ' ').trim()
    }

    console.log('📋 歌手信息:', {
      authorName,
      authorImg,
      level,
      songCount
    })

    res.json({
      name: authorName || '未知歌手',
      img: authorImg || '',
      level: level || '',
      songCount: songCount || '0首歌曲'
    })
  } catch (error) {
    console.error('❌ Error in /songAuthor:', error.message)
    res.status(500).json({ error: error.message })
  }
})

// 获取歌词
app.get('/songLyric', async (req, res) => {
  try {
    const { ksongmid } = req.query
    const url = `http://node.kg.qq.com/cgi/fcgi-bin/fcg_lyric?jsonpCallback=callback_0&outCharset=utf-8&format=json&ksongmid=${ksongmid}`
    const response = await axios.get(url)
    res.send(response.data)
  } catch (error) {
    console.error('Error in /songLyric:', error.message)
    res.status(500).json({ error: error.message })
  }
})

// 获取歌曲列表
app.get('/list', async (req, res) => {
  try {
    const { uid, page = 1, size = 10 } = req.query
    const url = `http://node.kg.qq.com/cgi/fcgi-bin/kg_ugc_get_homepage?type=get_ugc&start=${page}&num=${size}&share_uid=${uid}`
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      transformResponse: [(data) => data]
    })
    // 将GBK编码转换为UTF-8
    const decodedData = iconv.decode(Buffer.from(response.data), 'gbk')
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.send(decodedData)
  } catch (error) {
    console.error('Error in /list:', error.message)
    res.status(500).json({ error: error.message })
  }
})

// 获取歌曲详情
app.get('/song', async (req, res) => {
  try {
    const { shareId, ksongmid } = req.query
    console.log('🎵 获取歌曲详情, shareId:', shareId, 'ksongmid:', ksongmid)

    // 支持两种方式：shareid 或 ksongmid
    let url
    if (ksongmid) {
      url = `http://node.kg.qq.com/cgi/fcgi-bin/fcg_read_info?outCharset=utf-8&v=4&ksong_mid=${ksongmid}`
    } else if (shareId) {
      url = `http://cgi.kg.qq.com/fcgi-bin/kg_ugc_getdetail?inCharset=GB2312&outCharset=utf-8&v=4&shareid=${shareId}`
    } else {
      return res.status(400).json({ error: '缺少参数：需要 ksongmid 或 shareId' })
    }

    const response = await axios.get(url, {
      responseType: 'arraybuffer'
    })
    // 将GBK编码转换为UTF-8
    const decodedData = iconv.decode(Buffer.from(response.data), 'gbk')
    res.set('Content-Type', 'application/json; charset=utf-8')
    res.send(decodedData)
  } catch (error) {
    console.error('❌ Error in /song:', error.message)
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`🎵 GG Music Server running on http://localhost:${PORT}`)
})

module.exports = app
