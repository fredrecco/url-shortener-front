import { useContext } from "react";
import { HistoryContext } from "../../context/history";
import { ModalContext } from "../../context/modal";

const History = () => {
  const modalContext = useContext(ModalContext);
  const historyContext = useContext(HistoryContext);

  const baseUrl = import.meta.env.VITE_SOME_BASE_URL_CLIENT;

  const copyShort = (url: string) => {
    navigator.clipboard.writeText(url);

    modalContext?.onHandleModal();

    if (!modalContext?.isOpen) {
      modalContext?.setModal({ type: "copy", message: "URL copied to your clipboard." });
    }
  };

  return (
    <div className="w-full">
      <div className="w-10/12 sm:w-[35rem] md:w-[40rem] mx-auto">
        {historyContext && historyContext.value?.length > 0 && (
          historyContext.value.slice(-3).map((item, i) => {
            return (
              <div className="h-[120px] bg-slate-50 shadow-md rounded-md my-6" key={i}>
                <div className="h-full w-full">
                  <div className="flex flex-col justify-between p-2 h-full md:justify-center">
                    <div className="flex justify-between flex-wrap items-center md:h-full">
                      <div className="break-words max-w-full md:h-full md:flex md:flex-col md:justify-between">
                        <a
                          className="break-words text-base sm:text-base font-semibold"
                          href={`/${item.shortened}`}
                        >
                          {`${baseUrl}/${item.shortened}`}
                        </a>
                        <h4
                          title={item.expanded}
                          className="cursor-default hidden sm:block text-blue-950"
                        >
                          {item.expanded.length > 30 ? `${item.expanded.slice(0, 30)}...` : item.expanded}
                        </h4>
                      </div>
                      <div className="md:space-x-2 h-full">
                        <button
                          className="px-4 py-1 bg-cyan-600 active:bg-cyan-700 rounded-md text-slate-50 hover:opacity-95 hover:shadow-md"
                        >
                          Stats
                        </button>
                        <button
                          className="hidden md:inline-block px-4 py-1 bg-green-800 active:bg-green-900 rounded-md text-slate-50 hover:opacity-95 hover:shadow-md"
                          onClick={() => copyShort(`${baseUrl}/${item.shortened}`)}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <button
                      className="md:hidden bg-green-800 py-1 rounded-md text-slate-50 text-lg active:bg-green-900"
                      onClick={() => copyShort(`${baseUrl}/${item.shortened}`)}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            )
          }))}
      </div>
    </div>
  );
};

export default History;
