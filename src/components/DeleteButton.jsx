import { Button } from '@mantine/core';

const DeleteButton = ({ handleDelete }) => {
    return <Button
        variant="filled"
        color="red"
        size="xl"
        radius="xl"
        onClick={handleDelete}>
        Clear
    </Button>;
}

export default DeleteButton