import { useParams } from "react-router-dom";
import useLocalState from "../utils/LocalStorage";
import { Form } from "../components/FormElements/Form";

const EditToDo = () => {
    const [toDos, setToDos] = useLocalState("toDos", []);

    const toDoId = useParams().id;
    const currentToDo = toDos.find((toDo) => toDo.id === toDoId);

    return (
        <div>
            <Form
                formData={currentToDo}
                setFormData
            />
        </div>
    )
};

export default EditToDo;