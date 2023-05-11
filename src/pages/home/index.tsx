// 메인 페이지

import MainImage from '@/components/MainImage';

const Home = () => {
  return (
    <div className="container">
      <MainImage />
      <style jsx>{`
        .container {
          background-color: black;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
