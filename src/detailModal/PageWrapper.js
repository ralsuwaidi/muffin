export default function PageWrapper(props) {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto">
        {/*content*/}
        <div className="border-0 w-screen h-screen DetailModal-height shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
          {props.children}
        </div>
      </div>
    </div>
  );
}
