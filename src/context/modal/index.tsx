import { Dispatch, SetStateAction, createContext, useState } from "react";
import { IModal, Modal } from "../../components/modal";

type ModalContextType = {
  setModal: Dispatch<SetStateAction<IModal>>;
  onHandleModal: () => void;
  isOpen: boolean;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<IModal>({ type: "hidden" });

  const onHandleModal = () => {
    setIsOpen((last) => {
      document.body.style.overflowY = !last ? "hidden" : "scroll";

      return !last;
    });

    setModal({
      type: isOpen ? "hidden" : modal.type,
      message: isOpen ? undefined : modal.message
    });
  };

  return (
    <ModalContext.Provider value={{ setModal, onHandleModal, isOpen }}>
      {isOpen && modal.type !== "hidden" && (
        <Modal onHandleModal={onHandleModal}>
          {modal.type === "error" && (
            <div className="w-72 h-28 bg-slate-50 border border-solid border-gray-300 shadow-2xl absolute rounded-md p-3 flex flex-col justify-between text-center">
              <h5 className="text-lg">{modal.message}</h5>
              <button
                className="bg-red-600 rounded-sm text-slate-50 cursor-pointer py-1 hover:shadow-md active:bg-red-900"
                onClick={onHandleModal}
              >
                Close
              </button>
            </div>
          )}
          {modal.type === "copy" && (
            <div className="w-72 h-28 bg-slate-50 border border-solid border-gray-300 shadow-2xl absolute rounded-md p-3 flex flex-col justify-between text-center">
              <h5 className="text-lg">{modal.message}</h5>
              <button
                className="bg-red-600 rounded-sm text-slate-50 cursor-pointer py-1 hover:shadow-md active:bg-red-900"
                onClick={onHandleModal}
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
};