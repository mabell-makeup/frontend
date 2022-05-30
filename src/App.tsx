import './App.css';
import User from './components/atoms/User/User'
import { QueryClient, QueryClientProvider } from 'react-query';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./constants/style";
import { TextInputCore } from './components/atoms/TextInputCore/TextInputCore';

export const App = () => {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
      <div css={styles.container}>
      <header css={css({ gridArea: "header", background: "#900" })}>mabell</header>
      <div css={css({ gridArea: "left", background: "#090" })}>Left</div>
      <div css={css({ gridArea: "content", background: "#009" })}>
        <TextInputCore />
        <User />
      </div>
      <div css={css({ gridArea: "right", background: "#990" })}>Right</div>
      <footer css={css({ gridArea: "footer", background: "#099" })}>Footer</footer>
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
