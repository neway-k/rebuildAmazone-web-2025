import React from "react";
import { useContext, useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Orders.module.css";

import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";

import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  // console.log(user, cart);
  useEffect(() => {
    if (!user) {
      console.log("👤 No user, clearing orders");
      setOrders([]);
      return;
    }
    console.log("👤 Current user:", user.uid);

    // ✅ Build query: users/{uid}/orders ordered by created desc
    const q = query(
      collection(db, "users", user.uid, "orders"),
      orderBy("created", "desc")
    );

    // ✅ Listen for real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((orderDoc) => ({
        id: orderDoc.id,
        ...orderDoc.data(),
      }));
      console.log("📦 Orders snapshot:", data);
      setOrders(data);
    });

    return () => unsubscribe();
  }, [user]);

  //old code ???

  //     {
  //     db.collection("users")
  //       .doc(user.uid)
  //       .collection("orders")
  //       .orderBy("created", "desc")
  //       .onSnapshot((snapshot) => {
  //         console.log(snapshot);
  //         setOrders(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         );
  //       });
  //   } else {
  //     setOrders([]);
  //   }
  // }, []);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.Orders_container}>
          <h2>Your Orders</h2>
          {/* ordered items */}
          <div>
            {orders.length === 0 ? (
              <p style={{ padding: "20px" }}>No orders yet.</p>
            ) : (
              orders?.map((eachOrder) => (
                <div key={eachOrder.id}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.basket?.map((order) => (
                    <ProductCard flex={true} key={order.id} product={order} />
                  ))}
                </div>
              ))
            )}

            {/* {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID:{eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    <ProductCard flex={true} key={order.id} product={order} />;
                  })}
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
