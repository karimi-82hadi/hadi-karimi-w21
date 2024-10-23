import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../services/user";

import styles from "./AccountPage.module.css";
import ProductItem from "../components/ProductItem";

function AccountPage() {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log({ data, isPending, error });
  return (
    <div className={styles.container}>
      <div className={styles.headerSearch}>
        <div className={styles.headerInput}>
          <svg style={{ fill: "none", width: "24px", height: "24px" }}>
            <use href="/src/assets/icons/static_symbol.svg#icon-search"></use>
          </svg>
          <input type="text" placeholder="جستجو کالا" />
        </div>
        <div className={styles.headerProfile}>
          <div style={{ display: "flex" }}>
            <img src="/src/assets/images/user.png" alt="هادی کریمی" />
          </div>
          <div>
            <p>هادی کریمی</p>
            <span>مدیر</span>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainHeader}>
          <div>
            <svg style={{ fill: "none", width: "30px", height: "30px" }}>
              <use href="/src/assets/icons/static_symbol.svg#icon-setting"></use>
            </svg>
            <h2>مدیریت کالا</h2>
          </div>
          <button>افزودن محصول</button>
        </div>
        <div className={styles.mainContent}>
          <table>
            <thead>
              <tr>
                <th>نام کالا</th>
                <th>موجودی</th>
                <th>قیمت</th>
                <th colSpan="2">شناسه کالا</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((p) => (
                <ProductItem key={p.id} data={p} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
