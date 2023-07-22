// import React, { useContext } from "react";
// import { UserContext } from "../../../context";
// import { Form, Modal, Select, Input } from "antd";

// const AddTransaction = () => {
//   const { showAddModal, setShowAddModal } = useContext(UserContext);

//   return (
//     <Modal
//       //   title={editable ? "Edit Transaction" : "Add Transection"}
//       open={showAddModal}
//       onCancel={() => setShowAddModal(false)}
//       footer={false}
//     >
//       <Form layout="vertical">
//         <Form.Item label="Amount" name="amount">
//           <Input type="text" />
//         </Form.Item>
//         <Form.Item label="type" name="type">
//           <Select>
//             <Select.Option value="income">Income</Select.Option>
//             <Select.Option value="expense">Expense</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Category" name="category">
//           <Select>
//             <Select.Option value="salary">Salary</Select.Option>
//             <Select.Option value="tip">Tip</Select.Option>
//             <Select.Option value="project">Project</Select.Option>
//             <Select.Option value="food">Food</Select.Option>
//             <Select.Option value="movie">Movie</Select.Option>
//             <Select.Option value="bills">Bills</Select.Option>
//             <Select.Option value="medical">Medical</Select.Option>
//             <Select.Option value="fee">Fee</Select.Option>
//             <Select.Option value="tax">TAX</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Date" name="date">
//           <Input type="date" />
//         </Form.Item>
//         <Form.Item label="Refrence" name="refrence">
//           <Input type="text" />
//         </Form.Item>
//         <Form.Item label="Description" name="description">
//           <Input type="text" />
//         </Form.Item>
//         <div className="d-flex justify-content-end">
//           <button type="submit" className="btn btn-primary">
//             {" "}
//             SAVE
//           </button>
//         </div>
//       </Form>
//     </Modal>
//   );
// };

// export default AddTransaction;
