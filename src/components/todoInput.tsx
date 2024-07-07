import { TextInput, ActionIcon, rem} from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

type params = {
    handleAdd: any
    input: string
    setInput: any
}

const TodoInput = ({handleAdd, input, setInput}:params) => {
    return (
        <TextInput
        styles={{
            input:{outline: '4px solid black', fontFamily:'monospace', fontWeight:'bold', fontSize:'24px'}
        }}
            radius={"xs"}
            size={"lg"}
            placeholder="New Item..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e:any) => e.key === 'Enter' ? handleAdd(e) : false}
            rightSectionWidth={42*2}
            rightSection={
                <div style={{display:'flex', gap: rem(12), paddingRight:"20%" }}>
                    <ActionIcon
                        style={{outline: '2px solid black'}}
                        variant="outline" size={"lg"} radius="xs" color="black"
                    >
                        <IconPlus style={{ width: rem(32), height: rem(32) }} stroke={3} color="black" onClick={handleAdd} />
                        
                    </ActionIcon>
                </div>
            }
        />
    )
}

export default TodoInput