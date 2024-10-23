import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

import Modal from "./Modal";
import EditProductForm from "./EditProductForm";
import api from "../configs/axios";
import { getProducts } from "../services/user";

import styles from "./ProductItem.module.css";
import { e2p, sp } from "../utils/numbers";

function ProductItem({ data }) {
  const { id, name, price, quantity } = data;
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const { refetch } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const deleteHandler = async () => {
    try {
      await api.delete(`/products/${id}`);
      refetch();
      return toast.success("محصول با موفقیت حذف شد.");
    } catch (err) {
      return toast.error("هنگام حذف کردن محصول مشکلی پیش آمد.");
    }
  };

  const editHandler = async (data) => {
    try {
      await api.put(`/products/${id}`, data);
      setEditModal(false);
      refetch();
      return toast.success("محصول با موفقیت بروزرسانی شد.");
    } catch (err) {
      return toast.error("هنگام ثبت اطلاعات محصول مشکلی پیش آمد.");
    }
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{e2p(quantity)}</td>
        <td>{sp(price)} هزار تومان</td>
        <td colSpan="2">{id}</td>
        <td>
          <div>
            <button onClick={() => setEditModal(true)}>
              <svg style={{ fill: "none", width: "20px", height: "20px" }}>
                <use href="/src/assets/icons/static_symbol.svg#icon-edit"></use>
              </svg>
            </button>
            <button onClick={() => setDeleteModal(true)}>
              <svg style={{ fill: "none", width: "20px", height: "20px" }}>
                <use href="/src/assets/icons/static_symbol.svg#icon-trash"></use>
              </svg>
            </button>
          </div>
        </td>
      </tr>
      {deleteModal && (
        <Modal>
          <div className={styles.deleteModal}>
            <div>
              <svg style={{ fill: "none", width: "96px", height: "98px" }}>
                <use href="/src/assets/icons/static_symbol.svg#icon-close"></use>
              </svg>
            </div>
            <div>
              <p>آیا از حذف این محصول مطمئن هستید؟</p>
              <div>
                <button onClick={deleteHandler}>حذف</button>
                <button onClick={() => setDeleteModal(false)}>لغو</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {editModal && (
        <Modal>
          <EditProductForm
            data={data}
            setEditModal={setEditModal}
            editHandler={editHandler}
          />
        </Modal>
      )}
    </>
  );
}

export default ProductItem;
