import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter();
  const tabLists = [
    {
      id: 0,
      name: 'Home',
      src: ['/icons/home.svg', '/icons/home_selected.svg'],
      link: '/home',
    },
    {
      id: 1,
      name: 'Search',
      src: ['/icons/search.svg', '/icons/search_selected.svg'],
      link: '/search',
    },
    {
      id: 2,
      name: 'Coming Soon',
      src: ['/icons/play.svg', '/icons/play_selected.svg'],
      link: '/home',
    },
    {
      id: 3,
      name: 'Downloads',
      src: ['/icons/download.svg', '/icons/download_selected.svg'],
      link: '/home',
    },
    {
      id: 4,
      name: 'More',
      src: ['/icons/more.svg', '/icons/more_selected.svg'],
      link: '/home',
    },
  ];
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleTabClick = (idx: number) => {
    if (idx <= 1) {
      setCurrentTab(idx);
    }
  };
  return (
    <div className="tab-container">
      {tabLists.map(({ id, name, link, src }) => {
        const selected: boolean = currentTab === id;
        return (
          <Link
            href={link}
            key={id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="tab"
              onClick={() => {
                handleTabClick(id);
              }}
            >
              {selected ? (
                <Image
                  src={src[1]}
                  alt={name}
                  width={20}
                  height={20}
                  key={id}
                />
              ) : (
                <Image
                  src={src[0]}
                  alt={name}
                  width={20}
                  height={20}
                  key={id}
                />
              )}

              <span
                className={`tab__text ${
                  selected ? 'selected' : 'not-selected'
                }`}
              >
                {name}
              </span>
            </div>
          </Link>
        );
      })}
      <style jsx>{`
        .tab-container {
          width: 375px;
          height: 64px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: rgb(18, 18, 18);
          position: fixed;
          bottom: 0px;
        }
        .tab {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 1rem;
        }
        .selected {
          color: white;
        }

        .not-selected {
          color: #878787;
        }

        .tab__text {
          font-size: 0.5rem;
          margin-top: 0.2rem;
          text-decoration: none;
        }

        a {
          width: fit-content;
          text-decoration: none;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
