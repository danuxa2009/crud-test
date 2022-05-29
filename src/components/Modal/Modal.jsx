import { useRef } from "react"
import './Modal.scss'

export const Modal = (
  { modalText,
    children,
    onCloseHandler
  }
  ) => {

  const modalRef = useRef()

  const closeModal = (e) => {
    if(modalRef.current === e.target) {
      onCloseHandler(false)
    }
  }

  return(
    <div className={'modal'} ref={modalRef} onClick={closeModal}>
      <div className={'modal-container'}>
        <p className={'modal-text'}>{modalText}</p>
        {children}
      </div>
    </div>
  )
}