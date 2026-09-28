import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const productTemplate = {
  id: 0,
  title: "Product Title",
  description: "Product Description",
  price: 0,
  image: "https://via.placeholder.com/70",
};

const productSeeds = Array.from({ length: 10 }, (_, i) => ({
  ...productTemplate,
  id: i,
  title: `${productTemplate.title} ${i}`,
  price: Math.floor(Math.random() * 100000),
}));

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

function Money({ amount }: { amount: number }) {
  return <span>{amount.toLocaleString()} F CFA</span>;
}

function Product({ title, description, price, image, id }: Product) {
  /**
   * Product Card look like:
   *
   * [image as cover]
   * [title in small font]
   * [price in bold]
   * [Button: Add to Cart (show on card hover)]
   *
   * Entire card should be clickable to go to product detail page
   */
  return (
    <Card className="shadow-none rounded w-56">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded w-full"
        />
      </CardHeader>
      <CardContent className="p-2">
        <p className="text-sm">{title}</p>
        <p className="font-bold">
          <Money amount={price} />
        </p>
      </CardContent>
      <CardFooter>
        <button>Add to Cart</button>
      </CardFooter>
    </Card>
  );
}

type CatalogGridProps = {
  products: Product[];
};

function DesktopCatalogGrid({ products }: CatalogGridProps) {
  return (
    <div className="shadow-md rounded max-w-screen-lg mx-auto bg-background p-2">
      <div className="flex flex-wrap justify-start gap-4 mx-auto">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

function MobileCatalogGrid({ products }: CatalogGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

function TabletCatalogGrid({ products }: CatalogGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <div className="bg-gray-200">
      <div className="container p-2">
        <div className="grid ">
          <div className="hidden lg:block">
            <DesktopCatalogGrid products={productSeeds} />
          </div>
          <div className="block lg:hidden">
            <MobileCatalogGrid products={productSeeds} />
          </div>
          <div className="hidden md:block lg:hidden">
            <TabletCatalogGrid products={productSeeds} />
          </div>
        </div>
      </div>
    </div>
  );
}
