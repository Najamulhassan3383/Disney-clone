import styled from "styled-components";

import React from "react";

function Home() {
  return <Big>very big home is here, where are you buddy?</Big>;
}

export default Home;

const Big = styled.div`
  font-size: 100px;
  margin-top: 70px;
`;
