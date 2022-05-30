import User from './components/atoms/User/User'
import { QueryClient, QueryClientProvider } from 'react-query';
import { css } from "@emotion/css"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./constants/style";
import { TextInputCore } from './components/atoms/TextInputCore/TextInputCore';

export const App = () => {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
      <header className={css({ gridArea: "header", background: "#900", display: "flex", alignItems: "center", padding: "0 20px" })}>
        <TextInputCore className={css({maxWidth: 200})} />
        <h1 className={css({margin: "auto"})}>mabell</h1>
      </header>
      <div className={css({ gridArea: "left", background: "#090" })}>Left</div>
      <div className={css({ gridArea: "content", background: "#009" })}>
        <User />
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
