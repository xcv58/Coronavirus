import '../styles.css'
import Head from 'next/head'
import Iframe from 'react-iframe'

const websites = [
  { name: '丁香园', url: 'https://3g.dxy.cn/newh5/view/pneumonia', },
  { name: '腾讯新闻', url: 'https://news.qq.com/zt2020/page/feiyan.htm', },
  { name: '百度', url: 'https://voice.baidu.com/act/newpneumonia/newpneumonia', },
  { name: '人民日报', url: 'https://activity.peopleapp.com/broadcast/', },
  { name: '搜狗搜索', url: 'https://sa.sogou.com/new-weball/page/sgs/epidemic' },
  { name: '梅斯', url: 'https://m.medsci.cn/wh.asp', },
]

export default () => {
  const iframes = websites.map(({ name, url }) => (
    <div
      key={url}
      className='website'
    >
      <a href={url} target='_blank'>{name}</a>
      <Iframe
        url={url}
        width='100%'
        className='iframe'
      />
    </div>
  ))
  return (
    <>
      <Head>
        <title>实时疫情信息聚合</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
      }}>
        {iframes}
      </div>
    </>
  )
}
