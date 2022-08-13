import React from "react";
import "./DetailModal.css";

export default function DetailModal(props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto">
          {/*content*/}
          <div className="border-0 w-screen h-screen DetailModal-height shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="p-2">
              {/*image and content*/}
              <img
                className="DetailModal-img rounded-xl"
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
              />
              <div className="py-4 px-8 ">
                <p className="text-xl font-semibold ">Pancake</p>
                <p className="text-gray-500 text-sm">
                  Additional text that describes what the food is and what makes it so amazing, 
                  can be written manually or gathered as an api
                </p>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.handleClose}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.handleClose}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
