import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import {
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
  SelectItem,
  Textarea,
  Chip,
  Image,
} from "@heroui/react";

import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  Package,
} from "lucide-react";

const AdminProdcuts = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Classic Black T-Shirt",
      category: "T-Shirts",
      price: 29.99,
      stock: 45,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      description: "Classic black cotton t-shirt.",
    },
    {
      id: 2,
      name: "Premium White Shirt",
      category: "Shirts",
      price: 49.99,
      stock: 23,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
      description: "Premium white formal shirt.",
    },
    {
      id: 3,
      name: "Casual Denim Jacket",
      category: "Jackets",
      price: 79.99,
      stock: 12,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      description: "Modern casual denim jacket.",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  const categories = [
    "T-Shirts",
    "Shirts",
    "Jeans",
    "Jackets",
    "Shoes",
    "Accessories",
  ];

  const productSections = [
    "All Products",
    "Shirts",
    "Bottoms",
    "Shoes",
    "Accessories",
  ];
  // Open Add Product Modal
  const handleAddProduct = () => {
    setEditingProduct(null);

    setFormData({
      name: "",
      category: "",
      price: "",
      stock: "",
      image: "",
      description: "",
    });

    onOpen();
  };

  // Open Edit Product Modal
  const handleEditProduct = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      image: product.image,
      description: product.description,
    });

    onOpen();
  };

  // Form input change
  const handleChange = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // Create / Update Product
  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.stock
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingProduct) {
      // UPDATE
      setProducts((previous) =>
        previous.map((product) =>
          product.id === editingProduct.id
            ? {
              ...product,
              ...formData,
              price: Number(formData.price),
              stock: Number(formData.stock),
            }
            : product
        )
      );
    } else {
      // CREATE
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      };

      setProducts((previous) => [newProduct, ...previous]);
    }

    onOpenChange();
  };

  // DELETE
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    setProducts((previous) =>
      previous.filter((product) => product.id !== id)
    );
  };

  // SEARCH
  const filteredProducts = products.filter((product) => {
    const searchValue = search.toLowerCase();

    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  return (
    <AdminLayout>
    <div className="p-6">
       
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Products
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your store products
          </p>
        </div>

        <Button
          color="primary"
          startContent={<Plus size={18} />}
          onPress={handleAddProduct}
        >
          Add Product
        </Button>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <Card>
          <CardBody>
            <div className="flex items-center gap-4">

              <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                <Package size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Total Products
                </p>

                <p className="text-2xl font-bold">
                  {products.length}
                </p>
              </div>

            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center gap-4">

              <div className="p-3 rounded-xl bg-green-100 text-green-600">
                <Package size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  In Stock
                </p>

                <p className="text-2xl font-bold">
                  {products.filter((product) => product.stock > 0).length}
                </p>
              </div>

            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center gap-4">

              <div className="p-3 rounded-xl bg-red-100 text-red-600">
                <Package size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Out of Stock
                </p>

                <p className="text-2xl font-bold">
                  {products.filter((product) => product.stock === 0).length}
                </p>
              </div>

            </div>
          </CardBody>
        </Card>

      </div>

      {/* Product Categories */}
      <div className="flex flex-wrap gap-3 mb-6">

        {productSections.map((category) => (
          <Button
            key={category}
            variant={
              selectedCategory === category
                ? "solid"
                : "flat"
            }
            color={
              selectedCategory === category
                ? "primary"
                : "default"
            }
            onPress={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}

      </div>
      {/* Products Card */}
      <Card>

        <CardBody className="p-0">

          {/* Search */}
          <div className="p-5 border-b border-gray-200">

            <Input
              className="max-w-md"
              placeholder="Search products..."
              value={search}
              onValueChange={setSearch}
              startContent={
                <Search size={18} className="text-gray-400" />
              }
              variant="bordered"
            />

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead>
                <tr className="border-b bg-gray-50">

                  <th className="text-left px-6 py-4 font-semibold">
                    Product
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Category
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Price
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Stock
                  </th>

                  <th className="text-left px-6 py-4 font-semibold">
                    Status
                  </th>

                  <th className="text-right px-6 py-4 font-semibold">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredProducts.map((product) => (

                  <tr
                    key={product.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >

                    {/* Product */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-4">

                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 object-cover rounded-lg"
                        />

                        <div>
                          <p className="font-semibold">
                            {product.name}
                          </p>

                          <p className="text-xs text-gray-500 mt-1">
                            ID: {product.id}
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      {product.category}
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4 font-medium">
                      ${Number(product.price).toFixed(2)}
                    </td>

                    {/* Stock */}
                    <td className="px-6 py-4">
                      {product.stock}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">

                      {product.stock > 0 ? (
                        <Chip color="success" size="sm" variant="flat">
                          In Stock
                        </Chip>
                      ) : (
                        <Chip color="danger" size="sm" variant="flat">
                          Out of Stock
                        </Chip>
                      )}

                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-2">

                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          aria-label="View product"
                        >
                          <Eye size={17} />
                        </Button>

                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          color="primary"
                          aria-label="Edit product"
                          onPress={() => handleEditProduct(product)}
                        >
                          <Pencil size={17} />
                        </Button>

                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          color="danger"
                          aria-label="Delete product"
                          onPress={() => handleDelete(product.id)}
                        >
                          <Trash2 size={17} />
                        </Button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {filteredProducts.length === 0 && (
              <div className="py-16 text-center">

                <Package
                  size={40}
                  className="mx-auto text-gray-300"
                />

                <p className="mt-3 text-gray-500">
                  No products found
                </p>

              </div>
            )}

          </div>

        </CardBody>

      </Card>

      {/* Add / Edit Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        scrollBehavior="inside"
      >

        <ModalContent>

          {(onClose) => (
            <>
              <ModalHeader>
                {editingProduct
                  ? "Edit Product"
                  : "Add New Product"}
              </ModalHeader>

              <ModalBody>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <Input
                    label="Product Name"
                    placeholder="Enter product name"
                    isRequired
                    value={formData.name}
                    onValueChange={(value) =>
                      handleChange("name", value)
                    }
                  />

                  <Select
                    label="Category"
                    placeholder="Select category"
                    selectedKeys={
                      formData.category
                        ? [formData.category]
                        : []
                    }
                    onChange={(event) =>
                      handleChange(
                        "category",
                        event.target.value
                      )
                    }
                    isRequired
                  >
                    {categories.map((category) => (
                      <SelectItem key={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </Select>

                  <Input
                    label="Price"
                    placeholder="0.00"
                    type="number"
                    startContent="$"
                    isRequired
                    value={String(formData.price)}
                    onValueChange={(value) =>
                      handleChange("price", value)
                    }
                  />

                  <Input
                    label="Stock"
                    placeholder="0"
                    type="number"
                    isRequired
                    value={String(formData.stock)}
                    onValueChange={(value) =>
                      handleChange("stock", value)
                    }
                  />

                  <Input
                    label="Image URL"
                    placeholder="https://..."
                    className="md:col-span-2"
                    value={formData.image}
                    onValueChange={(value) =>
                      handleChange("image", value)
                    }
                  />

                  <Textarea
                    label="Description"
                    placeholder="Enter product description"
                    className="md:col-span-2"
                    value={formData.description}
                    onValueChange={(value) =>
                      handleChange("description", value)
                    }
                  />

                </div>

              </ModalBody>

              <ModalFooter>

                <Button
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>

                <Button
                  color="primary"
                  onPress={handleSubmit}
                >
                  {editingProduct
                    ? "Update Product"
                    : "Create Product"}
                </Button>

              </ModalFooter>
            </>
          )}

        </ModalContent>

      </Modal>

    </div>
    </AdminLayout>
  );
};

export default AdminProdcuts;