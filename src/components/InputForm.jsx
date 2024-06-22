import { TextInput } from '@mantine/core';
import AddButton from "./AddButton"


function InputForm({handleSubmit, input, setInput}) {
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSubmit(e);
        }
      };
    
    return (
        <div>
        <TextInput
          variant="filled"
          size="xl"
          radius="xl"
          placeholder="New item..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={handleKeyDown}
        />
        <AddButton handleSubmit={handleSubmit}/>
        </div>
      );
}

export default InputForm
