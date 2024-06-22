import { Button } from '@mantine/core';

const DeleteButton = ({handleDelete}) => {
  return <Button variant="filled" color="red" size="md" radius="xl" onClick={handleDelete}>Delete Checked Items</Button>;
}

export default DeleteButton