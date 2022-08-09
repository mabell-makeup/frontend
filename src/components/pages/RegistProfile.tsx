import { css } from "@emotion/css"
import { useState } from "react"
import { Avatar } from "../atoms/Avatar/Avatar"
import { Button } from "../atoms/Button/Button"
import { Checkbox } from "../atoms/Checkbox/Checkbox"
import { DateInput } from "../molecules/DateInput/DateInput"
import { Select } from "../molecules/Select/Select"
import { TextInput } from "../molecules/TextInput/TextInput"

export const RegistProfile = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date())

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>プロフィール登録</h1>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>アカウント情報</h2>
                <div className={styles.avatarContainer}>
                    <Avatar />
                    <a href="#profile" className={css({fontSize: 12})}>プロフィール写真を変更</a>
                </div>
                <TextInput label="ニックネーム" />
                <Select label="性別" options={[{label: "女性", value: 0}, {label: "男性", value: 1}]} />
                <div>
                    <DateInput label="生年月日" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                    <Checkbox className={css({marginTop: 6})}>一般公開しない</Checkbox>
                </div>
                {/* TODO: textareaのinput typeを用意する */}
                <TextInput label="自己紹介" />
                <TextInput label="instagram URL" />
                <TextInput label="TikTok URL" />
                <TextInput label="YouTube URL" />
                <TextInput label="Twitter URL" />
            </div>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>ユーザー情報</h2>
                <Select label="パーソナルカラー" options={[{label: "ブルベ夏", value: 0}, {label: "ブルベ冬", value: 1}]} />
                <Select label="ヘアスタイル" options={[{label: "ベリーショート", value: 0}, {label: "ショート", value: 1}]} />
                <Select label="ファッションのジャンル" options={[{label: "カジュアル", value: 0}, {label: "ボーイッシュ", value: 1}]} />
            </div>
            <Button>mabellをはじめる</Button>
        </div>
    )
}

const styles = {
    container: css({
        display: "flex",
        flexDirection: "column",
        gap: 60,
        minWidth: 300,
        maxWidth: 500,
        padding: "60px 0 120px 0",
    }),
    title: css({
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold"
    }),
    formContainer: css({
        display: "flex",
        flexDirection: "column",
        gap: 40,
    }),
    formTitle: css({
        fontSize: 16,
        fontWeight: "bold"
    }),
    avatarContainer: css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
    })
}