/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./constants/style";

export const App = () => {
  return (
    <div css={styles.container}>
      <header css={css({ gridArea: "header", background: "#900" })}>mabell</header>
      <div css={css({ gridArea: "left", background: "#090" })}>left</div>
      <div css={css({ gridArea: "content", background: "#009" })}>content</div>
      <div css={css({ gridArea: "right", background: "#990" })}>right</div>
      <footer css={css({ gridArea: "footer", background: "#099" })}>footer</footer>
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
