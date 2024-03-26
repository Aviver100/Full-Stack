import { DialogModal, useModal } from "react-dialog-confirm";

//in component
const { openModal } = useModal();

openModal(
  <DialogModal
    icon='success'
    title='Welcome'
    description={'welcome to react-dialog-confirm component'}
  />)
