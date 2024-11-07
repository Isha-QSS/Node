import { Router } from "express";

const userRoutes = Router();

userRoutes.post('/register/:id', (req, res) => {
   console.log(req.body);
});

userRoutes.post('/login/:id', (req, res) => {
    console.log(req.body);
});

userRoutes.get('/logout/:id', (req, res) => {
   res.send(`Hello ! ${req.params.id}`);
});

userRoutes.get('/profile', (req, res) => {
    res.send("user profile available");
});

export default userRoutes;
