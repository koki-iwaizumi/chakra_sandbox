import { ChakraProvider } from "@chakra-ui/react";
import { OutlinedButton } from "./components/OutlinedButton";
import { PullDownMenu } from "./components/PullDownMenu";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  size: {
    m: "30px",
  },
});

function App() {
  return (
    <div style={{ margin: 20 }}>
      <ChakraProvider theme={theme}>
        <div>
          <OutlinedButton text={"キャンセル"} m={1} />
          <OutlinedButton text={"保存"} m={2} />
          <OutlinedButton text={"削除"} m={[1, 2]} />
        </div>
        <div>
          <PullDownMenu text={"キャンセル"} m={1} />
          <PullDownMenu text={"保存"} m={2} />
          <PullDownMenu text={"削除"} m={[1, 2]} />
        </div>
      </ChakraProvider>
    </div>
  );
}

export default App;
