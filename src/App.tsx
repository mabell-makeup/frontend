import './App.css';
import User from './components/atoms/User/User'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./constants/style";
import { Button } from './components/atoms/Button/Button';
import { decrement, increment } from './slices/counter';
import { useAppDispatch, useAppSelector } from './helper/store';

export const App = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div css={styles.container}>
            <header css={css({ gridArea: "header", background: "#900" })}>mabell</header>
            <div css={css({ gridArea: "left", background: "#090" })}>Left</div>
            <div css={css({ gridArea: "content", background: "#009" })}>
                <User />
                <Button label="カウントアップ" onClick={() => dispatch(increment())} />
                <Button label="カウントダウン" onClick={() => dispatch(decrement())} />
                <h1>{count}</h1>
            </div>
            <div css={css({ gridArea: "right", background: "#990" })}>Right</div>
            <footer css={css({ gridArea: "footer", background: "#099" })}>Footer</footer>
        </div>
    );
}

const styles = {
  container: css({
    display: "grid",
    gridTemplateAreas: `
        "header header header"
        "left content right"
        "footer footer footer"
    `,
    gridTemplateRows: `${HEADER_HEIGHT} minmax(calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT}), auto) ${FOOTER_HEIGHT}`,
    gridTemplateColumns: "236px 1fr 236px"
  })
}
