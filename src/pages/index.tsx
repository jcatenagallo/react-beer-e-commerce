export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/products',
      permanent: false,
    },
  };
}

const Home = () => {
  return null;
};

export default Home;
