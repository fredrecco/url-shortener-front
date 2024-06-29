import { useContext, useState } from "react";
import { startsWithHttp, urlValidate } from "../../components/utils/validate";
import { HistoryContext } from "../../context/history";
import GreaterThan from "../../common/icon/greater-than";
import { ModalContext } from "../../context/modal";

const GenerateUrl = () => {
  const [url, setUrl] = useState<string>("");
  const baseUrl = import.meta.env.VITE_SOME_BASE_URL;
  const key = import.meta.env.VITE_SOME_KEY;
  const modalContext = useContext(ModalContext);
  const historyContext = useContext(HistoryContext);

  const generate = (event: React.FormEvent) => {
    event.preventDefault();

    if (!urlValidate(url)) {
      modalContext?.onHandleModal();
      modalContext?.setModal({ type: "error", message: "Enter a valid URL." });
      return;
    }

    if (!baseUrl) {
      modalContext?.onHandleModal();
      modalContext?.setModal({ type: "error", message: "Base URL not found." });
      return;
    }

    if (!key) {
      modalContext?.onHandleModal();
      modalContext?.setModal({ type: "error", message: "Key not found." });
      return;
    }

    const formatedUrl = startsWithHttp(url);

    const token = import.meta.env.VITE_SOME_TOKEN;

    fetch(`${baseUrl}/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ expanded: formatedUrl }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // historyContext?.setValue((last) => [...last, response]);
      })
      .catch(() => {
        modalContext?.onHandleModal();
        modalContext?.setModal({ type: "error", message: "An error occurred while shortening URL." });
      })
      .finally(() => setUrl(""));
  };

  return (
    <div className="min-h-64 w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold tracking-wider">URL Shortener</h1>
      <form onSubmit={generate} className="flex mt-10 w-10/12 sm:w-[35rem] md:w-[40rem]">
        <input
          className="border border-solid border-teal-500 border-r-0 py-3 text-xl pl-4 rounded-l outline-teal-300 focus:outline outline-2 duration-100 w-full md:w-3/4"
          placeholder="Enter the link here"
          type="text"
          id="url"
          name="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <button className="bg-slate-700 py-3 px-4 rounded-r active:bg-slate-800 md:w-1/4 flex justify-center items-center hover:shadow-lg">
          <p className="hidden md:block text-slate-50">Shorten URL</p>
          <GreaterThan className="block md:hidden mt-1" />
        </button>
      </form>
    </div>
  );
};

export default GenerateUrl;
