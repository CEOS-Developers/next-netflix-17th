import Image from 'next/image';
import { transformScale } from '@/styles/theme';

const Header = () => {
  const MENU_LIST = ['TV Shows', 'Movies', 'My List'];

  return (
    <div className="wrapper">
      <div>
        <Image
          src={'/icons/netflix_logo.svg'}
          width={57}
          height={57}
          alt="logo"
        />
      </div>
      {MENU_LIST.map((menu) => {
        return <span key={menu}>{menu}</span>;
      })}

      <style jsx>
        {`
          .wrapper {
            position: absolute;
            top: 24px;

            width: 375px;
            height: 57px;
            padding: 0 20px;
            z-index: 99;
            background-color: transparent;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          span {
            color: white;
            font-size: 17.2px;
          }

          span:hover {
            ${transformScale}
          }
        `}
      </style>
    </div>
  );
};

export default Header;
