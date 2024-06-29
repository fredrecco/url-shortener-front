const More = () => {
  return (
    <div className="min-h-96 w-full mt-40 flex justify-center">
      <div className="w-10/12 sm:w-[35rem] md:w-[40rem]">
        <div className="h-auto sm:h-52 bg-slate-50 shadow-lg p-3 flex flex-col justify-between">
          <h2 className="text-xl font-semibold">Want more? Subscribe now!</h2>
          <p className="text-justify text-lg mt-7 mb-7 opacity-90">Sign up now to get access to customized shortened links, detailed analytics, and other features.</p>
          <div className="my-3">
            <a className="bg-blue-500 active:bg-blue-700 hover:shadow-lg py-3 px-5 text-slate-50 rounded-sm font-semibold" href="#signup">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;