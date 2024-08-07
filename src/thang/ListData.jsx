export const ListData = ({ data, onClickEdit, onClickDelete }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{ marginBottom: "20px" }}
        >
          <div>gia tien : {item.price}</div>
          <div>Ten sp : {item.name}</div>
          <button onClick={() => onClickEdit(item)}>ICON sửa</button>

          <button
            onClick={() => onClickDelete(item)}
            style={{ marginLeft: "20px" }}
          >
            Xóa thằng này de
          </button>
        </div>
      ))}
    </div>
  );
};
