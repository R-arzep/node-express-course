import Express, { json } from 'express';

const app = Express();
const mockUserData = 
[
    { name: 'Mark' },
    { name: 'Jill' }
];

app.get('/users',(req, res) => 
{
    res.json(
        {
            success: true,
            message: 'successfully got users. Nice!',
            user: mockUserData
        });
});
app.get('/users/:id',(req, res) => 
{
    console.log(req.params.id)
    res.json(
        {
            success: true,
            message: 'Got one user!',
            user: req.params.id
        });
});
app.post('/login',Express.json() ,(req, res) =>
{
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username = req.body.username;
    const password = req.body.password;
    // This should come from the database
    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if( username === mockUsername && password === mockPassword)
    {
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json(
            {
                success:true,
                message: 'password and username match!',
                token: 'Encrypted token goes'
            });
    }
    else
    {
        res.json(
            {
                success: false,
                message: 'password or username do not match'
            });
    }
});
app.listen(8000, () => console.log("Server is running"));