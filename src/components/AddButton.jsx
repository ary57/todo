import { Button } from '@mantine/core';

const AddButton = ({ handleSubmit }) => {
    return <Button
        variant="filled"
        color="teal"
        size="xl"
        radius="xl"
        onClick={handleSubmit}>
        Add
    </Button>;
}

export default AddButton