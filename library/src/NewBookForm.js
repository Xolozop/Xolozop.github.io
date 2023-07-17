import { Table } from "react-bootstrap";
export default function NewBookForm({ newBookHandler }) {
  /*const { register, handleSubmit, reset, formState, clearErrors } = useForm({
    shouldUnregister: true,
    defaultValues: { label: "" }
  }); */

  const handleSubmit = (event) => {
    event.preventDefault();
    newBookHandler(
      event.currentTarget.elements.authorInput.value,
      event.currentTarget.elements.titleInput.value,
      event.currentTarget.elements.placeInput.value,
      event.currentTarget.elements.readInput.checked
    );
    event.currentTarget.elements.authorInput.value = "";
    event.currentTarget.elements.titleInput.value = "";
    event.currentTarget.elements.placeInput.value = "";
    event.currentTarget.elements.readInput.checked = false; 
  };
    
    const showForm = (event) => {
        console.log(event.currentTarget);
        event.currentTarget.hidden = !event.currentTarget.hidden;
    }

  return (
    <form onSubmit={handleSubmit}>
        <Table bordered hover>
            <tbody>
                <tr>
                    <td><label htmlFor="authorInput">Автор: </label></td>
                    <td><input
                  placeholder="Имя Фамилия/Фамилия"
                  id="authorInput"
                  type="text"
                /></td>
                </tr>
                <tr>
                    <td><label htmlFor="titleInput">Название: </label></td>
                    <td><input placeholder="Название" id="titleInput" type="text" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="placeInput">Расположение: </label></td>
                    <td> <input placeholder="шкаф-полка-ряд" id="placeInput" type="text" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="titleInput">Прочитано: </label></td>
                    <td> <input id="readInput" type="checkbox" /></td>
                </tr>
                <tr><td colspan="2"><button type="submit">Добавить</button></td></tr>
            </tbody>
        </Table>
    </form>
  );
}