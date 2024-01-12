import styled from "styled-components";
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 1%;
  @media (max-width: 768px) {
    padding: 2%;
  }
  gap: 2rem;
`;

const BoxLoading = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
`;
const BoxContent = styled.div`
  align-items: center;
  gap: 2%;
  display: flex;
`;

const HeaderBox = styled.div`
  height: 20rem;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(${require("../../assets/money.png")});
  background-repeat: no-repeat;
  flex-wrap: wrap;
  width: 100%;
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const BigNumberBox = styled.div`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
const BigNumber = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormBox = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export {
  PageWrapper,
  BoxContent,
  Title,
  HeaderBox,
  BigNumberBox,
  BigNumber,
  BoxLoading,
  FormBox,
};
