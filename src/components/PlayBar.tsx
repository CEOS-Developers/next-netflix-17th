import { flexCenter, transformScale } from '@/styles/theme';
import Image from 'next/image';

const PlayBar = () => {
  return (
    <div className="wrapper">
      <div className="iconWrapper">
        <Image src={'/icons/plus.svg'} width={24} height={24} alt="plus" />
        <span>My List</span>
      </div>
      <div className="iconWrapper">
        <button disabled>
          <Image
            src={'/icons/play_arrow.svg'}
            width={24}
            height={24}
            alt="play_arrow"
          />
          <span className="">Play</span>
        </button>
      </div>
      <div className="iconWrapper">
        <Image src={'/icons/info.svg'} width={24} height={24} alt="info" />
        <span>Info</span>
      </div>

      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 45px;
          display: flex;
          justify-content: center;
          margin-top: 13px;
          background-color: transparent;
        }

        .iconWrapper {
          ${flexCenter}
          margin: 0 21px;
          flex-direction: column;
          text-align: center;
        }

        .iconWrapper:hover {
          ${transformScale}
        }

        button {
          ${flexCenter}
          width: 110px;
          height: 45px;
          text-align: center;
          background-color: #c4c4c4;
          border-radius: 5.63px;
          cursor: pointer;
        }

        button span {
          margin-left: 15px;
          font-size: 20px;
          font-weight: 600;
          color: black;
        }

        span {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default PlayBar;
