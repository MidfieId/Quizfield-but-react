function Home() {
  return (
    <div className="bg-violet-900 h-screen w-screen  ">
      <h1 className="text-4xl font-bold text-cyan-300 pl-5 pt-3">Quizfield</h1>
      <div className="flex justify-center h-1/2 w-screen items-center content-center ">
        <p className="text-center  text-cyan-300 text-2xl   w-8/12 border-8 rounded-lg p-3 border-black block ">
          Welcome to Quizfield!, its a mini and (wait for it) fun quiz game!
          made by three rookie webdevs that decided to be productive one night.
          Good luck and check the githubs at the bottom of the page! (~_~)♡
        </p>
      </div>
      <div className="flex justify-center">
        <button className=" text-2xl text-center block w-4/12 bg-cyan-100  text-cyan-500  border-4 rounded-lg p-3 border-black ">
          Start Quiz!
        </button>
      </div>
    </div>
  );
}

export default Home;
