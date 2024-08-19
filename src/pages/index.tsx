export async function getServerSideProps(context) {
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
