import { Router } from "express";
import { addProduct , getProduct , deleteProduct , updateProduct , partialUpdateProduct} from "../controllers/shopController.js";

const shoprouter = Router();

shoprouter.post("/newItem",addProduct );

shoprouter.get("/getItemData/:id", getProduct);

shoprouter.delete("/deleteItem/:id", deleteProduct);

shoprouter.put("/updateItem/:id", updateProduct);

shoprouter.patch("/", partialUpdateProduct);

export default shoprouter;
