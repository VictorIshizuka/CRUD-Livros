# Using node express, MongoDB;
Criando uma API básica.

```
npm install express
npm install mongoose
```

# How to get your connection string

> go to organization > projects > database deployments
>
> search for Cmd Line Tools and click in Connect to Your Cluster then select Connect using VS Code and copy the link

# How to use your connection string

In src/config/dbConnect.js

> mongoose.connect("mongodb+srv://username:<password>@"organization".code.mongodb.net/collection-name")
