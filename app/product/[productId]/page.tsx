import Container from "@/app/components/Container"
import ProductDetails from "./ProductDetails"
import { products } from "@/utils/products"

interface IPrams {
    productId?: string
}

const Product = ({ params }: { params: IPrams }) => {
    
    const product = products.find((item)=> item.id === params.productId)

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product} />
            </Container>
        </div>
    )
}

export default Product;