import User from './components/atoms/User/User'
import { QueryClient, QueryClientProvider } from 'react-query';
import { css } from "@emotion/css"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./constants/style";
import { TextInputCore } from './components/atoms/TextInputCore/TextInputCore';
import { css } from "@emotion/react"
import { Button } from './components/atoms/Button/Button';
import { decrement, increment } from './slices/counter';
import { useAppDispatch, useAppSelector } from './helper/store';

export const App = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

  return (
      <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
      <header className={css({ gridArea: "header", background: "#900", display: "flex", alignItems: "center", padding: "0 20px" })}>
        <TextInputCore />
        <h1 className={css({margin: "auto"})}>mabell</h1>
      </header>
      <div className={css({ gridArea: "left", background: "#090" })}>Left</div>
      <div className={css({ gridArea: "content", background: "#009" })}>
        <User />
        <Button label="カウントアップ" onClick={() => dispatch(increment())} />
        <Button label="カウントダウン" onClick={() => dispatch(decrement())} />
        <h1>{count}</h1>
      </div>
      <div className={css({ gridArea: "right", background: "#990" })}>Right</div>
      <footer className={css({ gridArea: "footer", background: "#099" })}>Footer</footer>
    </div>
      </QueryClientProvider>
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
