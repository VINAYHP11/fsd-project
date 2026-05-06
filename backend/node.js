const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}; 

const getProductBySearch = async(req,res)=>{
  try{
    let {title} = req.body;
    console.log(title)
    const medicine = await Product.findOne({title});

    if(medicine){
      res.status(200).json({
        message:"Medicine Fectched SuccessFully",
        medicine
      })
    }else{
      res.status(400).json({
        error:"No Such Medicine Exist"
      })
    }
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}; 

module.exports = {
  getProducts,
  getProductById,
  getProductBySearch
};