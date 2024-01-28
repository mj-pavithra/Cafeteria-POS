import React, { useState, useEffect } from "react";
import "../css/AddItem.css";
import { getDownloadURL, uploadBytesResumable , ref} from 'firebase/storage';
import { db, storage } from "../firebase"; 
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Import Firestore functions

function AddItem() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch categories from Firestore collection
                const categoriesCollection = collection(db, 'category');
                const categoriesSnapshot = await getDocs(categoriesCollection);
    
                const categoriesData = categoriesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
    
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
    
        fetchData();
    }, []);
    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    
    const handleItemNameChange = (event) => {
        setItemName(event.target.value);
    };
    
    const handleItemDescriptionChange = (event) => {
        setItemDescription(event.target.value);
    };
    
    const handleItemPriceChange = (event) => {
        setItemPrice(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // Upload image to storage
            const imageRef = ref(storage, `images/${image.name}`);
            const uploadTask = uploadBytesResumable(imageRef, image);
            await uploadTask;

            const downloadURL = await getDownloadURL(imageRef);

            // Add item details to Firestore
            const itemsCollection = collection(db, `category/${selectedCategory}/items`);
            await addDoc(itemsCollection, { // Use addDoc to add item to Firestore
                name: itemName,
                description: itemDescription,
                price: itemPrice,
                imageUrl: downloadURL
            });
    
            alert('Item added successfully!');
        } catch (error) {
            console.error('Error adding item:', error.message);
        }
    };
    
    return (
        <div className="add-item1">
            <div className="add-item-header">
                <h3 className="add-item-header-txt">Add New Item</h3>
            </div>
            <div className="add-item-body">
                <form onSubmit={handleSubmit}>
                    <div className="add-item-form">
                        <div className="add-item-form-item">
                            <label className="add-item-form-label">Category</label>
                            <select className="add-item-form-input" onChange={handleCategoryChange}>
                                <option value="">Select a category</option>
                                <option value="1">Beverages</option>
                                <option value="2">Breakfast</option>
                                <option value="3">Lunch</option>
                                <option value="4">Dinner</option>
                            </select>
                        </div>
                        <div className="add-item-form-item">
                            <label className="add-item-form-label">Item Name</label>
                            <input className="add-item-form-input" type="text" onChange={handleItemNameChange} />
                        </div>
                        <div className="add-item-form-item">
                            <label className="add-item-form-label">Item Description</label>
                            <input className="add-item-form-input" type="text" onChange={handleItemDescriptionChange} />
                        </div>
                        <div className="add-item-form-item">
                            <label className="add-item-form-label">Item Price</label>
                            <input className="add-item-form-input" type="number" onChange={handleItemPriceChange} />
                        </div>
                        <div className="add-item-form-item">
                            <label className="add-item-form-label">Item Image</label>
                            <input className="add-item-form-input" type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>
                    <button className="add-item-btn" type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
}

export default AddItem;
