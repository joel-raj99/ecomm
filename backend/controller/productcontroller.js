import product from '../model/productSchema.js';

export const createproduct = async (req, res) => {
    try {
        const { name, price, description, size, catorgize,imageUrl } = req.body;
        if (!name || !price || !description || !size || !catorgize||!imageUrl) {
            return res.status(200).json({ message: "product all successfully" });
        }
        // Check if product already exists
        const existingProduct = await product.findOne({ name });
        if (existingProduct) {
            return res.status(200).json({ message: "Product with this name already exists" });
        }
        const newproduct = new product({
            name,
            price,
            size,
            description,
            catorgize,
            imageUrl
        });
        const savedproduct = await newproduct.save();
        return res.status(200).json({
            status: true,
            message: 'Product has been created',
            productData: savedproduct
        })

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
}