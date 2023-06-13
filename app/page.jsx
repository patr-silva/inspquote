import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='emerald_gradient text-center'> Inspiring Quotes</span>
      </h1>
      <p className='desc text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam
        quaerat numquam adipisci!
      </p>

      <Feed />
    </section>
  );
};

export default Home;
