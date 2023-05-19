import styled, { css } from 'styled-components';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';
import { BsList } from 'react-icons/bs';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { saveAs } from 'file-saver';

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isRoot = pathname === '/';
  const [selected, setSelected] = useState<string>('home');

  const handleDownload = () => {
    const blob = new Blob(["힝 속았지 ??????????"], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'hing.txt');
  };
  return (
    <Container>
      {isRoot ? (
        <></>
      ) : (
        <FooterWrapper>
          <FooterItem
            onClick={() => {
              setSelected('home');
              router.push('/home');
            }}
            selected={pathname === '/home' ? true : false}
          >
            <BiHomeAlt2 />
            <FooterItemText>Home</FooterItemText>
          </FooterItem>
          <FooterItem
            onClick={() => {
              setSelected('search');
              router.push('/search');
            }}
            selected={pathname === '/search' ? true : false}
          >
            <FiSearch />
            <FooterItemText>Search</FooterItemText>
          </FooterItem>
          <FooterItem
            onClick={() => {
              setSelected('comming');
              router.push('/coming');
            }}
            selected={selected === 'comming' ? true : false}
          >
            <MdOutlineVideoLibrary />
            <FooterItemText>Coming Soon</FooterItemText>
          </FooterItem>
          <FooterItem
            onClick={() => {
              handleDownload();
            }}
            selected={selected === 'donwloads' ? true : false}
          >
            <HiDownload />
            <FooterItemText>Downloads</FooterItemText>
          </FooterItem>
          <FooterItem
            onClick={() => {
              setSelected('more');
            }}
            selected={selected === 'more' ? true : false}
          >
            <BsList />
            <FooterItemText>More</FooterItemText>
          </FooterItem>
        </FooterWrapper>
      )}
    </Container>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 375px;
  height: 48px;
  background-color: #121212;
  margin: 0 auto;
`;
const FooterItemText = styled.p`
  font-size: 10px;
  margin-top: 0;
`;
const FooterItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? '#E0E0E0' : '#757575')};
  font-size: 25px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #bdbdbd;
    ${FooterItemText} {
      color: #bdbdbd;
    }
  }

  ${(props) =>
    props.selected &&
    css`
      color: #e0e0e0;

      ${FooterItemText} {
        color: #e0e0e0;
      }

      &:hover {
        color: #e0e0e0;
        ${FooterItemText} {
          color: #e0e0e0;
        }
      }
    `}
`;
const Container = styled.div``;
