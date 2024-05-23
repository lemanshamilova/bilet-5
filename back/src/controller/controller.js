const Products = require("../models/model");

//!get Data
const getAllData = async (req, res) => {
  const products = await Products.find();
  res.send(products);
};

//! get Data by Id

const getById = async (req, res) => {
  const getElem = await Products.find({ _id: req.params.id });
  res.send(getElem);
};
//! delete Data

const deleteById = async (req, res) => {
  await Products.findOneDelete({ _id: req.params.id });
  res.send("deleted");
};

//! Update Data

const patchById = async (req, res) => {
  const newProducts = await Products.findOneUpdate(
    { _id: req.params.id },
    req.body
  );
  res.send(newProducts);
};

//! Replace Data

const putById = async (req, res) => {
  const newProducts = await Products.findOneReplace(
    { _id: req.params.id },
    req.body
  );
  res.send(newProducts);
};

//! post Data

const postData=async (req,res)=>{
    const obj=req.body
    const newProducts=await new Products(obj)
    newProducts.save()
    res.send("succes")
}

module.exports={getAllData,postData,deleteById,patchById,putById,getById}