import { css } from "@emotion/css"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import { disableScroll, enableScroll } from "../../../helper/scrollControl"
import { Button } from "../../atoms/Button/Button"
import { Modal } from "./Modal"

export default {
    title: "molecules/Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>

const dummyText = (
    <>
        <p>この文章はオーバーレイより下に表示されます。</p>
        <p>アリスは川辺でおねえさんのよこにすわって、なんにもすることがないのでとても退屈（たいくつ）しはじめていました。一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。「絵や会話のない本なんて、なんの役にもたたないじゃないの」とアリスは思いました。そこでアリスは、頭のなかで、ひなぎくのくさりをつくったら楽しいだろうけれど、起きあがってひなぎくをつむのもめんどくさいし、どうしようかと考えていました（といっても、昼間で暑いし、とってもねむくて頭もまわらなかったので、これもたいへんだったのですが）。そこへいきなり、ピンクの目をした白うさぎが近くを走ってきたのです。</p>
        {/* eslint-disable-next-line no-irregular-whitespace */}
        <p>それだけなら、そんなにめずらしいことでもありませんでした。さらにアリスとしては、そのうさぎが「どうしよう！　どうしよう！　ちこくしちゃうぞ！」とつぶやくのを聞いたときも、それがそんなにへんてこだとは思いませんでした（あとから考えてみたら、これも不思議に思うべきだったのですけれど、でもこのときには、それがごく自然なことに思えたのです）。でもそのうさぎがほんとうに、チョッキのポケットから懐中時計（かいちゅうどけい）をとりだしてそれをながめ、そしてまたあわててかけだしたとき、アリスもとびあがりました。というのも、チョッキのポケットなんかがあるうさぎはこれまで見たことがないし、そこからとりだす時計をもっているうさぎなんかも見たことないぞ、というのに急に気がついたからです。そこで、興味（きょうみ）しんしんになったアリスは、うさぎのあとを追っかけて野原をよこぎって、それがしげみの下の、おっきなうさぎの穴にとびこむのを、ぎりぎりのところで見つけました。次のしゅんかんに、アリスもそのあとを追っかけてとびこみました。</p>
        <p>いったいぜんたいどうやってそこから出ようか、なんてことはちっとも考えなかったのです。うさぎの穴は、しばらくはトンネルみたいにまっすぐつづいて、それからいきなりズドンと下におりていました。それがすごくいきなりで、アリスがとまろうとか思うひまもあればこそ、気がつくとなにやら深い井戸みたいなところを落っこちているところでした。</p>
        <p>井戸がとっても深かったのか、それともアリスの落ちかたがゆっくりだったのかもしれません。だってアリスは落ちながら、まわりを見まわして、これからどうなっちゃうんだろうと考えるだけの時間がたっぷりあったからです。まずは下をながめて、どこに向かおうとしているのかを見きわめようとしました。でも暗すぎてなにも見えません。それから井戸の横のかべを見てみました。</p>
    </>
)

const Template: ComponentStory<typeof Modal> = () => {
    const [visible, setVisible] = useState(true)
    const onClose = () => {
        setVisible(false)
        enableScroll()
    }
    const onOpen = () => {
        setVisible(true)
        disableScroll()
    }

    return (
        <div className={css({padding: 10})}>
            <Button onClick={onOpen}>モーダルを表示する</Button>
            {dummyText}
            {visible && (
                <Modal className={css({display: "flex", flexFlow: "column", justifyContent: "center"})}>
                    <p>モーダルのサンプル</p>
                    <p>モーダル表示中はスクロールができません。</p>
                    <Button onClick={onClose}>閉じる</Button>
                </Modal>
            )}
        </div>
    )
}

export const Dafult = Template.bind({})
