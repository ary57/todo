import { TextInput, Flex } from '@mantine/core';
import AddButton from "./AddButton"


function InputForm({ handleSubmit, input, setInput }) {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <Flex
      mih={50}
      gap="lo"
      justify="center"
      align="center"
      direction={{ base: 'column', sm: 'row' }}
      wrap="wrap"
    >
      <TextInput
        variant="filled"
        size="xl"
        radius="xl"
        placeholder="New item..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={handleKeyDown}
      />
      <AddButton handleSubmit={handleSubmit} />
    </Flex>
  );
}

export default InputForm


function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
    </Flex>
  );
}