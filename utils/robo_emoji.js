const log = console.log.bind(console)
const fetch = require('node-fetch')
const cheerio = require('cheerio')

const Emoji = function() {
    this.mask = ''
    this.emoji = ''
}


// 没有这个html 时候使用
const save_targer_html = html => {
        let fs = require('fs')
        const option = {
            encoding: 'utf-8'
        }
        let data = fs.writeFileSync('emoji.html', html, option)
    }
    // 下载这个html
const request_target_url = url => {
    fetch(url).then(res => {
        return res.text()
    }).then(data => {
        save_targer_html(data)
    })
}
const read_cache = file_name => {
    let fs = require("fs")
    const read = (err, data) => {
        if (!err) {
            log('readed')
            return data
        } else {
            log('没有找到去请求')
            const target_url = 'https://www.emojiall.com/zh-hans/categories/A'
            request_target_url(target_url)
        }
    }
    fs.readFile(file_name, 'utf-8', read)
}

const load_from_memory = file => {
    let fs = require('fs')
    let option = {
        encoding: 'utf-8'
    }
    let data = fs.readFileSync(file, option)
    return data
}
const emoji_pick = function(list) {
    var e = cheerio.load(list)
    var emoji = new Emoji()
    emoji.emoji = e('.emoji_card .emoji_font').text()
    emoji.mask = e('.emoji_card .emoji_name').text()
    return emoji
}
const save_emoji = emojis => {
        let fs = require('fs')
        var data = JSON.stringify(emojis, null, 2)
        fs.writeFileSync('./emoji.json', data, 'utf-8')
    }
    // 分析这个html 
const emoji_from_div = function() {
    var emoji = []
    var e = cheerio.load(load_from_memory('./emoji.html'))
    var col = e('.emoji_card_list').find('.col')
    var len = col.length
    for (let i = 0; i < len; i++) {
        let list = col[i]
            // 重点 不管怎么样一定要传递 html 给下一个函数， cheerio .load(只加载 html )
        let div = e(list).html()
        const em = emoji_pick(div)
        emoji.push(em)
    }
    return save_emoji(emoji)
}

const __main = _ => {
    // var file_name = './emoji.html'
    //  请求之前先读取是否 有目标文件
    // var html = read_cache(file_name)
    emoji_from_div()

}
__main()