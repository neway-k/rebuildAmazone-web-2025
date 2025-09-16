import React from "react";
import { categoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
const Category = () => {
  return (
    <section className={classes.Category__container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
};

export default Category;
