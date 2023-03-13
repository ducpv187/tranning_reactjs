export const SectionEdit = ({ onChangeEdit, itemEdit, onClickEdit }) => {
  return (
    <div>
      <h1> Sua phan tu </h1>
      <input
        name="name"
        onChange={onChangeEdit}
        defaultValue={itemEdit?.name}
      />
      <input
        name="price"
        onChange={onChangeEdit}
        defaultValue={itemEdit?.price}
      />
      <button onClick={onClickEdit}> OK sửa</button>
    </div>
  );
}
