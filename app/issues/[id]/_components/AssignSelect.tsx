import { Select } from "@radix-ui/themes";

const AssignSelect = () => {
  return (
    <Select.Root defaultValue="1">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1"> Eastin </Select.Item>
          <Select.Item value="2">Sam</Select.Item>
          <Select.Item value="3" >
            Grape
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssignSelect;
