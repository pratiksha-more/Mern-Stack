import Header from "./component/header/Header";
import Home from "./component/home/Home";

import { Box } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
