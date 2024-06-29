type Props = {
  children: React.ReactNode;
  onHandleModal: React.MouseEventHandler<HTMLDivElement>;
  // modal: IModal;
}

export interface IModal {
  type: "error" | "loading" | "copy" | "hidden";
  message?: string;
};

export const Modal = (props: Props) => {
  return (
    <div className="w-screen h-screen fixed flex justify-center items-center top-0 left-0">
      <div className="w-full h-full bg-slate-900 opacity-15" onClick={props.onHandleModal}></div>
      {props.children}
    </div>
  );
};