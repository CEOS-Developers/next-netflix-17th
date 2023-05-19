'use client';
import { useRouter } from "next/navigation";
import styled from "styled-components";

export const BackButton = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/home');
  }
  return (
    <>
      <BackButtonWrapper
      onClick = {handleOnClick}>x</BackButtonWrapper> 
    </>
  )
}
const BackButtonWrapper = styled.button`
  position: absolute;
  border: none;
  top: 5%;
  left: 90%;
  background: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
`;