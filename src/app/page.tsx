
import styles from '@/styles/Home.module.scss';

//
import Image from 'next/image';
import { Gallery } from '@/components/Gallery/Gallery';
import KanoText from '@/components/KanoText/KanoText';
import PhotoFrame from '@/components/PhotoFrame/PhotoFrame';

//
import kano10 from '@/assets/images/kano-10.png';
import kano11 from '@/assets/images/kano-11.jpg';
import weiAndKaa01 from '@/assets/images/wei-kaa-01.jpg';
import weiAndKaa03 from '@/assets/images/wei-kaa-03.png';
import weiAndKaaWish from '@/assets/images/wei-kaa-wish.jpg';
import TypewriterText from '@/components/TypewriterText/TypewriterText';

//約婚式順序
import seriousKaa from "@/assets/images/serious-kaa.jpg";
import ceremory from "@/assets/images/ceremory.jpg";
import ChambumonimOkasanKanoWei from "@/assets/images/chambumonim-okasan-kano-wei.jpg";
import remoteKyungBei from "@/assets/images/remote-weiche-parents-kano-wei.jpg";
import OkasanKaa from "@/assets/images/okasan-kaa-01.jpg";
import deepPraying from "@/assets/images/kyokaicho-samunim-wei-kaa.jpg";
import kawaiiminasan from '@/assets/images/kawaiiminasan.jpg';

//
import kaaAndBambichan from "@/assets/images/kaa-bambichan.jpg";
import bambi from "@/assets/images/bamni.jpg";
import kano14 from '@/assets/images/kano-14.jpg';
import weiAndKaa08 from "@/assets/images/wei-kaa-08.jpg";
import MemoriesBlock from '@/components/MemoriesBlock/MemoriesBlock';

//
const quality = 99;

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero 區塊 */}
      <section className={styles.hero} id="hero">
        <div className={styles.overlay}>
          <h1>超可愛的香乃網站 🐰</h1>
          <div><KanoText>香乃超可愛超可愛 💕</KanoText></div>
          <a href="#gallery-section" className={styles.scrollLink}>♡ 看更多回憶</a>
        </div>
      </section>

      {/* 照片牆區塊 */}
      <section id="gallery-section">
        <Gallery></Gallery>
      </section>

      <section className={styles.story} id="story">
        <h2>到目前(いままで) ✨</h2>
        <div className={styles.timeline}>

          {/* 第一段 */}
          <div className={styles.event}>
            <div className={styles.text}>
              <h3>2024.04.13</h3>
              <p>第一次見面，香乃好可愛，為什麼她可以那麼鎮定，我好緊張，完全說不出話。</p>
              <p>初めて会ったとき、香乃がすごく可愛かった。
                なんであんなに落ち着いていられるの？
                こっちは緊張しすぎて、まったく喋れなかったよ。</p>
            </div>
            <div className={styles.image}>
              {/* <img src={kano10.src} alt="散步陽光" /> */}
              <PhotoFrame>
                <Image src={kano10} alt="第一次見面" width={434} height={227} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          {/* 第二段 */}
          <div className={`${styles.event} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>2024.07.10</h3>
              <p>香乃先來台灣，我們一起去一中街，找了個座位一起吃點心，香乃好可愛(*≧∀≦*)</p>
              <p>香乃が先に台湾に来てくれて、一緒に一中街に行った。
              座って一緒におやつを食べて、やっぱり香乃、すごく可愛かった。(*≧∀≦*)</p>
            </div>
            <div className={styles.image + ' ' + styles.vertical}>
              {/* <img src={weiAndKaa03.src} alt="和香乃一起逛一中街" /> */}
              <PhotoFrame>
                <Image src={weiAndKaa03} alt="和香乃一起逛一中街" width={434} height={388} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>
          
          {/* 第三段 */}
          <div className={styles.event}>
            <div className={styles.text}>
              <h3>2024.07.11</h3>
              <p>在薰衣草森林許願，我寫下了希望香乃健康平安的願望，香乃好可愛(*≧∀≦*)</p>
              <p>ラベンダーの森で願いごとを書いた。
              「香乃が健康で、安全に過ごせますように」って書いたんだ。
              香乃、本当に可愛かった。(*≧∀≦*)</p>
            </div>
            <div className={styles.image + ' ' + styles.vertical}>
              {/* <img src={weiAndKaaWish.src} alt="和香乃一起在薰衣草森林許願" /> */}
              <PhotoFrame>
                <Image src={weiAndKaaWish} alt="和香乃一起在薰衣草森林許願" width={434} height={578} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          <div className={`${styles.event} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>2024.07.11</h3>
              <p>在薰衣草森林，香乃不知道在笑什麼，好奸詐的樣子，好可愛好可愛好可愛WAAAA(*≧∀≦*)</p>
              <p>ラベンダーの森で、香乃がなんで笑ってるのか分からないけど、
              その顔がちょっとズルくて、すごく可愛い、可愛い、可愛い、WAAAA(*≧∀≦*)</p>
            </div>
            <div className={styles.image + ' ' + styles.vertical}>
              {/* <img src={kano11.src} alt="香乃不知道在笑什麼" /> */}
              <PhotoFrame>
                <Image src={kano11} alt="香乃不知道在笑什麼" width={434} height={578} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>
          
          <div className={styles.event}>
            <div className={styles.text}>
              <h3>2024.07.12</h3>
              <p>高美濕地，香乃的頭髮被風吹的樣子超級漂亮，好漂亮超級漂亮超級漂亮(*≧∀≦*)(*≧∀≦*)(*≧∀≦*)</p>
              <p>高美湿地で、風に吹かれてる香乃の髪がとっても綺麗だった。
              綺麗すぎて、ほんと綺麗すぎた(*≧∀≦*)(*≧∀≦*)(*≧∀≦*)</p>
            </div>
            <div className={styles.image + ' ' + styles.vertical}>
              {/* <img src={weiAndKaa01.src} alt="和香乃一起去高美濕地" /> */}
              <PhotoFrame>
                <Image src={weiAndKaa01} alt="和香乃一起去高美濕地" width={434} height={578} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          {/* Japan  */}
          <div className={`${styles.event} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>2024.09.16</h3>
              <p>認真的香乃，香乃總是非常的認真，辛苦了可愛的香乃。</p>
              <p>真剣な香乃。
                香乃はいつも一生懸命で、ほんとうにえらいね。
                お疲れ様、可愛い香乃。</p>
            </div>
            <div className={styles.image}>
              {/* <img src={seriousKaa.src} alt="認真的香乃" /> */}
              <PhotoFrame>
                <Image src={seriousKaa} alt="認真的香乃" width={434} height={578} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.text}>
              <h3>2024.09.17</h3>
              <p>約婚式當天，我覺得有點緊張。</p>
              <p>約婚式の日、ちょっと緊張してた。</p>
            </div>
            <div className={styles.image}>
              {/* <img src={ceremory.src} alt="約婚式現場" /> */}
              <PhotoFrame>
                <Image src={ceremory} alt="約婚式現場" width={434} height={287} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          <div className={`${styles.event} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>2024.09.17</h3>
              <p>媽媽和香乃坐在對面。</p>
              <p>ママと香乃が向かい合って座ってた。</p>
            </div>
            <div className={styles.image}>
              {/* <img src={OkasanKaa.src} alt="媽媽和香乃" /> */}
              <PhotoFrame>
                <Image src={OkasanKaa} alt="媽媽和香乃" width={434} height={287} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>


          <div className={styles.event}>
            <div className={styles.text}>
              <h3>2024.09.17</h3>
              <p>在天父母、真父母、及爸爸媽媽面前敬拜，難以想像我能夠行走上這條道路。</p>
              <p>天の父母様、真の父母様、そして両親の前で敬拝して、
              まさか自分がこの道を歩んでいるなんて、信じられなかった。</p>
            </div>
            <div className={styles.image}>
              {/* <img src={ChambumonimOkasanKanoWei.src} alt="向天父母真父母及爸爸媽媽敬拜" /> */}
              <PhotoFrame>
                <Image src={ChambumonimOkasanKanoWei} alt="向天父母真父母及爸爸媽媽敬拜" width={434} height={287} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          <div className={`${styles.event} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>2024.09.17</h3>
              <p>在台灣的爸爸媽媽也錄好了影片，傳到了日本約婚式現場，我們也進行了遠端的敬拜。</p>
              <p>台湾の両親も動画を撮って、日本の約婚式の会場に送ってくれた。
              リモートで一緒に敬拝したよ。</p>
            </div>
            <div className={styles.image}>
              {/* <img src={remoteKyungBei.src} alt="向台灣的爸爸媽媽進行遠端敬拜" /> */}
              <PhotoFrame>
                <Image src={remoteKyungBei} alt="向台灣的爸爸媽媽進行遠端敬拜" width={434} height={287} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.text}>
              <h3>2024.09.17</h3>
              <p>教會長夫婦代表進行深刻的禱告，我偷偷的留了一些些眼淚。</p>
              <p>教会の長夫妻が代表で深い祈りをしてくれて、
              僕はこっそり少しだけ涙を流した。</p>
            </div>
            <div className={styles.image}>
              {/* <img src={deepPraying.src} alt="教會長夫婦代表進行深刻的禱告" /> */}
              <PhotoFrame>
                <Image src={deepPraying} alt="教會長夫婦代表進行深刻的禱告" width={434} height={287} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          <div className={`${styles.event} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>2024.09.17</h3>
              <p>與大家進行大合照，我覺得大家很可愛，日本人比我想像中的有趣親切。</p>
              <p>みんなで集合写真を撮って、みんな可愛かった。
              日本の人たちって、思ってたよりずっと優しくて面白かった。</p>
            </div>
            <div className={styles.image}>
              {/* <img src={kawaiiminasan.src} alt="大合照" /> */}
              <PhotoFrame>
                <Image src={kawaiiminasan} alt="大合照" width={434} height={287} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>
          
          <div className={styles.event}>
            <div className={styles.text}>
              <h3>2024.09.19</h3>
              <p>香乃與斑比，香乃好像小朋友，好可愛(*≧∀≦*)</p>
              <p>香乃とバンビ。
              香乃はまるで子どもみたいで、ほんとに可愛かった。(*≧∀≦*)</p>
            </div>
            <div className={styles.image}>
              {/* <img src={kaaAndBambichan.src} alt="香乃與斑比，香乃好像小朋友" /> */}
              <PhotoFrame>
                <Image src={kaaAndBambichan} alt="香乃與斑比，香乃好像小朋友" width={434} height={578} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          <div className={`${styles.event} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>2024.09.19</h3>
              <p>小奈良鹿(*≧∀≦*)</p>
              <p>ちいさな奈良の鹿(*≧∀≦*)</p>
            </div>
            <div className={styles.image}>
              {/* <img src={bambi.src} alt="小奈良鹿" /> */}
              <PhotoFrame>
                <Image src={bambi} alt="小奈良鹿" width={434} height={578} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>
          
          <div className={styles.event}>
            <div className={styles.text}>
              <h3>2024.01.19</h3>
              <p>再次去日本和香乃見面，在火車上遇見香乃了，WAAAAIII(*≧∀≦*)</p>
              <p>また日本に行って、香乃に会って、電車の中で香乃に会えた。
              WAAAAIII(*≧∀≦*)</p>
            </div>
            <div className={styles.image}>
              {/* <img src={kano14.src} alt="在火車上找到香乃" /> */}
              <PhotoFrame>
                <Image src={kano14} alt="在火車上找到香乃" width={434} height={578} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>

          <div className={`${styles.event} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>2024.01.19</h3>
              <p>一起去京都旅遊，香乃好可愛我的天啊(*≧∀≦*)(*≧∀≦*)</p>
              <p>一緒に京都に旅行して、香乃が可愛すぎて、
              もう、天にも昇る気分だった(*≧∀≦*)(*≧∀≦*)</p>
            </div>
            <div className={styles.image}>
              {/* <img src={weiAndKaa08.src} alt="京都旅遊" /> */}
              <PhotoFrame>
                <Image src={weiAndKaa08} alt="京都旅遊" width={434} height={325} quality={quality}></Image>
              </PhotoFrame>
            </div>
          </div>
          
        </div>
      </section>

      <div className={styles.futureSection}>
        <div className={styles.futureCircle}>
          <span>Coming <br /> Soon</span>
        </div>
        <p className={styles.futureText}>
          之後在一起去旅行吧!!
        </p>
        <p className={styles.futureText}>
          これからも一緒に旅しようね。!!
        </p>
      </div>

      <MemoriesBlock></MemoriesBlock>

      <section className={styles.ending} id="ending">
        <h2>
          寫給<KanoText>香乃</KanoText>的話 💌
        </h2>
        
        <TypewriterText text={`覺 得自己好幸運可以遇到香乃。
          香乃真的是非常溫柔、非常善良的人。
          以前只有自己一個人的時候總是想著「一定要準備好所有事情才能去祝福」
          突然覺 得以前的自己實在是太愚笨了，因為根本不可能有完全準備好的一天。
          要是當時繼續拖延，一定會錯過香乃的呀!!!!
          我真的是非常幸運的人，天父母真的對我非常好。
          我很感謝天父母願意相信我，將祂的女兒交給我。
          為了不辜負天父母的盼望，我會繼續努力，謝謝你香乃!!`}
        />

        <br />
      
        <TypewriterText text={`香乃に出会えたこと、本当に自分は幸運だなと思います。
          香乃は本当にとても優しくて、とても思いやりのある人です。

          昔は、ひとりでいる時に「すべてが準備できてから祝福に進もう」と思っていました。
          でも今は、その考えがいかに愚かだったかに気づきました。
          だって、すべてが完璧に準備できる日なんて、きっと来ないから。

          もしあの時、準備ができていないからと先延ばしにしていたら、
          きっと香乃に出会うチャンスを逃していたと思います。

          本当に、自分は幸運な人間です。
          天の父母様は、自分にとても良くしてくださいました。

          こんな自分を信じて、天の父母様の娘を託してくださったこと、心から感謝しています。
          その期待に応えられるように、これからも努力し続けます。

          香乃、本当にありがとう。`}
        />
      </section>

      {/* 結尾區塊 */}
      <section className={styles.footer}>
        <p>From WeiChe ❤️ To <KanoText>香乃</KanoText></p>
        <p>☀️☀️ 香乃好可愛 ☀️☀️</p>
      </section>
    </div>
  );
}
